import dato from "../schemas/datos.js";

export const registrarSubRegion = async (req, res) => {
   
  try {
    let actualDato = await dato.findOne();

    if (actualDato == null) {actualDato = new dato()}

    if (actualDato.subRegiones.id(req.body._id)!=null) {
      return res
        .status(409)
        .json({ message: "Valor no permitido, duplicado" });
    }
    
    
    actualDato.subRegiones.push(req.body._id);
    let savedDato = await actualDato.save();
    return res
      .status(200)
      .send(savedDato.subRegiones);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message });
  }
};

export const obtenerSubRegion = async (req, res) => {
  try {
    let actualDato = await dato.findOne();

    if (actualDato == null || actualDato.subRegiones.length == 0) {
      return res
        .status(409)
        .json({ message: "No hay subregiones cargadas" });
    }

    return res
      .status(200)
      .json(actualDato.subRegiones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const borrarSubRegion = async (req, res) => {
    
  try {
    let actualDato = await dato.findOne();

    if (actualDato == null || actualDato.subRegiones.length == 0) {
      return res
        .status(409)
        .json({ message: "No hay SubRegiones cargados" });
    }

    let doc = actualDato.subRegiones.id(req.query.id);
    let indice = actualDato.subRegiones.indexOf(doc);
    if (indice == -1) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + req.query.id });
    }
    
    actualDato.subRegiones.splice(indice, 1);
    let savedDato = await actualDato.save();
    res
      .status(200)
      .send(savedDato.subRegiones);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message });
  }
};

export const modificarSubRegion = async (req, res) => {
  
  try {
    let actualDato = await dato.findOne();

    if (actualDato == null || actualDato.subRegiones.lengt == 0) {
      return res.status(409).json({ message: "No hay subregiones cargados" });
    }

    if (actualDato.subRegiones.id(req.query.nuevo)!=null) {
      return res.status(409).json({ message: "Valor no permitido, duplicado" });
    }

    let doc = actualDato.subRegiones.id(req.query.id);
    let indice = actualDato.subRegiones.indexOf(doc);
    if (indice == -1) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + req.query.id });
    }

    doc._id=req.query.nuevo
    actualDato.subRegiones.splice(indice, 1, doc);
    let savedDato = await actualDato.save();
    return res
      .status(200)
      .send(savedDato.subRegiones);
  } catch (error) {
      res
      .status(500)
      .json({ message: error.message });
  }
};
