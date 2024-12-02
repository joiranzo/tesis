import dato from "../models/datos.js";
import tipoSubRegion from "../models/tipoSubregion.js";
import { capitalizar, duplicado } from "../middlewares/funcionesPropias.js";

export const registrarSubRegion = async (req, res) => {
  const subRegion = tipoSubRegion;
  subRegion._id = capitalizar(req.body._id);

  try {
    let actualDato = await dato.findOne();

    if (actualDato == null) {
      actualDato = new dato();
    }

    if (duplicado(actualDato.subRegiones, subRegion._id)) {
      return res.status(409).json({ message: "Valor no permitido, duplicado" });
    }

    actualDato.subRegiones.push(subRegion);
    const savedDato = await actualDato.save();
    return res.status(200).json({ message: subRegion._id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const obtenerSubRegion = async (req, res) => {
  try {
    let actualDato = await dato.findOne();

    if (actualDato == null || actualDato.subRegiones.length == 0) {
      return res.status(409).json({ message: "No hay roles cargados" });
    }

    return res.status(200).json(actualDato.subRegiones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const borrarSubRegion = async (req, res) => {
  const subRegion = tipoSubRegion;
  subRegion._id = capitalizar(req.query.id);

  try {
    let actualDato = await dato.findOne();

    if (actualDato == null || actualDato.subRegiones.length == 0) {
      return res.status(409).json({ message: "No hay SubRegiones cargados" });
    }

    const doc = actualDato.subRegiones.id(subRegion._id);
    let indice = actualDato.subRegiones.indexOf(doc);
    if (indice == -1) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + subRegion._id });
    }

    actualDato.subRegiones.splice(indice, 1);
    const savedDato = actualDato.save();
    res.status(200).json(actualDato.subRegiones._id);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const modificarSubRegion = async (req, res) => {
  const subRegion = tipoSubRegion;
  subRegion._id = capitalizar(req.body._id);
  const viejo = capitalizar(req.query.id);

  try {
    let actualDato = await dato.findOne();

    if (actualDato == null || actualDato.subRegiones.lengt == 0) {
      return res.status(409).json({ message: "No hay subregiones cargados" });
    }

    if (duplicado(actualDato.subRegiones, subRegion._id)) {
      return res.status(409).json({ message: "Valor no permitido, duplicado" });
    }

    const doc = actualDato.subRegiones.id(viejo);
    let indice = actualDato.subRegiones.indexOf(doc);
    if (indice == -1) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + viejo });
    }

    actualDato.subRegiones.splice(indice, 1, subRegion);
    const savedDato = await actualDato.save();
    res.status(200).send(subRegion._id);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
