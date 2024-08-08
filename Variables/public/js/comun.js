addEventListener("DOMContentLoaded",(e)=>{
    
    const btns_edit=document.getElementsByClassName("bt_azul")
    const btns_ok=document.getElementsByClassName("bt_verde")
    const btns_cancel=document.getElementsByClassName("bt_rojo")
    const btns_delete=document.getElementsByClassName("bt_delete")
    const btn_nuevo=document.getElementById("bt_nuevo")
    const inps=document.getElementsByClassName("editable")
    const nuevo=document.getElementById("fila_nueva")
    const bt_ok_nuevo=document.getElementById("ok_new")
    const bt_cancel_nuevo=document.getElementById("cancel_new")

    btn_nuevo.addEventListener("click",(e)=>{
        e.preventDefault
        nuevo.style.display="flex"
        
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
