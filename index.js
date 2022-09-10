/**
 * pedir por prompt al usuario sus datos personales, luego de eso que incluya un turno que saldra de un array, este se metera a un array de objetos. Y al finalizar la solicitud de turnos.
 * 1- si ya no hay turnos disponibles, mostrar el mensaje de que ya no hay turnos, o si sobran turnos también podrá finalizar el script escribiendo "fin"
 */

let fechas = ["07/09/22", "08/09/22", "09/09/22", "12/09/22", "13/09/22", "14/09/22"];
let salirCiclo = true
let mostrar = "";
let fechaElegida;
let opcion;
const PREGUNTA_ERROR = "Desea intentar nuevamente?"
const PREGUNTA_TURNO = "Desea sacar otro turno?"
const DATOS = [];

class Persona {
    constructor(nombre, apellido, edad, turno) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.turno = turno;
    }
    pedirDatos(turnoSeleccionado) {
        this.nombre = prompt("Ingrese su nombre: ");
        this.apellido = prompt("Ingrese su apellido: ");
        this.edad = prompt("Ingrese su edad: ");
        this.turno = turnoSeleccionado
    }
}


function preguntar(pregunta) {
    let valor2 = false;
    do {
        let consulta = prompt(`${pregunta} SI/NO`)
        switch (consulta.toLowerCase()) {
            case "si":
                salirCiclo = true;
                valor2 = false;
                break;
            case "no":
                salirCiclo = false;
                valor2 = false;
                alert("Fin del programa")
                break;
            default:
                alert("Respuesta incorrecta!\nIngrese nuevamente una respuesta");
                valor2 = true;
                break;
        }
    } while (valor2);
    return salirCiclo
}

let persona = new Persona("","","","");

do {
    if (fechas.length > 0) {
        mostrar = "";
        for (let i = 0; i < fechas.length; i++) {
            mostrar += i + 1 + ") " + fechas[i] + " \n";
        }

        opcion = parseInt(prompt(`Selecciones una fecha disponible: \n${mostrar}`));

        if (opcion == "" || isNaN(opcion)) {
            alert("valor incorrecto!")
            preguntar(PREGUNTA_ERROR)
        }
        else {

            opcion -= 1;
            if (opcion < fechas.length) {
                fechaElegida = fechas[opcion]
                fechas.splice(opcion, 1);// indice a eliminar y el segundo numero dice cuantos elementos va a eliminar, si ponemos un tercero lo va a remplazar

                persona.pedirDatos(fechaElegida)
                DATOS.push(new Persona(persona.nombre, persona.apellido, persona.edad, persona.turno))
                
                // console.log(DATOS)
                
                preguntar(PREGUNTA_TURNO)
            }
            else {
                alert("Ha seleccionado una opción incorrecta!")
                preguntar(PREGUNTA_ERROR)
            }
        }
    }
    else {
        alert("Actualmente no dispone de mas turnos, intente nuevamente más tarde.\nHasta luego!")
        salirCiclo = false
    }


} while (salirCiclo)

console.log(DATOS)
for (const dato of DATOS){
    console.log(persona.nombre)
    console.log(persona.apellido)
    console.log(persona.edad)
    console.log(persona.turno)
}