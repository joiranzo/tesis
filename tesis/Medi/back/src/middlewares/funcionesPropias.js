import plataforma from "../schemas/plataforma.js";

export function duplicado (datos,valor){
   const filtro = datos.filter((dato) => dato._id == valor);
   if (filtro.length>0) return true
   return false
}

export function tipoNovedadDuplicada (arreglo1,arreglo2,valor){
   
   const a=arreglo1[arreglo2].id(valor)
   if (a==null) return false
   return true
}

export function SubRegionDuplicado (arreglo,valor){
   
   const a=arreglo.subRegion.id(valor)
   if (a==null) return false
   return true
}

//Da el formato capitalizado a un texto
export function capitalizar(texto) {
    
   return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
   }

export async function getPlataforma(id){
   return  await plataforma.findOne({
      nombre: id,
    });
}   

export async function getStream(idPlat, idStream){
   let plat=await getPlataforma(idPlat)
   if (plat==null) {return -1}
   
   let stream=plat.streams.id(idStream)
   console.log(stream)
   return  stream
   
}
 