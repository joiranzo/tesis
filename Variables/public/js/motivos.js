let icon1=document.getElementById("icon1");
let icon3=document.getElementById("icon_cerrar");
let form1=document.getElementById("nuevo");
let icon2=document.getElementById("cancelar");

let inputs=document.getElementsByClassName("campo");
let bts_editar=document.getElementsByClassName("editar");
let bts_cancelar=document.getElementsByClassName("cancelar");
let bts_aceptar=document.getElementsByClassName("grabar");
let bts_borrar=document.getElementsByClassName("borrar");
let filas=document.getElementsByClassName("fila")

icon1.addEventListener("click",(e)=>{
    for (const key in filas) {
        if (Object.hasOwnProperty.call(filas, key)) {
            const element = filas[key];
            element.classList.remove("form_visible")
    }
    form1.classList.add("form_visible")    
}})

icon2.addEventListener("click",(e)=>{
    form1.classList.remove("form_visible")    
    for (const key in filas) {
        if (Object.hasOwnProperty.call(filas, key)) {
            const element = filas[key];
            element.classList.add("form_visible")
    }
    
}})

for (const key in bts_editar) {
    if (Object.hasOwnProperty.call(bts_editar, key)) {
        const element = bts_editar[key];
        
        element.addEventListener("click",(e)=>{
            bts_cancelar[key].classList.add("btn_visible")
            bts_aceptar[key].classList.add("btn_visible")
            element.classList.remove("btn_visible")
            bts_borrar[key].classList.remove("btn_visible")
            inputs[key].classList.add("borde_visible")
            inputs[key].removeAttribute("disabled")
        })
    }
}

for (const key in bts_cancelar) {
    if (Object.hasOwnProperty.call(bts_cancelar, key)) {
        const element = bts_cancelar[key];
        
        element.addEventListener("click",(e)=>{
            bts_editar[key].classList.add("btn_visible")
            bts_aceptar[key].classList.remove("btn_visible")
            element.classList.remove("btn_visible")
            bts_borrar[key].classList.add("btn_visible")
            inputs[key].classList.remove("borde_visible")
            inputs[key].setAttribute("disabled")
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
    

   