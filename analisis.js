// helpers , utilities
function esPar (numerito) {
    return (numerito % 2 === 0);
    }
    function calcularMediaAritmetica(lista ){
        
         const sumaLista1= lista.reduce(
             
             function(valoracomulado=0,nuevoElemento){
                 return valoracomulado +nuevoElemento;
                 
             }
         );
         
         const promedioLista1 = sumaLista1/ lista.length;
     
         return promedioLista1; 
     
     }
// calculadora de mediana
// mediana Salarios
function medianaSalarios(lista){

    const mitad= parseInt(lista.length/2);

    if (esPar(lista.length)){
        const personitaMitad1 = lista[mitad-1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1,personitaMitad2])
        return mediana;
    }else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }

}

// Mediana General
const salarioColombia = colombia.map(

    function (personita){
        return personita.salary;
    }

);

const salarioColSorted = salarioColombia.sort(
    function(salarioA,SalarioB){

        return salarioA-SalarioB;

    }

);

const medianaGeneralCol =    medianaSalarios(salarioColSorted)

// Mediana del top 10%


// hace un corte en la lista de array dependiendo donde nosotros le demos el corte.
// el siempre va a resivir dos valores, en donde se hace el corte y cuantas unidades despues del corte van a desaparecer.
// y va a quedar guardado enun nuevo array 
const spliceStart = (salarioColSorted.length *90)/100 ;
const spliceCount = salarioColSorted.length-spliceStart;

const salriosColTop10 = salarioColSorted.splice(spliceStart,spliceCount,)

const medianTipo10Col =    medianaSalarios(salriosColTop10)

console.log ({
    medianaGeneralCol,
    medianTipo10Col,
});


