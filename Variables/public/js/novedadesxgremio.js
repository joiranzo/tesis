addEventListener("DOMContentLoaded",(e)=>{
    const nocorresponde=document.getElementsByName("nocorresponde")
    const corresponde=document.getElementsByName("corresponde")
    const activar=document.getElementById("btn_activar")
    const desactivar=document.getElementById("btn_desactivar")
    // const si=document.getElementById("si")
    const no=document.getElementById("no")
    
    for (const key in nocorresponde) {
        if (Object.prototype.hasOwnProperty.call(nocorresponde, key)) {
            const element = nocorresponde[key];
            
            element.addEventListener("click", e=>{
                element.classList.toggle("seleccionado")
            })

        }
    }

    for (const key in corresponde) {
        if (Object.prototype.hasOwnProperty.call(corresponde, key)) {
            const element = corresponde[key];
            
            element.addEventListener("click", e=>{
                element.classList.toggle("seleccionado")
            })

        }
    }

    activar.addEventListener("click",e=>{
        for (const element of no.children) {
            if (element.classList.contains("seleccionado")){
                element.classList.toggle("seleccionado")
                element.parentElement.removeChild(element)
                si.append(element)
            }
        }
    })

    desactivar.addEventListener("click",e=>{
        for (const element of si.children) {
            if (element.classList.contains("seleccionado")){
                element.classList.toggle("seleccionado")
                element.parentElement.removeChild(element)
                no.append(element)
            }
        }
    })
})