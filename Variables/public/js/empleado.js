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

    const getEmpleado=async  (legajo)=>{
        buscarDato({tabla:"Dotacion",key:"Legajo",filtro:legajo})
        .then (data=>{
            document.getElementById("Legajo").setAttribute("value",data[0].Legajo)
            document.getElementById("NomApe").setAttribute("value",data[0].NomApe)
            document.getElementById("Email").setAttribute("value",data[0].Email)
            document.getElementById("RelPuesto").value=data[0].RelPuesto
            document.getElementById("RelReprGremial").value=data[0].RelReprGremial
            document.getElementById("RelSupInmed").value=data[0].RelSupInmed
            document.getElementById("RelSupervision").value=data[0].RelSupervision
            document.getElementById("RelSubregion").value=data[0].RelSubRegion
            document.getElementById("RelEncargTiempo").value=data[0].RelEncargTiempos
            document.getElementById("RelCoordinador").value=data[0].RelCoordinador
            document.getElementById("RelCoordinacion").value=data[0].RelCoordinacion
            document.getElementById("buscar").style.display="none"
            document.getElementById("editar").style.display="flex"
        })
        .then (datos=>{return datos})
    }

    // const getPuestos= ()=>{
    //     buscarDato({tabla:"Puestos",Key:null})
    //     .then (data=>{
            
    //     })
    // }
    
    const btns_edit=document.getElementsByClassName("bt_azul")
    const slec_puesto=document.getElementById("RelPuesto")
    // const btns_ok=document.getElementsByClassName("bt_verde")
    // const btns_cancel=document.getElementsByClassName("bt_rojo")
    // const btns_delete=document.getElementsByClassName("bt_delete")
    // const btn_nuevo=document.getElementById("bt_nuevo")
    // const inps=document.getElementsByClassName("editable")
    // const nuevo=document.getElementById("fila_nueva")
    // const btn_cancel_nuevo=document.getElementById("cancel_new")
    const forms=document.getElementsByClassName("fila_hover")
    var prueba

    for (const key in btns_edit) {
        if (Object.prototype.hasOwnProperty.call(btns_edit, key)) {
            const btn = btns_edit[key];{
        
        btn.addEventListener("click",(e)=>{
            e.preventDefaul
            getEmpleado(forms[key].childNodes[1].innerText)
        
        })
    }}};
})    