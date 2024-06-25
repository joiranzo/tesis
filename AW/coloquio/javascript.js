function mostrar_fecha(){
//Se muestra las fecha
    let fecha_texto=document.getElementById("fecha")
    let fecha=new Date()
    let options = { weekday: "long",year: "numeric", month: "long", day: "numeric",};
    fecha_texto.innerHTML=fecha.toLocaleString("sp-AR", options);
//fin
}

function mueveReloj(){
    let relojs=document.getElementById("reloj")
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

function mostrar(){
    let ventana=document.getElementById("modal")

    ventana.classList.toggle("visible")
}

function carga(){
    mostrar_fecha();
    mueveReloj()
}