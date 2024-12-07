
import plataforma from "../schemas/plataforma.js";

//Regstramos nuevo empleado
export const registrarEmpleado = async (req, res) => {
  
  try {
    let plata = await plataforma.findOne({
      nombre: req.query.plat,
    });
    
    let stream=plata.streams.id(req.query.stre)
    // if (actualPlataforma == null) {
    //   actualPlataforma = new plataforma();
    // }
    console.log(stream)
    // //verificamos que no se encuentre duplicado
    // if (actualPlataforma.empleados.id(req.body._id)!=null) {
    //   return res
    //     .status(409)
    //     .json({ message: "Valor no permitido, duplicado" });
    // }
    
    //grabamos nuevo valor
    stream.empleados.push(req.body);
    let savedPlataforma = await plata.save();
    return res
      .status(200)
      .send(savedPlataforma.empleados);

  } catch (error) {
    res
      .status(500)
      .json({ message: error.message });
  }
};

//Obtiene todos los gremios cargados
export const obtenerEmpleado = async (req, res) => {
  try {
    let actualPlataforma = await plataforma.findOne();

    //Verificamos que existan gremios cargado
    if (actualPlataforma == null || actualPlataforma.empleados.length == 0) {
      return res
        .status(409)
        .json({ message: "No hay empleados cargados" });
    }

    return res
      .status(200)
      .json(actualPlataforma.empleados);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

//Borra un gremio que viene por el parametro id
export const borrarEmpleado = async (req, res) => {

  try {
    let actualPlataforma = await plataforma.findOne();

    //Verificamos que hay gremios cargados
    if (actualPlataforma == null || actualPlataforma.gremios.length == 0) {
      return res.status(409).json({ message: "No hay gremios cargados" });
    }

    //Verificamos que exista el gremio cargado
    let doc = actualPlataforma.gremios.id(req.query.id);
    let indice = actualPlataforma.gremios.indexOf(doc);
    if (indice == -1) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + nombre });
    }

    actualPlataforma.gremios.splice(indice, 1);
    let savedPlataforma = await actualPlataforma.save();
    return res
      .status(200)
      .json(savedPlataforma.gremios);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message });
  }
};

//modifica el valor de un gremio, que viene por id
export const modificarEmpleado = async (req, res) => {
  
  try {
    let actualPlataforma = await plataforma.findOne();

    //Verificamos que hay gremios cargados
    if (actualPlataforma == null || actualPlataforma.gremios.lengt == 0) {
      return res
        .status(409)
        .json({ message: "No hay gremios cargados" });
    }

    //Verificamos que el nuevo valor no exista ya
    if (actualPlataforma.gremios.id(req.query.id)!=null) {
      return res
        .status(409)
        .json({ message: "Valor no permitido, duplicado" });
    }

    //Obtenemos el valor anterior
    let doc = actualPlataforma.gremios.id(req.query.viejo);
    let indice = actualPlataforma.gremios.indexOf(doc);
    if (indice == -1) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + req.query.viejo });
    }

    //Grabamos el valor modificado
    actualPlataforma.empleados[indice]=req.body;
    let savedPlataforma = await actualPlataforma.save();
    return res
      .status(200)
      .send(savedPlataforma.empleados);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message });
  }
};

