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
            if (data[0].Motivo) {document.getElementById("Motivo").setAttribute("checked","")}
            document.getElementById("LimiteDiario").value=data[0].LimiteDiario
            document.getElementById("LimiteMensual").value=data[0].LimiteMensual
            document.getElementById("LimiteAnual").value=data[0].LimiteAnual
            document.getElementById("Descripcion").value=data[0].Descripcion
            document.getElementById("Utilizacion").value=data[0].Utilizacion
            document.getElementById("Uso").value=data[0].Uso
            // document.getElementById("RelCoordinador").value=data[0].RelCoordinador
            // document.getElementById("RelCoordinacion").value=data[0].RelCoordinacion
            document.getElementById("buscar").style.display="none"
            document.getElementById("editar").style.display="flex"
        })
        .then (datos=>{return datos})
    }

    const btns_edit=document.getElementsByClassName("bt_azul")
    const lbs_novedad=document.getElementsByName("novedad")
    const inp_novedad=document.getElementById("novedadSearch")
    const inp_nombre=document.getElementById("nomSearch")
    const lbs_nombre=document.getElementsByName("nombre")
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

    inp_novedad.addEventListener("input",(e)=>{
        e.preventDefault;
        for (const key in lbs_novedad) {
            if (Object.prototype.hasOwnProperty.call(lbs_novedad, key)) {
                const element = lbs_novedad[key];
                
                if (!element.innerText.includes(e.target.value)) 
                    element.parentElement.style.display="none"
                else 
                    element.parentElement.style.display="flex"
                
           }
        }
    })

    inp_nombre.addEventListener("input",(e)=>{
        e.preventDefault;
        for (const key in lbs_nombre) {
            if (Object.prototype.hasOwnProperty.call(lbs_nombre, key)) {
                const element = lbs_nombre[key];
                
                if (!element.innerText.toUpperCase().includes(e.target.value.toUpperCase())) 
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