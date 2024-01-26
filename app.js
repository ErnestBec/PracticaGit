//Variables
/*
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10");

console.log(numeroUsuario);
Este codigo realiza la comparación
if(numeroUsuario == numeroSecreto){
    // Acertamos, fue verdadera la condicion
    alert(`Acertaste, el número es: ${numeroUsuario}` );
} else{
    //La condicion o se cumplio
    alert("Lo siento no acertaste el número!")
}
*/
/*

let porcentajeDescuento = 0;
let cantidadMillas = prompt("Ingrese la cantidad de millas");


if (cantidadMillas > 5000) {
    porcentajeDescuento = porcentajeDescuento + 10;
    console.log("Tu descuento es de 10");
} else {
    porcentajeDescuento = porcentajeDescuento + 20;
    console.log("Tu descuento es de 20");
}

if (cantidadMillas > 30000) {
    porcentajeDescuento = porcentajeDescuento + 20;
    console.log("Tu descuento es de 20");
    
} else {
    porcentajeDescuento = 0;
}
*/
/*
if (cantidadMillas > 30000) {
    porcentajeDescuento = 20;
} else if (cantidadMillas > 5000) {
    porcentajeDescuento = 10;
    
} else {
    porcentajeDescuento = 0;
    console.log("Tu descuento es de 0");
    
}
*/
//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 6;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible}  por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}