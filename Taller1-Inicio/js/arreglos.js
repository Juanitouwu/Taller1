
let raza_perros=['bulldog','pastor aleman','labrador','golden retriever','husky']

console.log(`${raza_perros[2]}`)
console.log(raza_perros.length)
console.log(raza_perros[raza_perros.length-1])
//agrega en un arreglo a lo ultimo
raza_perros.push('pug')
//agrega en un arreglo al principio
raza_perros.unshift("pomerania")
//eliminar el primero
//raza_perros.shift()
//elimina el ultimo
//raza_perros.pop()
//eliminar uno intermedio
raza_perros.splice(1,3)
console.log(raza_perros)
raza_perros.forEach(function(elemento,index,array){
    console.log(`posicion ${index} elemento ${elemento}`)
})
let aprendices=[
    {primernombre:"camilo",primerapellido:"pedraza"},
    {primernombre:"juan",primerapellido:"sandoval"},
];
let seguir=true
let filtro=aprendices.filter(aprendices=>aprendices=="camilo");
let busqueda=aprendices.find(aprendices=>aprendices=="andres")
let nombrecompleto=aprendices.map(function(el,ir,ar){
    return `${el.primernombre} ${el.primerapellido}`
})

while(seguir==true){

    aprendices.push(prompt('ingrese nombre aprendiz'))
    seguir=confirm('Desea ingresar otro valor') 
    aprendices.forEach(function(elemento,index,array){
        console.log(`posicion ${index} elemento ${elemento}`)
    })
}
