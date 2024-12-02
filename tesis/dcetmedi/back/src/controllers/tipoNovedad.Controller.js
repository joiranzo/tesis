import dato from "../models/datos.js";
import { tipoNovedadDuplicada } from "../middlewares/funcionesPropias.js";
import tipoNovedad from "../models/tipoNovedad.js";

//Registra nuevos roles, si no están duplicados
export const registrarTipoNovedad = async (req, res) => {
    
    const novedad = tipoNovedad
    
    novedad._id=req.body._id.toUpperCase()
    novedad.nombre=req.body.nombre
	  novedad.limiteDiario=req.body.limiteDiario
	  novedad.limiteMensual=req.body.limiteMensual
    novedad.limiteAnual=req.body.limiteAnual
	  novedad.rango=req.body.rango
	  novedad.motivo=req.body.motivo
	  novedad.descripcion=req.body.descripcion
	  novedad.utilizacion=req.body.utilizacion
	  novedad.uso=req.body.uso
  
    try {
      let actualDato = await dato.findOne();

      if (actualDato == null) {
        actualDato = new dato();
      }

    if (tipoNovedadDuplicada(actualDato, novedad._id)) {
      return res.status(409).json({ message: "Valor no permitido, duplicado" });
    }

    actualDato.tiposNovedades.push(novedad);
    const savedDato = await actualDato.save();
    return res.status(200).send("Ok")

   } catch (error) {
    res.status(500).json({ message: error.message });
   }
};

//Obtiene todos los roles cargados
export const obtenerTiposNovedades = async (req, res) => {
  try {
    let actualDato = await dato.findOne();

    if (actualDato == null || actualDato.tiposNovedades.length == 0) {
      return res.status(409).json({ message: "No hay tipos de novedades cargadas" });
    }

    return res.status(200).json(actualDato.tiposNovedades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//modifica el valor de un rol, que viene por id
export const modificarTipoNovedad = async (req, res) => {
  
  const novedad = tipoNovedad
    
    novedad._id=req.body._id.toUpperCase()
    novedad.nombre=req.body.nombre
	  novedad.limiteDiario=req.body.limiteDiario
	  novedad.limiteMensual=req.body.limiteMensual
    novedad.limiteAnual=req.body.limiteAnual
	  novedad.rango=req.body.rango
	  novedad.motivo=req.body.motivo
	  novedad.descripcion=req.body.descripcion
	  novedad.utilizacion=req.body.utilizacion
	  novedad.uso=req.body.uso
  // const rol = new String(req.query.id).capitalize();
    // const nombre = new String(req.body.nombre).capitalize();
  
    try {
      let actualDato = await dato.findOne();
  
      if (actualDato == null || actualDato.tiposNovedades.lengt == 0) {
        return res.status(409).json({ message: "No hay tipos de novedades cargadas" });
      }
  
      // if (nombre == "Undefined") {
      //   return res.status(409).json({ message: "Falta nuevo valor" });
      // }
  
      // if (tipoNovedadDuplicada(actualDato, nombre)) {
      //   return res.status(409).json({ message: "Valor no permitido, duplicado" });
      // }
      const tipoNovedad=actualDato.tiposNovedades.id(novedad._id)
      let indice = actualDato.tiposNovedades.indexOf(tipoNovedad);
      if (indice == -1) {
        return res.status(409).json({ message: "No se encuentra el valor " + rol });
      }
  
      actualDato.tiposNovedades.splice(indice, 1, tipoNovedad);
      const savedDato = await actualDato.save();
      res.status(200).json({ message: nombre });
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  //Borra un rol que viene por el parametro id
export const borrarTipoNovedad = async (req, res) => {
    const nombre = new String(req.query.id).toUpperCase()
  
    try {
      let actualDato = await dato.findOne();
  
      if (actualDato == null || actualDato.tiposNovedades.length == 0) {
        return res.status(409).json({ message: "No hay tipos de novedades cargadas" });
      }
      const tipoNovedad=actualDato.tiposNovedades.id(novedad._id)
      let indice = actualDato.tiposNovedades.indexOf(tipoNovedad);
            if (indice == -1) {
        return res.status(409).json({ message: "No se encuentra el valor " + nombre });
      }
  
      actualDato.roles.splice(indice, 1);
      const savedDato = actualDato.save();
      res.status(200).json(savedDato.roles);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  