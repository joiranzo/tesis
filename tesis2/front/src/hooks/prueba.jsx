import { useEffect, useState } from 'react';

export const capi= (texto) => {
  const [salida, SetSalida]=useState[texto]  
  

  const cap=() =>{
    SetSalida(
        texto[0].toUpperCase()+
        texto.splice(1).toLowerCase()
    )}
   
  useEffect({cap},[texto])  


  return (
    salida  
  )
}
