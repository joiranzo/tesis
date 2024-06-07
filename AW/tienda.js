let m2hombre=document.getElementById("menu2_hombre");
let m2=document.getElementById("menu2");
let m2h=document.getElementById("menu2_sub_hombre");
let m2mujer=document.getElementById("menu2_mujer");
let m2m=document.getElementById("menu2_sub_mujer");
let visi=document.getElementsByClassName("menu2_submenu_visible")

m2hombre.addEventListener("click",(e)=>{
    m2h.classList.toggle("menu2_submenu_visible")
    limpiar(m2h);
    if (m2h.classList.contains("menu2_submenu_visible"))
        m2.style.backgroundSize="100% 85%"
    else
        m2.style.backgroundSize="100% 100%"
});

m2mujer.addEventListener("click",(e)=>{
    
    m2m.classList.togle("menu2_submenu_visible")
    limpiar(m2m);
    if (m2m.classList.contains("menu2_submenu_visible"))
        m2.style.backgroundSize="100% 85%"
    else
        m2.style.backgroundSize="100% 100%"
})

function limpiar(fuente){
    //Oculta todos los menus que se encuentran visibles

   for (const key in visi) {
    if (Object.hasOwnProperty.call(visi, key)) {
        const element = visi[key];
        if (fuente!=element) element.classList.remove("menu2_submenu_visible")
        
    }
   }
};