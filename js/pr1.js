//Swal.fire({
   // icon: 'success',
   // title: 'Andrea es recansona',
   // text: '(nomentiranoteenojes)',
   // showConfirmButton: false,
   // timer: 2000,
  //  background: '#fff'
//});

let list = [
    ["Santiago", "Guevara", "17"],
    ["Charis", "Conrado", "18"],
    ["Andrea", "Uribe", "17"],
]
function suma(){
    var num1 = (document.getElementById("one").value);
    var cont = Number(num1)-1;
    
    for(let i=0;i<3;i++){
        var dato = list[i][cont];
        console.log(list[i][cont]);
        document.getElementById(num1).innerText= dato;
        num1= num1+"2";
    }


    //console.log(num1);
    //console.log(num2);
    //console.log(num3);
    //document.getElementById("resp").innerText = "La suma es "+num3;

}

let array_mul=[
    { name: "Camila", last_name:"Uribe", age:17},
    { name: "Maria José", last_name:"Platita", age:17},
    { name: "Nicolás", last_name:"Gutierrez", age:18},
    { name: "Santiago", last_name:"Gutierrez", age:18},
    { name: "Heidy", last_name:"Gutierrez", age:18},
 ];
 
 function load_page(){
    
     var info=""; //OJO: ESO SIEMPRE VA POR FUERA DEL FOR 
     for (let a=0; a<array_mul.length; a++){
         console.log("Nombre: " + array_mul[a].name + " - Apellido: " + array_mul[a].last_name + " - Edad: " + array_mul[a].age);
         // info += "Nombre: " + array_mul[a].name + " - Apellido: " + array_mul[a].last_name + " - Edad: " + array_mul[a].age + "<br>" //el br es para que no nos quede todo seguido, sino que se vea por columnas
         info += "<tr><td>"+array_mul[a].name+"</td>"+"<td>"+array_mul[a].last_name+"</td>"+"<td>"+array_mul[a].age+"</td>"+"</tr>"
 
     }
     document.getElementById("print_zone").innerHTML=info;
 
 }
var date2 = 0;
var date = new Date();
function load_page(){
    for(i=0;date.getSeconds()===59;i++){
        date2 = date2+1;
    }console.log(date2 + " "+date.getSeconds());
}


    
    

