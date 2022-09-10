/**
 * SOLICITAR UN TURNO:
 * 
 * pedir por prompt al usuario sus datos personales, luego de eso que incluya un turno que saldra de un array de turnos. Y al finalizar la solicitud de turnos se imprimen por consola los turnos dados
 * si ya no hay turnos disponibles, mostrará el mensaje de que ya no hay turnos disponibles
 * 
 */


// Declaración de variables 

// El array fechas cada vez que se solicite un turno, una fecha será eliminada para que no se de un turno repetido
let fechas = ["07/09/22", "08/09/22", "09/09/22", "12/09/22", "13/09/22", "14/09/22"];

// Declaración de la variable que dará salida al ciclo principal doWhile
let salirCiclo = true

// La variable mostrar almacenará en un string para mostrar por el prompt las fechas disponibles
let mostrar = "";

// La variable fechaElegida será almacenada en el array de objetos
let fechaElegida;
// La variable opcion guarda el indice del turno elegido, este dará lugar también a la elimincación de dicho turno
let opcion;

// Constantes que personalizan uno de los mensajes que da la función "preguntar" que se harán en el transcurso de la ejecución
const PREGUNTA_ERROR = "Desea intentar nuevamente?"
const PREGUNTA_TURNO = "Desea sacar otro turno?"
// El array que almacena los objetos Persona
const DATOS = [];

// Clase persona con el método (pedirDatos()) que ingresará los datos del objeto
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

// función preguntar(pregunta) que recibe como parametro una constante y define un ciclo para corroborar que el usuario elija una opción correcta
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
// Instancia de un objeto Persona para poder ejecutar los metodos de la clase
let persona = new Persona("","","","");

//Ciclo principal del código
do {
    //Se verifica que el array fechas tenga por lo menos una fecha disponible
    if (fechas.length > 0) {
        mostrar = "";
        for (let i = 0; i < fechas.length; i++) {
            mostrar += i + 1 + ") " + fechas[i] + " \n";
        }

        opcion = parseInt(prompt(`Seleccione una fecha disponible: \n${mostrar}`));
        
        // Corrobora si se ingresó una opción válida
        if (opcion == "" || isNaN(opcion)) {
            alert("valor incorrecto!")
            preguntar(PREGUNTA_ERROR)
        }
        else {
            // Como para comodidad del usuario, se imprime en el prompt numeros para enumarar los turnos diponibles pero empezando desde el 1, por ende, restamos uno para que el código indique el verdadero indice que el usuario eligió
            opcion -= 1;

            // Nos aseguramos que el número ingresado esté en un intervalo válido
            if (opcion >= 0 && opcion < fechas.length) {

                fechaElegida = fechas[opcion]
                fechas.splice(opcion, 1);// indice a eliminar y el segundo numero dice cuantos elementos va a eliminar, si ponemos un tercero lo va a remplazar

                persona.pedirDatos(fechaElegida)// Se ejecuta el método correspondiente para el ingreso de datos del usuario
                // Se almacena el objeto en el array DATOS
                DATOS.push(new Persona(persona.nombre, persona.apellido, persona.edad, persona.turno))
                
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

// Una vez finalizado el ciclo principal imprimimos los datos obtenidos en consola
console.log(DATOS)
for (const dato of DATOS){
    console.log(`Nombre: ${persona.nombre}`)
    console.log(`Apellido: ${persona.apellido}`)
    console.log(`Edad: ${persona.edad}`)
    console.log(`Fecha del turno: ${persona.turno}`)
    console.log("-----------------------------------")
    
}