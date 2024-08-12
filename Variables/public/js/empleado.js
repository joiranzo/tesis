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

    const getEmpleado= ()=>{
        buscarDato({tabla:"Dotacion",key:"Legajo",filtro:"602371"})
        .then (data=>{
            const empleado=data
            document.getElementById("Legajo").setAttribute("value",empleado[0].Legajo)
            document.getElementById("NomApe").setAttribute("value",empleado[0].NomApe)
            document.getElementById("Email").setAttribute("value",empleado[0].Email)
            getPuestos()
        })
    }

    const getPuestos= ()=>{
        buscarDato({tabla:"Puestos",Key:null})
        .then (data=>{
            
        })
    }
    
    const btns_edit=document.getElementsByClassName("bt_azul")
    
    // const btns_ok=document.getElementsByClassName("bt_verde")
    // const btns_cancel=document.getElementsByClassName("bt_rojo")
    // const btns_delete=document.getElementsByClassName("bt_delete")
    // const btn_nuevo=document.getElementById("bt_nuevo")
    // const inps=document.getElementsByClassName("editable")
    // const nuevo=document.getElementById("fila_nueva")
    // const btn_cancel_nuevo=document.getElementById("cancel_new")
    // const forms=document.getElementsByClassName("fila_hover")

    for (const key in btns_edit) {
        if (Object.prototype.hasOwnProperty.call(btns_edit, key)) {
            const btn = btns_edit[key];{
        
        btn.addEventListener("click",(e)=>{
            e.preventDefaul
            getEmpleado()
            //let puestos=getDatos({tabla:"Puestos",Key:null})
           
            //console.log(puestos)
        
            
            
            document.getElementById("buscar").style.display="none"
            document.getElementById("editar").style.display="flex"
            
        })
    }}};
})    