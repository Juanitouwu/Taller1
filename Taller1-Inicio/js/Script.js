console.log("Hola mundo");

let numero=25;
console.log("el numero es",numero);
console.log(`El numero es ${numero}`);

let nombre="Camilo";
console.log(`El nombre es ${nombre}`);

let boolean ="false";
console.log(` ${boolean}`);

let Numeropi=""

//let res=numero+5;
//console.log(`El resultado es ${res}`);
console.log(`El resultado es ${numero+5}`);

//window.alert("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
//window.comfirm("Quiere ser robado");
//let estado=window.confirm("Estas seguro de");
//console.log(`La venta arrojo ${estado}`);

/*let num1=prompt("Digite el primer numero");
let num2=prompt("Digite el segundo numero");
let res=parseInt(num1)+parseInt(num2);
console.log(`El resultado de la suma es ${res} y`)*/

//Condicionales

/*if(num1>num2){
    console.log(`El numero mayor es ${num1}`)
}
else if(num1==num2){
    console.log(`Los numeros son iguales`)
}
if(num2>num1){
    console.log(`El numero mayor es ${num2}`)
}*/

//Operador ternario
/*let nummayor=(num1>num2)
?"El numero mayor es el primero"
:"El numero mayor es el segundo"

console.log(nummayor);
*/

//Condicion con condicion compuesta
/*let usuario=prompt("Digite el usuario");
let contrasena=prompt("Digite la contraseña");
if(usuario=="camilo"&&contrasena=="camilo123"){
    window.alert("Bienvenido") 
}
else if(usuario=="camilo"&&contrasena!=="camilo123"){
    window.alert("La contrasena es incorrecta") 
}
if(usuario!=="camilo"&&contrasena=="camilo123"){
    window.alert("El usuario es incorrecto") 
}
if(usuario!=="camilo"&&contrasena!=="camilo123"){
    window.alert("Credenciales de acceso incorrectas") 
}*/

//Condicional multiple
let num1=parseInt(prompt("Digite el primer numero    "));
let num2=parseInt(prompt("Digite el segundo numero"));
let ope=prompt("Digite la operacion que quiere realizar multiplicar,sumar,restar,dividir,potencia,raiz");
switch(ope){
    case 'multiplicar':
    console.log(`el resultado de la multiplicacion es ${num1*num2} `);
    break;
    case 'sumar':
       
        console.log(`el resultado de la suma es ${num1+num2}`);
        break;
        case 'restar':
            console.log(`el resultado de la resta es ${num1-num2}`);
            break;
            
            case 'dividir':
                let sum1=num1/num2
                console.log(`el resultado de la divison es ${sum1.toFixed(2)}`);
                break;
                case 'potencia':
                    console.log(`el resultado de la potencia es ${num1**num2} `);
                    break;
                    case 'raiz':
                        let sum2=Math.sqrt(num1)
                        let sum3=Math.sqrt(num2)
                        console.log(`el resultado de la raiz del primer numero es ${sum2.toFixed(2)} y el segundo numero es ${sum3.toFixed(2)}`);
                        break;


}