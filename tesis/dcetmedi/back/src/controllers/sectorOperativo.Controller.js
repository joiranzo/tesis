import dato from "../models/datos.js";
import tipoSectorOperativo from "../models/tipoSectorOperativo.js";
import { capitalizar, duplicado } from "../middlewares/funcionesPropias.js";

export const registrarSectorOperativo = async (req, res) => {
  const sectorOperativo = tipoSectorOperativo;
  sectorOperativo._id = capitalizar(req.body._id);

  try {
    let actualDato = await dato.findOne();

    if (actualDato == null) {
      actualDato = new dato();
    }

    if (duplicado(actualDato.sectoresOperativos, sectorOperativo._id)) {
      return res.status(409).json({ message: "Valor no permitido, duplicado" });
    }

    actualDato.sectoresOperativos.push(sectorOperativo);
    const savedDato = await actualDato.save();
    return res.status(200).json({ message: sectorOperativo._id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const obtenerSectorOperativo = async (req, res) => {
  try {
    let actualDato = await dato.findOne();

    if (actualDato == null || actualDato.sectoresOperativos.length == 0) {
      return res.status(409).json({ message: "No hay sectores operativos cargados" });
    }

    return res.status(200).json(actualDato.sectoresOperativos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const borrarSectorOperativo = async (req, res) => {
  const sectorOperativo = tipoSectorOperativo;
  sectorOperativo._id = capitalizar(req.query.id);

  try {
    let actualDato = await dato.findOne();

    if (actualDato == null || actualDato.sectoresOperativos.length == 0) {
      return res.status(409).json({ message: "No hay SectorOperativoes cargados" });
    }

    const doc = actualDato.sectoresOperativos.id(sectorOperativo._id);
    let indice = actualDato.sectoresOperativos.indexOf(doc);
    if (indice == -1) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + SectorOperativo._id });
    }

    actualDato.sectorOperativos.splice(indice, 1);
    const savedDato = actualDato.save();
    res.status(200).json(actualDato.sectoresOperativos._id);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const modificarSectorOperativo = async (req, res) => {
  const sectorOperativo = tipoSectorOperativo;
  sectorOperativo._id = capitalizar(req.body._id);
  const viejo = capitalizar(req.query.id);

  try {
    let actualDato = await dato.findOne();

    if (actualDato == null || actualDato.sectorOperativos.lengt == 0) {
      return res.status(409).json({ message: "No hay SectorOperativoes cargados" });
    }

    if (duplicado(actualDato.sectorOperativos, sectorOperativo._id)) {
      return res.status(409).json({ message: "Valor no permitido, duplicado" });
    }

    const doc = actualDato.sectoresOperativos.id(viejo);
    let indice = actualDato.sectoresOperativos.indexOf(doc);
    if (indice == -1) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + viejo });
    }

    actualDato.sectorOperativos.splice(indice, 1, sectorOperativo);
    const savedDato = await actualDato.save();
    res.status(200).send(sectorOperativo._id);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
