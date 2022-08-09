let resp=true
let dinero 
let  alcancia=0
let cont=0



while(resp==true){
dinero=prompt("Ingrese la cantidad a guardar");
alcancia=parseInt( alcancia)+parseInt(dinero);
cont=cont+1

resp=confirm("Desea continuar");
console.log(`se guardo ${alcancia} y se ha guardado dinero estas veces${cont} `)

}