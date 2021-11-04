
// codigo del cuadrado 

console.group("Cuadrado");

// const ladocuadrado = 5;
// console.log("los lados del cuadrado miden: " + ladocuadrado +'cm');
function perimetrocuadrado(lado) {
    return lado * 4;
} 

// console.log("El perimetro del cuadrado miden: "+perimetrocuadrado+'cm');
function areacuadrado (lado){
    return lado * lado;
}

// console.log("el area del cuadrado mide miden: "+areacuadrado+'cm^2');

console.groupEnd();
// Codigo del triangulo
console.group("Triangulo");
/*
console.group("Triangulo")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo3 = 4;


console.log (
    "Los lados del truangulo miden:"+ ladoTriangulo1+'cm,'
    +ladoTriangulo2+'cm,'
    +baseTriangulo3+'cm,');

    const alturaTriangulo= 5.5;
    
console.log("la altura del triangulo es"+alturaTriangulo+'cm')
*/
function perimetroTiangulo(lado1,lado2,base) { 
     return lado1+lado2+base; 
    }

// console.log("El perimetro del cuadrado miden: "+perimetroTiangulo+'cm');

function areaTriangulo (base,altura){

   return (base*altura)/2;
}
    

console.groupEnd();

// codigo del circulos 

console.group("Circulo");
/* radio
const radioCirculo = 4;
console.log(" El radio del circulo" + radioCirculo +'cm');
*/

//Diametro 
function DiametroCirculo (radio){ return radio*2;}

//console.log(" El Diametro del circulo" + DiametroCirculo +'cm');

/*PI*/
const PI = Math.PI;
//console.log(" el numero PI es:" + PI +'cm');


//const PI = 3.1416;
//Circunferencia 
function perimetroCirculo(radio) { 

    const Diametro=DiametroCirculo (radio);
    return Diametro*PI;
}
// console.log(" La Circunferencia del circulo" + perimetroCirculo +'cm');

//Area
function areaCirculo (radio){
    
    return (radio*radio)*PI;
}
//console.log(" El area del circulo" + areaCirculo +'cm^2');

console.groupEnd();

// Aqui  interactuamos con HTML
// Cuadrado funciones 

function CalcularPerimetroCuadrado() {
    const input = document.getElementById("Cuadrado");
    const value = input.value;
    const perimetro= perimetrocuadrado(value);
    alert (perimetro);
}

function CalcularAreaCuadrado() {
    const input = document.getElementById("Cuadrado");
    const value = input.value;
    const area= areacuadrado(value);
    alert (area);
}

// Triangulo funciones

function CalcularPerimetroTriangulo(){
    const input = document.getElementById("TrianguloV1");
    const value0 = parseFloat(input.value);
    const input1 = document.getElementById("TrianguloV2");
    const value1 = parseFloat(input1.value);
    const input2 = document.getElementById("TrianguloV3");
    const base = parseFloat(input2.value);
    const perimetroT= perimetroTiangulo(value0,value1,base);
    alert (perimetroT);
}

function CalcularAreaTiangulo() {
    const input2 = document.getElementById("TrianguloA");
    const base = parseFloat(input2.value);
    console.log(1)
    
    const input3 = document.getElementById("TrianguloA2");
    const value4 = parseFloat(input3.Value);
    console.log(2)
    
    const area = areaTriangulo(base,value4);
    alert (area);

}

// Circulos 

function CalcularPerimetroCirculo(){
    const input = document.getElementById("circulo");
    const value = input.value;
    const perimetro= perimetrocuadrado(value);
    alert (perimetro);
}

function CalcularAreaCirculo (){
    const input = document.getElementById("circulo");
    const value = input.value;
    const area= areaCirculo(value);
    alert (area);
}