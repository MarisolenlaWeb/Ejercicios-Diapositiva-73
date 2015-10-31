console.log("Teclea un número");
var num1 = prompt();
console.log("Teclea el segundo número");
var num2 = prompt();
console.log("Teclea el tercer número");
var num3 = prompt();

function maximoDeTresNumeros(){
    if(num1>num2){
      if(num1>num3){
        console.log("El número mayor es: " + num1);
    }
    else{
    	console.log("El número mayor es: " + num3); 
    }
    }  
    else{  
    if(num2>num3){
        console.log("EL número mayor es: " + num2);
    }
	}
    if(num1===num2){
      if(num1===num3){
        console.log("Los números son iguales");
    }
    else{
        console.log("Los números son iguales"); 
    }
    } 
}
maximoDeTresNumeros();