
// con variables 

console.group('Variables de precios');

const PrecioO=120;
const Descuento=18;

const ProcentajeConDescuento=100-Descuento;
const PrecioConDescuento=(PrecioO*ProcentajeConDescuento)/100;


console.log({
    PrecioO,
    Descuento,
    ProcentajeConDescuento,
    PrecioConDescuento,
});


console.groupEnd('Variables de precios');

// Funcion
console.group('funcion de precios');

function FormulaDescuentos (P_Original,Descuento){

    return PrecioFinal = (P_Original*(100-Descuento)/100);

}
console.groupEnd('funcion de precios');

// otra manera de hacer la ecacion


function FormulaDescuentos2 (PrecioO,Descuento){

const ProcentajeConDescuento=100-Descuento;
const PrecioConDescuento=(PrecioO*ProcentajeConDescuento)/100;
return PrecioConDescuento;

}

// Aqui acogeremos terminologia de HTML y La escribiremos en JS

function PriceDiscount() {
    // Formula en la consola
    const inputPrice= document.getElementById("Price");
    const PriceValue= inputPrice.value;

    const inputDiscount= document.getElementById("Discount");
    const DiscountValue= inputDiscount.value;
    
    const calcular_precio = FormulaDescuentos (PriceValue,DiscountValue);
    // Retornar a  HTML
    const reultP = document.getElementById('PriceP');
    reultP.innerText='El Precio Final es:'+ calcular_precio;
    // inner text debuelve el elemeto de la funcion, que esta en la contante y/o Variable, 
    // que esta a su vez acoge una ina id en HTLM
    }

const Cupones_de_descuento =["Afortunado","Con suerte","Eres el Rey"];


    function Price_Cupon_Discount() {
        
        // Formula en la consola
        
        const inputPrice= document.getElementById("Price");
        const PriceValue= inputPrice.value;
    
        const inputCupo= document.getElementById("Cupon");
        const DescuentoCupo= inputCupo.value;
    //_____________________________________________________________________________________
        // En el siguiente determinaremos una descuento con base a un array 
        // y utilizremos un switch para derecionar el descuento con la funcion
    /*  let descuento;

        switch (DescuentoCupo) {
            case Cupones_de_descuento[0]:
                descuento= 15;       
             break;

            case Cupones_de_descuento[1]:
                descuento= 50;
            break;

            case Cupones_de_descuento[2]:
                descuento= 25 ;
            break;
            
        }

        const calcular_precio = FormulaDescuentos 
                                (PriceValue,descuento);
*/
// _____ Otra Manera de hacer el switch es con if_____
/* esto se hace mas legible el codigo 
El !Cupones_de_descuento.includes(DescuentoCupo) 
 determina si estan los elemetos dentro del array para sean jalados*/

 if (!Cupones_de_descuento.includes(DescuentoCupo)) {
    const reultP = document.getElementById('PriceP');
    reultP.innerText="El cupón " + inputCupo.value + "no es válido";
 } else if (DescuentoCupo === "Afortunado") {
    descuento = 15;
 } else if (DescuentoCupo === "Con suerte") {
    descuento = 50;
 } else if (DescuentoCupo === "Eres el Rey") {
    descuento = 25;
 }

//__________Otra manera es reduciendo las lineas de codigo
// aqui implementamos mas de un elemento a el array 
/*
const Cupones_de_descuento =[{name:"Afortunado",descuento=15},
                            {name:"Con suerte",descuento=50},
                            {name:"Eres el Rey",descuento=25}];

const isCouponValueValid = function (coupon) {
    return coupon.name === DescuentoCupo;
};

const userCoupon = Cupones_de_descuento.find(isCouponValueValid);

if (!userCoupon) {
    alert("El cupón " + userCouponValue + "no es válido");
} else {
    const descuento = userCoupon.descuento;
    const calcular_precio = FormulaDescuentos 
                            (PriceValue,descuento);
    const reultP = document.getElementById('PriceP');
    reultP.innerText='El Precio Final es:'+ calcular_precio;
}
!!! MUY ENGORROSO EL ULTIMO !!!!
*/

 // Retornar a HTML
        const calcular_precio = FormulaDescuentos 
         (PriceValue,descuento);
         const reultP = document.getElementById('PriceP');
         reultP.innerText='El Precio Final es:'+ calcular_precio;
         // inner text debuelve el elemeto de la funcion, que esta en la contante y/o Variable, 
         // que esta a su vez acoge una ina id en HTLM

         
    }
