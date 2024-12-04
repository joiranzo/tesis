import dato from "../schemas/datos.js";

//Regstramos nuevo gremio
export const registrarGremio = async (req, res) => {
  
  try {
    let actualDato = await dato.findOne();

    if (actualDato == null) {actualDato = new dato(); }
    
    //verificamos que no se encuentre duplicado
    if (actualDato.gremios.id(req.body._id)!=null) {
      return res
        .status(409)
        .json({ message: "Valor no permitido, duplicado" });
    }

    //grabamos nuevo valor
    
    actualDato.gremios.push(req.body);
    const savedDato = await actualDato.save();
    return res
      .status(200)
      .send(savedDato.gremios);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Obtiene todos los gremios cargados
export const obtenerGremio = async (req, res) => {
  try {
    let actualDato = await dato.findOne();

    //Verificamos que existan gremios cargado
    if (actualDato == null || actualDato.gremios.length == 0) {
      return res
        .status(409)
        .json({ message: "No hay gremios cargados" });
    }

    return res.status(200).json(actualDato.gremios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Borra un gremio que viene por el parametro id
export const borrarGremio = async (req, res) => {
  
  try {
    let actualDato = await dato.findOne();

    //Verificamos que hay gremios cargados
    if (actualDato == null || actualDato.gremios.length == 0) {
      return res.status(409).json({ message: "No hay gremios cargados" });
    }

    //Verificamos que exista el gremio cargado
    let doc = actualDato.gremios.id(req.query.id);
    let indice = actualDato.gremios.indexOf(doc);
    if (indice == -1) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + req.query.id });
    }

    actualDato.gremios.splice(indice, 1);
    let savedDato = await actualDato.save();
    return res
      .status(200)
      .json(savedDato.gremios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//modifica el valor de un gremio, que viene por id
export const modificarGremio = async (req, res) => {
  
  try {
    let actualDato = await dato.findOne();

    //Verificamos que hay gremios cargados
    if (actualDato == null || actualDato.gremios.lengt == 0) {
      return res
        .status(409)
        .json({ message: "No hay gremios cargados" });
    }

    //Verificamos que el nuevo valor no exista ya
    if (actualDato.gremios.id(req.query.nuevo)!=null) {
      return res
        .status(409)
        .json({ message: "Valor no permitido, duplicado" });
    }

    //Obtenemos el valor anterior
    let doc = actualDato.gremios.id(req.query.id);
    let indice = actualDato.gremios.indexOf(doc);
    if (indice == -1) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + req.query.id });
    }

    //Grabamos el valor modificado
    doc._id=req.query.id
    actualDato.gremios.splice(indice, 1, doc);
    let savedDato = await actualDato.save();
    return res
      .status(200)
      .send(savedDato.gremios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const registrarTipo = async (req, res) => {
      
  try {
    let actualDato = await dato.findOne();

    //Buscamos el gremio que corresponde
    let doc = actualDato.gremios.id(req.query.id);
    let indice = actualDato.gremios.indexOf(doc);
    if (indice == -1) { //El gremio buscado no existe
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + req.query.id });
    }
    
    //Vericamos que no exista el tipo que queremos guardar
    const filtro = doc.tipos.filter((dato) => dato == req.body._id);
    if (filtro.length>0) return res //El tipo existe
      .status(409)
      .json({ message: "Valor no permitido, duplicado" });
    
    //Guardamos el nuevo código
    doc.tipos.push(req.body._id);
    const savedDato = await actualDato.save();
    return res
      .status(200)
      .send(savedDato.gremios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Obtiene todos los tipos de un gremio cargados
export const obtenerTipo = async (req, res) => {
    
  try {
    
    let actualDato = await dato.findOne();
    
    //Buscamos el gremio que corresponde
    const doc = actualDato.gremios.id(req.query.id);
    let indice = actualDato.gremios.indexOf(doc);
    if (indice == -1) { //El gremio buscado no existe
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + req.query.id });
    }

    //Verificamos que hay gremios cargados
    if (actualDato == null || actualDato.gremios.length == 0) {
      return res //No hay gremios cargados
        .status(409)
        .json({ message: "No hay gremios cargados" });
    }

    //Verificamos que hay codigos cargados
    if (doc.tipos.length == 0) {
      return res //No hay codigos cargados
        .status(409)
        .json({ message: "No hay codigos cargados" });
    }
   
    return res
      .status(200)
      .json(doc.tipos);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message });
  }
};

//Borra un rol que viene por el parametro id
export const borrarTipo = async (req, res) => {
    
  try {
    let actualDato = await dato.findOne();

    //Verificamos que hay gremios cargados
    if (actualDato == null || actualDato.gremios.length == 0) {
      return res  //No hay gremios cargados
        .status(409)
        .json({ message: "No hay gremios cargados" });
    }

    //Verificamos que hay exista el gremio solicitado
    let doc = actualDato.gremios.id(req.query.id);
    let indice = actualDato.gremios.indexOf(doc);
    if (indice == -1) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + req.query.id });
    }
    
    //Verificamos que hay exista el tipo solicitado
    indice = doc.tipos.indexOf(req.query.tipo);
    if (indice == -1) { 
      return res //No existe el tipo solicitado
        .status(409)
        .json({ message: "No se encuentra el valor " + req.query.tipo });
    }
    
    doc.tipos.splice(indice, 1);
    let savedDato = await actualDato.save();
      return res
        .status(200)
        .json(savedDato.gremios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//modifica el valor de un rol, que viene por id
export const modificarTipo = async (req, res) => {
    
  try {
    let actualDato = await dato.findOne();

    //verificamos que hay gremios cargados
    if (actualDato == null || actualDato.gremios.lengt == 0) {
      return res
      .status(409)
      .json({ message: "No hay gremios cargados" });
    }

    //Buscamos el documento que corresponde
    let doc = actualDato.gremios.id(req.query.id);
    let indice = actualDato.gremios.indexOf(doc);
    if (indice == -1) {
      return res
        .status(409)
        .json({ message: "No se encuentra el valor " + req.query.id });
    }
    
    //Verificamos que el nuevo valor no exista
    if (doc.tipos.id(req.query.viejo)!=null) {
      return res
      .status(409)
      .json({ message: "Valor no permitido, duplicado" });
    }

    //Modificamos y grabamos el nuevo dato
    indice=doc.tipos.indexOf(req.query.viejo)
    actualDato.gremios.id(req.query.id).tipos[indice]=req.query.nuevo;
    let savedDato = await actualDato.save();
    return res
      .status(200)
      .send(savedDato.gremios);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message });
  }
};
