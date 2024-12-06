import dato from "../schemas/datos.js";

//Registra nuevos roles, si no están duplicados
export const registrarTipoNovedad = async (req, res) => {
              
    try {
      let actualDato = await dato.findOne();

      if (actualDato == null) {
        actualDato = new dato();
      }

    if (actualDato.tiposNovedades.id(req.body._id)!=null) {
      return res
        .status(409)
        .json({ message: "Valor no permitido, duplicado" });
    }

    actualDato.tiposNovedades.push(req.body);
    let savedDato = await actualDato.save();
    return res
      .status(200)
      .send(savedDato.tiposNovedades)

   } catch (error) {
      res
        .status(500)
        .json({ message: error.message });
   }
};

//Obtiene todos los roles cargados
export const obtenerTiposNovedades = async (req, res) => {
  try {
    let actualDato = await dato.findOne();

    if (actualDato == null || actualDato.tiposNovedades.length == 0) {
      return res
        .status(409)
        .json({ message: "No hay tipos de novedades cargadas" });
    }

    return res
      .status(200)
      .send(actualDato.tiposNovedades);
  } catch (error) {
      res
      .status(500)
      .json({ message: error.message });
  }
};

//modifica el valor de un rol, que viene por id
export const modificarTipoNovedad = async (req, res) => {
  //No se debe permitir modificar el id, el resto si
   
    try {
      let actualDato = await dato.findOne();
  
      if (actualDato == null || actualDato.tiposNovedades.lengt == 0) {
        return res
        .status(409)
        .json({ message: "No hay tipos de novedades cargadas" });
      }
        
      let doc=actualDato.tiposNovedades.id(req.query.id)
      let indice = actualDato.tiposNovedades.indexOf(doc);
      if (indice == -1) {
        return res
          .status(409)
          .json({ message: "No se encuentra el valor " + req.query.id });
      }

      doc._id=req.query.nuevo
      actualDato.tiposNovedades.splice(indice, 1, doc);
      let savedDato = await actualDato.save();
      return res
        .status(200)
        .send(savedDato.tiposNovedades);
    } catch (error) {
        res
          .status(500)
          .json({ message: error.message });
    }
  };

//Borra un rol que viene por el parametro id
export const borrarTipoNovedad = async (req, res) => {
   
    try {
      let actualDato = await dato.findOne();
  
      if (actualDato == null || actualDato.tiposNovedades.length == 0) {
        return res
          .status(409)
          .json({ message: "No hay tipos de novedades cargadas" });
      }

      let doc=actualDato.tiposNovedades.id(id)
      let indice = actualDato.tiposNovedades.indexOf(doc);
            if (indice == -1) {
        return res
          .status(409)
          .json({ message: "No se encuentra el valor " + req.query.id });
      }
  
      actualDato.roles.splice(indice, 1);
      let savedDato = await actualDato.save();
      return res
        .status(200)
        .send(savedDato.tiposNovedades);
    } catch (error) {
        res
          .status(500)
          .json({ message: error.message });
    }
  };
  