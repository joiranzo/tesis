let icon1=document.getElementsByClassName("editar")


let selecc=document.getElementById("seleccion")
let form=document.getElementById("nuevo")
let bt_cancel=document.getElementById("cancelar")

var nro_legajo

for (const key in icon1) {
    if (Object.hasOwnProperty.call(icon1, key)) {
        const element = icon1[key];
        
        element.addEventListener("click",(e)=>{
            selecc.classList.add("invisible")
            form.classList.remove("invisible")
            nro_legajo=element.getAttribute("leg")
        })
    }
}

bt_cancel.addEventListener("click",(e)=>{
    selecc.classList.remove("invisible")
    form.classList.add("invisible")
})