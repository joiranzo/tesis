let icon1=document.getElementById("icon1");
let icon3=document.getElementById("icon_cerrar");
let icon2=document.getElementById("cancelar");
let form1=document.getElementById("nuevo");
let form2=document.getElementById("seleccion");

let inputs=document.getElementsByClassName("campo");
let bts_editar=document.getElementsByClassName("editar");
let bts_cancelar=document.getElementsByClassName("cancelar");
let bts_aceptar=document.getElementsByClassName("grabar");
let bts_borrar=document.getElementsByClassName("borrar");
let filas=document.getElementsByClassName("fila")

icon1.addEventListener("click",(e)=>{
    /*for (const key in filas) {
        if (Object.hasOwnProperty.call(filas, key)) {
            const element = filas[key];
            element.classList.remove("visible_flex")
    }*/
    form1.classList.add("visible_flex")
    form2.classList.add("invisible")
    //bts_cancelar[0].classList.add("visible_inline")
    //bts_aceptar[0].classList.add("visible_inline")    
})

icon2.addEventListener("click",(e)=>{
      
    /*for (const key in filas) {
        if (Object.hasOwnProperty.call(filas, key)) {
            const element = filas[key];
            element.classList.add("visible_flex")
    }*/
    form1.classList.remove("visible_flex")  
    form2.classList.remove("invisible")
})

for (const key in bts_editar) {
    if (Object.hasOwnProperty.call(bts_editar, key)) {
        const element = bts_editar[key];
        
        element.addEventListener("click",(e)=>{
            bts_cancelar[key].classList.add("visible_inline")
            bts_aceptar[key].classList.add("visible_inline")
            element.classList.add("invisible")
            bts_borrar[key].classList.add("invisible")
            inputs[key].classList.add("borde_visible")
            inputs[key].removeAttribute("disabled")
        })
    }
}

for (const key in bts_cancelar) {
    if (Object.hasOwnProperty.call(bts_cancelar, key)) {
        const element = bts_cancelar[key];

        element.addEventListener("click",(e)=>{
            bts_editar[key].classList.add("visible_inline")
            bts_aceptar[key].classList.remove("visible_inline")
            element.classList.remove("visible_inline")
            bts_borrar[key].classList.add("visible_inline")
            inputs[key].classList.remove("borde_visible")
            inputs[key].setAttribute("disabled","")
            form1.classList.remove("visible_flex") 
        })
    }
}
    
for (const key in bts_aceptar) {
    if (Object.hasOwnProperty.call(bts_aceptar, key)) {
        const element = bts_aceptar[key];
        
        element.addEventListener("click",(e)=>{
            bts_editar[key].classList.add("btn_visible")
            bts_cancelar[key].classList.remove("btn_visible")
            element.classList.remove("btn_visible")
            bts_borrar[key].classList.add("btn_visible")
            inputs[key].classList.remove("borde_visible")
            inputs[key].setAttribute("disabled")
        })
    }
}    
    

   