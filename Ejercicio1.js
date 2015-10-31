console.log("Teclea un número");
var num1 = prompt();
console.log("Teclea el segundo número");
var num2 = prompt();

function maximoDeDosNumeros(){
    if(num1>num2){
        console.log("El número mayor es:" + num1);
    } 
    else if(num1<num2){
        console.log("EL número mayor es:" + num2);
    }
    else if(num1===num2){
        console.log("Los números son iguales");
    }
}
maximoDeDosNumeros();