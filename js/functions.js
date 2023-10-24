// TIPOS DE VARIABLES
// const para constantes
const pi = 3.1416;
const pul = 2.54;
// var para variables globales
var cant_days = 10;
var name      = "Santiago Guevara";
// let para variables de bloque o locales
let count = 5;
let i     = 0;


// FORMAS DE IMPRESIÓN O SALIDA EN PANTALLA
// alert
//alert(name);
//console
console.log(cant_days);
console.log("10");
//body - pantalla
document.write(name);
document.getElementById("text_one").innerHTML = "<h1>Santiago Guevara</h1>";
document.getElementById("text_two").innerText = "<h1>Santiago Guevara</h1>";
// Librerías por ejemplo sweetaler
Swal.fire({
    icon: 'success',
    title: 'Santiago Guevara',
    text: 'Estudiante de UFPSO',
    footer: name,
    showConfirmButton: false,
    timer: 2000,
    background: '#000'
 //   showCloseButton: false,
  //  ShowCancelButton: false,
});


// TIPO DE DATOS
// Numéricos
let number_one = 10;
let number_two = 5.5;
// string
let text = "Soy un texto";
// booleanos
let boolean = true; //false
// array
let array_num = [1,2,3,4,5,6];
let array_text = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
let array_mix = [1.5, "a", 10, "b"];
let array_mul = [
    {name: "Santiago" ,last_name: "Guevara" , age:17},
    {name: "Heidy" ,last_name: "Camargo", age:20},
    {name: "Charis" ,last_name: "Conrado", age:18},
    {name: "Mariana" ,last_name: "Muñoz", age:18}
]

// Operadores básicas
// Suma +
var suma = number_one+number_two;
console.log("Suma = "+suma);
// Resta -
var resta = number_one - number_two;
console.log("Resta = "+resta);
// Multiplicación *
var multi = number_one*number_two;
console.log("Multiplicación = "+multi);
// División / 
var div = number_one/number_two;
//div = div.toFixed(2);
console.log("División = "+div.toFixed(2));
// Modulo %
var modulo = number_one%number_two;
console.log("Módulo = "+modulo);

console.log("Suma = "+suma +"\n"+
    "Resta = "+resta +"\n"+
    "Multiplicación = "+multi +"\n"+
    "División = "+div.toFixed(2) +"\n"+
    "Módulo = "+modulo
)

var respuesta = ("Suma = "+suma +"<br>"+"Resta = "+resta +"<br>"+"Multiplicación = "+multi +"<br>"+"División = "+div.toFixed(2) +"<br>"+"Módulo = "+modulo);
Swal.fire({
    icon: 'success',
    title: 'Resultados',
    html: respuesta,
    background: '#fff'
});