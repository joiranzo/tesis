addEventListener("DOMContentLoaded",(e)=>{
    const nocorresponde=document.getElementsByName("nocorresponde")
    const corresponde=document.getElementsByName("corresponde")
    const activar=document.getElementById("btn_activar")
    const desactivar=document.getElementById("btn_desactivar")
    const si=document.getElementById("si")

    function insertar (nuevo,elemento) {
        if (elemento.children.length==0) {
            elemento.append(nuevo)
        } else {

        for (const element of elemento.children) {
            if (nuevo.children[0].innerHTML>element.children[0].innerHTML) {}
            else { 
                elemento.insertBefore(nuevo,element)
                
            }
        }}
         
        
            
        
    }

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
        for (const key in nocorresponde) {
            if (Object.prototype.hasOwnProperty.call(nocorresponde, key)) {
                const element = nocorresponde[key];
                
                if (element.classList.contains("seleccionado")){
                    element.classList.toggle("seleccionado")
                    element.parentElement.removeChild(element)
                    insertar(element,si)
                }
            }
        }
    })

    desactivar.addEventListener("click",e=>{
        for (const key in corresponde) {
            if (Object.prototype.hasOwnProperty.call(corresponde, key)) {
                const element = corresponde[key];
                
                if (element.classList.contains("seleccionado")){
                    element.classList.toggle("seleccionado")
                    element.style.display="none"
                    nocorresponde[key].style.display="block"

                }
            }
        }
    })
})