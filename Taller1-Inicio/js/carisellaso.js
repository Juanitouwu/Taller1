let resp=true
let dinero 
let  alcancia=5000
let aleatorio=getRandomInt(2)
let apuesta
let eleccion 
let cara=1
let sello=0
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
do{
   
    window.alert("Bienvenido a carisellaso tiene 5000 puntos para apostar")
    apuesta=prompt(`Ingrese la cantidad que quiere apostar tiene ${alcancia}`);
    window.alert(`se aposto ${apuesta}`)
    eleccion=prompt(`elija cara ${cara} o sello ${sello}`);
    window.alert(`elijio ${eleccion}  `)
    window.alert(`la maquina eligio ${aleatorio}`)

    
}
while(resp=false){

}