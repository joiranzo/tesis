let m2hombre=document.getElementById("menu2_hombre");
let m2=document.getElementById("menu2");
let m2h=document.getElementById("menu2_sub_hombre");
let m2mujer=document.getElementById("menu2_mujer");
let m2m=document.getElementById("menu2_sub_mujer");
let visi=document.getElementsByClassName("menu2_submenu_visible")
let fecha_texto=document.getElementById("fecha");
let banners=document.getElementsByName("img_desp");
let relojs=document.getElementById("reloj");
let bod=document.getElementsByTagName("body")


//Se muestra las fecha
let fecha=new Date()
let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    };
fecha_texto.innerHTML=fecha.toLocaleString("sp-AR", options);
//fin    

//Se agrega los eventos sobre las imagenes a las imagenes desplegables
banners.forEach(element => {
    
    element.addEventListener("mouseover",(e)=>{
        let ba=element.nextElementSibling;
        ba.style.height="fit-content"
        
    })

    element.addEventListener("mouseout",(e)=>{
        let ba=element.nextElementSibling;
        ba.style.height="0px"
        
    })
});
//Fin



function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    str_segundo = new String (segundo)
    if (str_segundo.length == 1)
       segundo = "0" + segundo

    str_minuto = new String (minuto)
    if (str_minuto.length == 1)
       minuto = "0" + minuto

    str_hora = new String (hora)
    if (str_hora.length == 1)
       hora = "0" + hora

    horaImprimible = hora + " : " + minuto + " : " + segundo

    relojs.innerHTML = horaImprimible

    setTimeout("mueveReloj()",1000)
}    

bod.addEventListener("onLoad",mueveReloj())

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