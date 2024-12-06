import { getPlataforma, getStream } from "../middlewares/funcionesPropias.js";
import tipoStream from "../models/tipoStream.js";
import plataforma from "../schemas/plataforma.js";

//LOGICA DE PLATAFORMA
//Registra nuevas plataformas, si no están duplicados
export const registrarPlataforma = async (req, res) => {
  try {
    let actual = await plataforma.findOne({
      nombre: req.body.nombre,
    });

    if (actual == null) {
      actual = new plataforma();
    } else return res.status(409).json({ message: "Error Valor duplicado" });

    actual.nombre = req.body.nombre;
    actual.po = null;
    let saved = await actual.save();
    return res.status(200).send(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Obtiene todos los plataformas cargados
export const obtenerPlataforma = async (req, res) => {
  try {
    let actualPlataforma = await plataforma.find();

    if (actualPlataforma == null) {
      return res.status(409).json({ message: "No hay plataformas cargadas" });
    }

    return res.status(200).send(actualPlataforma);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Borra una plataforma que viene por el parametro id
export const borrarPlataforma = async (req, res) => {
  try {
    console.log(req.query.id);
    let actual = await plataforma.findOneAndDelete({ nombre: req.query.id });

    if (actual == null) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + req.query.id });
    }

    return res.status(200).send(plataforma.find());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//modifica el valor de una plataforma, que viene por id
export const modificarPlataforma = async (req, res) => {
  try {
    let actual = await plataforma.findOne({ nombre: req.query.id });

    if (actual == null) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + req.query.id });
    }

    actual.nombre = req.query.nuevo;
    actual.po = req.query.po;
    let saved = await actual.save();
    return res.status(200).send(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//LOGICA DE STREAM
//Registra nuevas stream, si no están duplicados

export const registrarStream = async (req, res) => {
  try {
    let plat = await plataforma.findOne({ nombre: id });
    if (plat == null) {
      return res
        .status(409)
        .json({
          message: "La plaforma " + req.query.plat + " no de encuentra cargada",
        });
    }

    let actual = plat.streams.id(req.body._id);
    if (actual != null) {
      return res.status(409).json({ message: "Valor Duplicado" });
    }

    let stream = tipoStream;
    stream._id = req.body._id;
    plat.streams.push(stream);
    let saved = await plat.save();
    return res.status(200).send(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Obtiene todos los stream cargados en la plataforma
export const obtenerStream = async (req, res) => {
  try {
    let actual = await plataforma.findOne({
      nombre: req.query.plat,
    });

    if (actual == null) {
      return res.status(409).json({ message: "No hay plataformas cargadas" });
    }

    return res.status(200).send(actual.streams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Borra un stream de la plataforma que viene por el parametro id
export const borrarStream = async (req, res) => {
  try {
    let actual = await plataforma.findOneAndDelete({ nombre: req.query.id });

    if (actual == null) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + req.query.id });
    }

    let saved = await actual.save();
    return res.status(200).send(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//modifica el nombre de un stream que viene por id
export const modificarStream = async (req, res) => {
  try {
    let actual = await plataforma.findOne({ nombre: req.query.id });

    if (actual == null) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + req.query.id });
    }

    actual.nombre = req.query.nuevo;
    let saved = await actual.save();
    return res.status(200).send(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
