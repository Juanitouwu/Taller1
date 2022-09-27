/*Declarar la funcion por declaracion
function lanzarmoneda(){
    let moneda = Math.floor((Math.random() * 2)+ 1);
    console.log(`El lanzamiento fue ${moneda}`)

}

//Invocar la funcion
lanzarmoneda();*/

//Funcion con valor de retorno
/*function lanzarmoneda(){
    let moneda = Math.floor((Math.random() * 2)+ 1);
    return moneda;
}
console.log(`El lanzamiento fue ${lanzarmoneda()}`);
let lanzamiento=lanzarmoneda();
console.log(`El lanzamiento fue ${lanzamiento}`);
¨*/
//funcion con parametros
function ganar(saldo, apuesta){
    saldo=saldo+(apuesta);
    return saldo
}
function perder(saldo, apuesta){
    saldo=saldo-apuesta;
    return saldo;
}


//Funcion con parametros funcion por expresion
    let lanzar=function lanzarmoneda(){ 
    let moneda = Math.floor((Math.random() * 2)+ 1);
    return moneda;
}
//funcion anonima
let perder=function(){
           //instrucciones
}
//funcion arrow
let perder=()=>{ 
            //instrucciones
}


//Invocar la funcion
let seguir=true;
let saldo=0;
let jugador=prompt("Ingrese el nombre del jugador");
saldo=parseInt(prompt("Cuanto deseas recargar para jugar"));
while(seguir==true){
    let eleccion=prompt(`${jugador} Elije 1. Cara 2. Sello`);
    let apuesta=parseInt(prompt(`De tu saldo actual ${saldo} ¿cuanto deseas apostar?`));
    let lanzamiento=lanzar;
    if(lanzamiento==1 && eleccion==1){
        saldo=ganar(saldo,apuesta);
        console.log(`El lanzamiento fue cara escogiste cara tu ganas!!!!, tu nuevo saldo es ${saldo}`);
    }
    else if(lanzamiento==2 && eleccion==2){
        saldo=ganar(saldo,apuesta);
        console.log(`El lanzamiento fue sello escogiste cara tu ganas!!!!, tu nuevo saldo es ${saldo}`);
    }
    else if(lanzamiento==1 && eleccion==2){
        saldo=perder(saldo,apuesta);
        console.log(`El lanzamiento fue cara escogiste sello perdiste!!!!, tu nuevo saldo es ${saldo}`);
    }
    else if(lanzamiento==2 && eleccion==1){
        saldo=perder(saldo,apuesta);
        console.log(`El lanzamiento fue sello escogiste cara tu perdiste!!!!, tu nuevo saldo es ${saldo}`);
    }
    seguir=confirm("Desea continuar")
}