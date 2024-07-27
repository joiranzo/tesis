let icon1=document.getElementById("icon_buscar");
let sel1=document.getElementById("sel_buscar");
let icon2=document.getElementById("icon_mas");
let cont1=document.getElementById("conte_form");
let icon3=document.getElementById("icon_cerrar");

let inputs=document.getElementsByClassName("input");
let bts_editar=document.getElementsByClassName("editar");
let bts_cancelar=document.getElementsByClassName("cancelar");
let bts_aceptar=document.getElementsByClassName("grabar");
let bts_borrar=document.getElementsByClassName("borrar");

/*icon1.addEventListener("click",(e)=>{
    sel1.classList.toggle("visible")
})

icon2.addEventListener("click",(e)=>{
 cont1.classList.toggle("cont_visible");

})

icon3.addEventListener("click",(e)=>{
    cont1.classList.toggle("cont_visible");
   
   })
*/
for (const key in bts_editar) {
    if (Object.hasOwnProperty.call(bts_editar, key)) {
        const element = bts_editar[key];
        
        element.addEventListener("click",(e)=>{
            bts_cancelar[key].classList.add("btn_visible")
            bts_aceptar[key].classList.add("btn_visible")
            element.classList.remove("btn_visible")
            bts_borrar[key].classList.remove("btn_visible")
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
        })
    }
}
    
for (const key in bts_aceptar) {
    if (Object.hasOwnProperty.call(bts_aceptar, key)) {
        const element = bts_aceptar[key];
        
        element.addEventListener("click",(e)=>{
            e.preventDefault()
            bts_editar[key].classList.add("btn_visible")
            bts_cancelar[key].classList.remove("btn_visible")
            element.classList.remove("btn_visible")
            bts_borrar[key].classList.add("btn_visible")
        })
    }
}    
    

   