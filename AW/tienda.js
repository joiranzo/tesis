let m2hombre=document.getElementById("menu2_hombre");
let m2=document.getElementById("menu_despl");
let m2h=document.getElementById("menu2_sub_hombre");
let m2mujer=document.getElementById("menu2_mujer");
let m2m=document.getElementById("menu2_sub_mujer");
let visi=document.getElementsByClassName("visible")
let fecha_texto=document.getElementById("fecha");
let banners=document.getElementsByName("img_desp");
let inputs=document.getElementsByClassName("acti")
let relojs=document.getElementById("reloj");



//Se muestra las fecha
let fecha=new Date()
let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    };
    if (fecha_texto!=null) fecha_texto.innerHTML=fecha.toLocaleString("sp-AR", options);
//fin    

// Se agrega los eventos sobre las imagenes a las imagenes desplegables
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

// Se alegra el evento y ajuste al recibir el foco los inputs
for (const key in inputs) {
    if (Object.hasOwnProperty.call(inputs, key)) {
        const element = inputs[key];
        
        element.addEventListener("focus",(e)=>{ element.style.backgroundColor = "rgb(255,240,240)";})
        element.addEventListener("blur",(e)=>{ element.style.backgroundColor = "rgb(255,255,255)";})
    }
}

window.addEventListener("load", mueveReloj())

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
    if (relojs!=null) {
         relojs.innerHTML = horaImprimible
         setTimeout("mueveReloj()",1000)
    }     
}    



m2hombre.addEventListener("click",(e)=>{
    if (m2h.classList.contains("visible")){
        m2h.classList.remove("visible")
        if (m2!=null) m2.style.backgroundSize="100% 100%"}
    else{
        limpiar(m2h);
        if (m2!=null) m2.style.backgroundSize="100% 85%"
        m2h.classList.toggle("visible")
    }
});

m2mujer.addEventListener("click",(e)=>{
    if (m2m.classList.contains("visible")){
        m2m.classList.remove("visible")
        if (m2!=null) m2.style.backgroundSize="100% 100%"}
    else{
        limpiar(m2m);
        if (m2!=null) m2.style.backgroundSize="100% 85%"
        m2m.classList.toggle("visible")
    }
})

function cerrar_menu(){
    m2h.style.top="-400px";
    m2h.classList.remove("visible")
    m2m.style.top="-400px";
    m2m.classList.remove("visible")
    m2.style.backgroundSize="100% 100%"
}

function limpiar(fuente){
    //Oculta todos los menus que se encuentran visibles

   for (const key in visi) {
    if (Object.hasOwnProperty.call(visi, key)) {
        const element = visi[key];
        element.classList.remove("visible")
        
    }
   }
};