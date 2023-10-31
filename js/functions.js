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

//Operadores lógicos y estructuras condicionales (inverse, incremento y decremento)
// AND && con if
var bool    = false;
var numeric = 5;
if(!bool && numeric == 5){ // bool == true
    console.log("ingresa if: "+bool);

}
else{
    console.log("ingresa else: "+bool);
}


// Or || con if
var age = 31;
if(age == 31 || numeric == "5"){
    console.log("ingresa if: "+bool);
    age++;

}
else{
    console.log("ingresa else: "+bool);
}
console.log(age);

console.log("");
console.log("FOR");
//For
console.log(array_text.length);
for(let i=0; i<array_text.length; i++){
    console.log(array_text[i] + (i+1));
}
console.log("");
console.log("WHILE");

// While
let j=0;
while(j<array_text.length){
    console.log(array_text[j] + (j+1));
    j++
}
console.log("");
console.log("DO WHILE");
//Do While
let w =0;
do{
    console.log(array_text[w]);
    w++;
}
while(w<array_text.length)

//CREAR FUNCIONES
function load_page(){
    //alert("BIENVENIDO A MI SITIO WEB")
}
var color = "#fff";
function change_color(){
    document.body.style.backgroundColor= "red";
    document.body.style.color= color;
}

const btn_clear = document.querySelector("#limpiar");
btn_clear.addEventListener("click", () => {
    document.body.style.backgroundColor= "white";
    document.body.style.color= "#000";
});

// FORMULARIO DE REGISTRO
const form_register = document.getElementById("form_register");
const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const validation = document.getElementById("validation");

form_register.addEventListener("submit", event_name => {
    event_name.preventDefault();
    let info = "";
    if(nombres.value.length <= 2 || apellidos.value.length){
        info += "Nombres y/o Apellidos deben ser mayores a 2 letras";
        validation.style.color = "red";
    }
    else{
        alert(nombres + " " + apellidos);
        nombres.style.backgroundColor = "green";
        apellidos.style.backgroundColor = "green";
    }
    validation.innerText = info;
}

)

