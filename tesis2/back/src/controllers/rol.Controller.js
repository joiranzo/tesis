import dato from "../schemas/datos.js";

//Registra nuevos roles, si no están duplicados
export const registrarRol = async (req, res) => {
  
  try {
    let actualDato = await dato.findOne();

    if (actualDato == null) {actualDato = new dato()}

    //Verica que no este duplicado
    if (actualDato.roles.id(req.body._id)!=null) {
      return res
      .status(409)
      .json({ message: "Valor no permitido, duplicado" });
    }
    
    //Insertamos y grabamos nuevo rol
    actualDato.roles.push(req.body);
    let savedDato = await actualDato.save();
    return res
      .status(200)
      .send(savedDato.roles);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message });
  }
};

//Obtiene todos los roles cargados
export const obtenerRole = async (req, res) => {
  try {
    let actualDato = await dato.findOne();

    if (actualDato == null || actualDato.roles.length == 0) {
      return res
        .status(409)
        .json({ message: "No hay roles cargados" });
    }

    return res
      .status(200)
      .send(actualDato.roles);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message });
  }
};

//Borra un rol que viene por el parametro id
export const borrarRol = async (req, res) => {
  
  try {
    let actualDato = await dato.findOne();

    if (actualDato == null || actualDato.roles.length == 0) {
      return res
        .status(409)
        .json({ message: "No hay roles cargados" });
    }

    let doc = actualDato.roles.id(req.query.id);
    let indice = actualDato.roles.indexOf(doc);
    if (indice == -1) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + req.query.id });
    }

    actualDato.roles.splice(indice, 1);
    let savedDato = await actualDato.save();
    return res
      .status(200)
      .send(savedDato.roles);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message });
  }
};

//modifica el valor de un rol, que viene por id
export const modificarRol = async (req, res) => {
  
  try {
    let actualDato = await dato.findOne();

    if (actualDato == null || actualDato.roles.lengt == 0) {
      return res
        .status(409)
        .json({ message: "No hay roles cargados" });
    }

    //Verica que no este duplicado
    if (actualDato.roles.id(req.query.nuevo)!=null) {
      return res.status(409).json({ message: "Valor no permitido, duplicado" });
    }

    let doc = actualDato.roles.id(req.query.id);
    let indice = actualDato.roles.indexOf(doc);
    if (indice == -1) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + req.query.id });
    }

    doc._id=req.query.nuevo
    actualDato.roles.splice(indice, 1, doc);
    let savedDato = await actualDato.save();
    return res
      .status(200)
      .send(savedDato.roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
