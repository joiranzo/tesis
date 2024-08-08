addEventListener("DOMContentLoaded",(e)=>{
    
    const btns_edit=document.getElementsByClassName("bt_azul")
    const btns_ok=document.getElementsByClassName("bt_verde")
    const btns_cancel=document.getElementsByClassName("bt_rojo")
    const btns_delete=document.getElementsByClassName("bt_delete")
    const btn_nuevo=document.getElementById("bt_nuevo")
    const inps=document.getElementsByClassName("editable")
    const nuevo=document.getElementById("fila_nueva")
    const btn_ok_nuevo=document.getElementById("ok_new")
    const btn_cancel_nuevo=document.getElementById("cancel_new")
    const inp_nuevo=document.getElementById("cod_nuevo")
    let tabla

    const update = {
        title: 'A blog post by Kingsley',
        body: 'Brilliant post on fetch API',
        userId: 1,
        };
        
        const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(update),
    };

    const nuevo_dato = async () =>{
        let dato= {id:'ok'}
        try {
            const response= await fetch ('/nuevodato',options)
            return response.json()

            }
             catch (error) {
            alert(error.message)
        }

    }
    btn_nuevo.addEventListener("click",(e)=>{
        e.preventDefault
        tabla=e.target.getAttribute("tabla")

        console.log(tabla)
        nuevo.style.display="flex"
        inp_nuevo.focus()
    })

    btn_cancel_nuevo.addEventListener("click",(e)=>{
        e.preventDefault
        nuevo.style.display="none"
    })

    inp_nuevo.addEventListener("change",(e)=>{
        nuevo_dato()
        
    })

    for (const key in btns_edit) {
        if (Object.prototype.hasOwnProperty.call(btns_edit, key)) {
            const btn = btns_edit[key];
    
            btn.addEventListener("click",(e)=>{
                e.preventDefault
                e.currentTarget.style.display="none"
                btns_ok[key].style.display="initial"       
                btns_delete[key].style.display="none"
                btns_cancel[key].style.display="initial"
                inps[key].toggleAttribute("disabled")
                inps[key].focus()     
            })
        }
    }

    for (const key in btns_cancel) {
        if (Object.prototype.hasOwnProperty.call(btns_cancel, key)) {
            const btn = btns_cancel[key];
    
            btn.addEventListener("click",(e)=>{
                e.preventDefault
                e.currentTarget.style.display="none"
                btns_ok[key].style.display="none"       
                btns_delete[key].style.display="initial"
                btns_edit[key].style.display="initial"
                inps[key].toggleAttribute("disabled")
                
            })
        }
    }
})
