console.group("promedio,Media");

function calcularMediaAritmetica(lista ){
   /* Primera opcion para crear 
   la ecuacion de la funcion pero con FOR
   
    let sumaLista1 = 0;

    for (let i= 0; i < lista.length; i++){
    
    sumaLista1=sumaLista1+lista[i];

    }  
    const promedioLista1 = sumaLista1/ lista.length;
    return promedioLista1; */
// Segundo Metodo con .reduce();
// reduce hace lo mismo que for 
    const sumaLista1= lista.reduce(
        //Reduce lo que hace es que por cada elemento de la lista
        //hace la funcion y la suma, es como siclo for pero ya automatizado
        //el elemento de la funcion comienza en 0
        //pero 0 es la reprecentacion del primer valor en nuestro array 
        function(valoracomulado=0,nuevoElemento){
            return valoracomulado +nuevoElemento;
            // en este caso se se hizo una iteracion=(accion)
            // de repeticion por cada elemento de la lista.
            // se sumo todos los valores y ahorase diviran en su cantidad
        }
    );
    
    const promedioLista1 = sumaLista1/ lista.length;

    return promedioLista1; 

}
console.groupEnd();


//_____________________________________________________________________________

console.group("Mediana");
// primer metodo

const listaUno = [
    200,100,500,5000
    ,400000,100000];
    listaUno.sort();
    // aqui se determina conjuntos dependiendo el numero, los 1 con uno, dos con dos etc 
    listaUno.sort((a,b) => a-b);
    // aqui si se organiza la lista de mayor a menor.

const mitadlista1 = parseInt(listaUno.length /2);

function esPar (numero){
if (numero % 2 === 0) {
    // El modulo: ayuda a dterminar cuando un numero es fijo o con decimales.
    // se utiliza el icono de % para el residuo. 
    return true;
}
else {
    return false;
}
}
let mediana;

if (esPar(listaUno.length)){
    const elemento1=listaUno[mitadlista1];
    const elemento2= listaUno[mitadlista1-1];
    const elemento1_y_dos =  calcularMediaAritmetica
                            ([elemento1,elemento2]);
                            mediana = elemento1_y_dos;
}
else {
    mediana = listaUno[mitadlista1]
}

console.groupEnd();
//_____________________________________________________________

console.group("Moda");

const lista_1 = [1,2,3,4,4,2,2,2,3,1,3,3,4,4,5,1,2,2,3,3,3,3,5,5,5]

function modaAricmetica (lista_1){
const lista_1Count = {};
/* Aqui se determina que cantidad de veces 
aparece el elemento, repetido en el array 
y lo convertimos en un objeto que se almacenara en 
const lista_1Count = {};, pero tambien determinaremos
la suma de los elementos repetidos en unidades ejemplo 
1: 3  donde uno es elemento y tres las unidades repetidas 
en el array*/
lista_1.map(
    /* el metodo map donde llamamos lista_1, que es donde se almacenan nuestra lista,
    ayuda a realiza la opracion de organizar 
    dentro de los corchetes de lista_1Count={};*/
    function(elementicos){
    /* espesificando una funcion sin nombre para quer llame al parameto dentro de la funcion
    aqui un parentecis ( cuando no se llama la funcion, es que se va a llamar el parametro dentro
    de la funcion en este caso elementicos)*/
    if (lista_1Count[elementicos]){
    // si lista_1Count tiene elemento repetidos sumele 1 por cada elemento.
    lista_1Count[elementicos] = lista_1Count[elementicos] + 1;
    // ó lista_1Count[elementicos] += 1; otra forma de escribirlo.
    } else {    
    // este solo esta una vez se contara como un primer uno 
    lista_1Count[elementicos]=1;
    }
    }
);

const lista_1Array = Object.entries(lista_1Count).sort(
    //Object.entries: ayuda a combertir los objetos en listas.
    //sort y se aplica el metodo sort para organizar la lista de mayor a menos

    function(valoracomulado1,NuevoVAlor1){
        return valoracomulado1 [1]- NuevoVAlor1[1];
        });
}
const moda = lista_1Array[lista_1Array.length - 1];


console.groupEnd();
/* para mejorar en el siguiente link para determinar los metodos de array mas facil!!
https://www.youtube.com/watch?v=5yPf74sCu2k
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array#
*/