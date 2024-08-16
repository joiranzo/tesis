addEventListener("DOMContentLoaded",(e)=>{
   
    const buscarDato=async (datos) =>{
        
        try {
            const req=await fetch('/getdato',{
                method:'POST',
                body:JSON.stringify(datos),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })

            return req.json()
        } catch (error){alert(error.message)}
    }

    const getNovedad=async  (codigo)=>{
        buscarDato({tabla:"TiposNovedades",key:"IdTipoNovedad",filtro:codigo})
        .then (data=>{
            document.getElementById("IdTipoNovedad").setAttribute("value",data[0].IdTipoNovedad)
            document.getElementById("Nombre").setAttribute("value",data[0].Nombre)
            if (data[0].Rango) {document.getElementById("Rango").setAttribute("checked","")}
            
            // document.getElementById("RelPuesto").value=data[0].RelPuesto
            // document.getElementById("RelReprGremial").value=data[0].RelReprGremial
            // document.getElementById("RelSupInmed").value=data[0].RelSupInmed
            // document.getElementById("RelSupervision").value=data[0].RelSupervision
            // document.getElementById("RelSubregion").value=data[0].RelSubRegion
            // document.getElementById("RelEncargTiempo").value=data[0].RelEncargTiempos
            // document.getElementById("RelCoordinador").value=data[0].RelCoordinador
            // document.getElementById("RelCoordinacion").value=data[0].RelCoordinacion
            document.getElementById("buscar").style.display="none"
            document.getElementById("editar").style.display="flex"
        })
        .then (datos=>{return datos})
    }

    const btns_edit=document.getElementsByClassName("bt_azul")
    const lbs_legajo=document.getElementsByName("Legajo")
    const inp_legajo=document.getElementById("legajoSearch")
    const inp_nomApe=document.getElementById("nomApeSearch")
    const lbs_nomApe=document.getElementsByName("nomApe")
    const btn_search=document.getElementById("btn_search")
    const btn_cancel=document.getElementById("btn_cancel")
    const btn_delete=document.getElementById("btn_delete")
    const forms=document.getElementsByClassName("fila_hover")
    

    for (const key in btns_edit) {
        if (Object.prototype.hasOwnProperty.call(btns_edit, key)) {
            const btn = btns_edit[key];{
        
        btn.addEventListener("click",(e)=>{
            e.preventDefaul
            getNovedad(forms[key].childNodes[1].innerText)
        
        })
    }}};

    inp_legajo.addEventListener("input",(e)=>{
        e.preventDefault;
        for (const key in lbs_legajo) {
            if (Object.prototype.hasOwnProperty.call(lbs_legajo, key)) {
                const element = lbs_legajo[key];
                
                if (!element.innerText.includes(e.target.value)) 
                    element.parentElement.style.display="none"
                else 
                    element.parentElement.style.display="flex"
                
           }
        }
    })

    inp_nomApe.addEventListener("input",(e)=>{
        e.preventDefault;
        for (const key in lbs_nomApe) {
            if (Object.prototype.hasOwnProperty.call(lbs_nomApe, key)) {
                const element = lbs_nomApe[key];
                
                if (!element.innerText.includes(e.target.value.toUpperCase())) 
                    element.parentElement.style.display="none"
                else 
                    element.parentElement.style.display="flex"
                
           }
        }
    })

    btn_search.addEventListener("click",(e)=>{
        let buscar=document.getElementById("fila_buscar")
        e.preventDefaul
        if (buscar.style.display=='none')
            buscar.style.display='flex'
        else
            buscar.style.display='none'
    })

    btn_cancel.addEventListener("click",e=>{
        e.preventDefault
        document.getElementById("buscar").style.display="flex"
        document.getElementById("editar").style.display="none"
    
    })

    btn_delete.addEventListener("click",e=>{
        e.preventDefault
        if (confirm("Desea realmente borrar este elemento?")) {
            document.getElementById("editar").setAttribute("action","/borrardato")
            document.getElementById("editar").send
        }
    })
})    