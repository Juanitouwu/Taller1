let nombre="camilo"
let apellido="pedraza"
console.log( ` ${apellido.toUpperCase()} y tiene ${apellido.length} caracteres  `)

console.log( ` ${nombre.toLowerCase()} y tiene ${nombre.length} caracteres  `)


/*for(i=0;i<=4;i++){
console.log("Hola soy Camilo")
}
repetir=1;
while(repetir==1){
    console.log("oli soy camilo");
    repetir=prompt("para continuar digite 1,2 para salir");
    
}*/
repetir=1;
do{
    console.log("oli soy camilo")
    repetir=confirm("Deseo continuar")
}
while(repetir==true);


