import dato from "../schemas/datos.js";
import tipoMotivo from "../models/tipoMotivo.js";
import { capitalizar, duplicado } from "../middlewares/funcionesPropias.js";


export const registrarMotivo = async (req, res) => {
  
  try {
    let actualDato = await dato.findOne();

    if (actualDato == null) {
      actualDato = new dato();
    }

    if (duplicado(actualDato.motivos, req.body._id)) {
      return res
        .status(409).
        json({ message: "Valor no permitido, duplicado" });
    }

    actualDato.motivos.push(req.body);
    let savedDato = await actualDato.save();
    return res
      .status(200)
      .send(savedDato.motivos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const obtenerMotivo = async (req, res) => {
  try {
    let actualDato = await dato.findOne();

    if (actualDato == null || actualDato.motivos.length == 0) {
      return res.status(409).json({ message: "No hay motivos cargados" });
    }

    return res.status(200).json(actualDato.motivos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const borrarMotivo = async (req, res) => {
  const motivo = tipoMotivo;
  motivo._id = capitalizar(req.query.id);

  try {
    let actualDato = await dato.findOne();

    if (actualDato == null || actualDato.motivos.length == 0) {
      return res.status(409).json({ message: "No hay motivos cargados" });
    }

    const doc = actualDato.motivos.id(motivo._id);
    let indice = actualDato.motivos.indexOf(doc);
    if (indice == -1) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + motivo._id });
    }

    actualDato.motivos.splice(indice, 1);
    const savedDato = actualDato.save();
    res.status(200).json(savedDato.motivos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//modifica el valor de un rol, que viene por id
export const modificarMotivo = async (req, res) => {
  const motivo = tipoMotivo;
  motivo._id = capitalizar(req.body._id);
  const viejo = capitalizar(req.query.id);

  try {
    let actualDato = await dato.findOne();

    if (actualDato == null || actualDato.motivos.lengt == 0) {
      return res.status(409).json({ message: "No hay motivos cargados" });
    }

    if (duplicado(actualDato.motivos, motivo._id)) {
      return res.status(409).json({ message: "Valor no permitido, duplicado" });
    }

    const doc = actualDato.motivos.id(viejo);
    let indice = actualDato.motivos.indexOf(doc);
    if (indice == -1) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + viejo });
    }

    actualDato.motivos.splice(indice, 1, motivo);
    const savedDato = await actualDato.save();
    res.status(200).send(motivo._id);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
