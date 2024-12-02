import dato from "../models/datos.js";
import tipoRol from "../models/tipoRol.js";
import { capitalizar, duplicado } from "../middlewares/funcionesPropias.js";

//Registra nuevos roles, si no están duplicados
export const registrarRol = async (req, res) => {
  const rol = tipoRol;
  rol._id = capitalizar(req.body._id);

  try {
    let actualDato = await dato.findOne();

    if (actualDato == null) {
      actualDato = new dato();
    }

    if (duplicado(actualDato.roles, rol._id)) {
      return res.status(409).json({ message: "Valor no permitido, duplicado" });
    }

    actualDato.roles.push(rol);
    const savedDato = await actualDato.save();
    return res.status(200).json({ message: rol._id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Obtiene todos los roles cargados
export const obtenerRoles = async (req, res) => {
  try {
    let actualDato = await dato.findOne();

    if (actualDato == null || actualDato.roles.length == 0) {
      return res.status(409).json({ message: "No hay roles cargados" });
    }

    return res.status(200).json(actualDato.roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Borra un rol que viene por el parametro id
export const borrarRol = async (req, res) => {
  const rol = tipoRol;
  rol._id = capitalizar(req.query.id);

  try {
    let actualDato = await dato.findOne();

    if (actualDato == null || actualDato.roles.length == 0) {
      return res.status(409).json({ message: "No hay roles cargados" });
    }

    const doc = actualDato.roles.id(rol._id);
    let indice = actualDato.roles.indexOf(doc);
    if (indice == -1) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + nombre });
    }

    actualDato.roles.splice(indice, 1);
    const savedDato = actualDato.save();
    res.status(200).json(savedDato.roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//modifica el valor de un rol, que viene por id
export const modificarRol = async (req, res) => {
  const rol = tipoRol;
  rol._id = capitalizar(req.body._id);
  const viejo = capitalizar(req.query.id);

  try {
    let actualDato = await dato.findOne();

    if (actualDato == null || actualDato.roles.lengt == 0) {
      return res.status(409).json({ message: "No hay roles cargados" });
    }

    if (duplicado(actualDato.roles, rol._id)) {
      return res.status(409).json({ message: "Valor no permitido, duplicado" });
    }

    const doc = actualDato.roles.id(viejo);
    let indice = actualDato.roles.indexOf(doc);
    if (indice == -1) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + viejo });
    }

    actualDato.roles.splice(indice, 1, rol);
    const savedDato = await actualDato.save();
    res.status(200).send(rol._id);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
