/**
 * Mostrar los turnos disponibles por un alert
 * que el usuario ingrese por consola sus datos (nombre apellido y edad) y diga que día del mes se quiere hacer atender
 */
let datos = [];
let fechas = ["07/09/22", "08/09/22", "09/09/22", "12/09/22", "13/09/22", "14/09/22"];
let mostrar = "";

for(let i = 0 ; i<fechas.length ; i++){
    mostrar += i+1 +") "+ fechas[i] + " \n";
}

console.log(mostrar);



let opcion = parseInt(prompt(`Selecciones una fecha disponible: \n${mostrar}`));
opcion -= 1;
let fechaElegida = fechas[opcion]
let removed = fechas.splice(opcion, 1);// indice a eliminar y el segundo numero dice cuantos elementos va a eliminar, si ponemos un tercero lo va a remplazar
mostrar = "";
for(let i = 0 ; i<fechas.length ; i++){
    mostrar += i+1 +") "+ fechas[i] + " \n";
}
alert(`${mostrar}`);

function pedirDatos(){
    let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("Ingrese su apellido: ");
    let edad = prompt("Ingrese su edad: ");
    datos.push(nombre)
    datos.push(apellido)
    datos.push(edad)
    datos.push(fechaElegida)
    return datos
}
console.log(pedirDatos())
alert(`Sus datos son ${datos[0]} ${datos[1]} ${datos[2]} y su turno es el ${datos[3]}`)