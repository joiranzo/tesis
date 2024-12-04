import dato from "../schemas/datos.js";

export const registrarSectorOperativo = async (req, res) => {
  
  try {
    let actualDato = await dato.findOne();

    if (actualDato == null) {
      actualDato = new dato();
    }

    if (actualDato.sectoresOperativos.id(req.body._id)!=null) {
      return res
        .status(409)
        .json({ message: "Valor no permitido, duplicado" });
    }

    
    actualDato.sectoresOperativos.push(req.body);
    let savedDato = await actualDato.save();
    return res
      .status(200)
      .send(savedDato.sectoresOperativos);
  } catch (error) {
      res
      .status(500)
      .json({ message: error.message });
  }
};

export const obtenerSectorOperativo = async (req, res) => {
  try {
    let actualDato = await dato.findOne();

    if (actualDato == null || actualDato.sectoresOperativos.length == 0) {
      return res
        .status(409)
        .json({ message: "No hay sectores operativos cargados" });
    }

    return res
      .status(200)
      .json(actualDato.sectoresOperativos);
  } catch (error) {
      res
        .status(500)
        .json({ message: error.message });
  }
};

export const borrarSectorOperativo = async (req, res) => {
  
  try {
    let actualDato = await dato.findOne();

    if (actualDato == null || actualDato.sectoresOperativos.length == 0) {
      return res.status(409).json({ message: "No hay SectorOperativoes cargados" });
    }

    let doc = actualDato.sectoresOperativos.id(req.query.id);
    let indice = actualDato.sectoresOperativos.indexOf(doc);
    if (indice == -1) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + req.query.id });
    }

    actualDato.sectoresOperativos.splice(indice, 1);
    let savedDato = await actualDato.save();
      return res
        .status(200)
        .send(savedDato.sectoresOperativos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const modificarSectorOperativo = async (req, res) => {
  
  try {
    let actualDato = await dato.findOne();

    if (actualDato == null || actualDato.sectoresOperativos.lengt == 0) {
      return res
        .status(409)
        .json({ message: "No hay SectorOperativoes cargados" });
    }

    if (actualDato.sectoresOperativos.id(req.query.nuevo)!=null) {
      return res
        .status(409)
        .json({ message: "Valor no permitido, duplicado" });
    }

    let doc = actualDato.sectoresOperativos.id(req.query.id);
    let indice = actualDato.sectoresOperativos.indexOf(doc);
    if (indice == -1) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + viejo });
    }
    doc._id=req.query.nuevo
    actualDato.sectoresOperativos.splice(indice, 1, doc);
    let savedDato = await actualDato.save();
    return res
      .status(200)
      .send(savedDato.sectoresOperativos);
  } catch (error) {
      res
        .status(500)
        .json({ message: error.message });
  }
};
