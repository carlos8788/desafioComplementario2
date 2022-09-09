/**
 * Mostrar los turnos disponibles por un alert
 * que el usuario ingrese por consola sus datos (nombre apellido y edad) y diga que día del mes se quiere hacer atender
 */
let datos = []

let fechas = ["07/09/22", "08/09/22", "09/09/22", "12/09/22", "13/09/22", "14/09/22"];





/**
 * pedir por prompt al usuario sus datos personales, luego de eso que incluya un turno que saldra de un array, este se metera a un array de objetos. Y al finalizar la solicitud de turnos.
 * 1- si ya no hay turnos disponibles, mostrar el mensaje de que ya no hay turnos, o si sobran turnos también podrá finalizar el script escribiendo "fin"
 */

class Persona {
    
    constructor(nombre, apellido, edad, turno){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.turno = turno;
    }

    // pedirTurno(){
    //     datos.push(this.nombre)
    //     datos.push(this.apellido)
    //     datos.push(this.edad)
    //     datos.push(this.turno)
    //     return datos
    // }
}

function pedirDatos(){
    nombre = prompt("Ingrese su nombre: ");
    apellido = prompt("Ingrese su apellido: ");
    edad = prompt("Ingrese su edad: ");
}

function preguntar(){
    let valor2 = false;
    do {
        let consulta = prompt("Desea continuar? SI/NO")
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


// const persona1 = new Persona(nombre, apellido, edad, fechaElegida)
// persona1.pedirTurno()

// alert(`Sus datos son ${datos[0]} ${datos[1]} ${datos[2]} y su turno es el ${datos[3]}`)
// alert(persona1)
// const arrayTurnos = [];
// // arrayTurnos.push(persona1)
// for (const turnos of arrayTurnos){
//     console.log(turnos)
// }

let salirCiclo = true

do{
    let mostrar = "";

    for(let i = 0 ; i<fechas.length ; i++){
        mostrar += i+1 +") "+ fechas[i] + " \n";
    }

    // console.log(mostrar);



    let opcion = parseInt(prompt(`Selecciones una fecha disponible: \n${mostrar}`));
    console.log(opcion)
    console.log(isNaN(opcion))

    if(opcion !== "" || isNaN(opcion)){
        alert("valor incorrecto!")
        preguntar()
    }
    else{
        opcion -= 1;
        fechas.splice(opcion, 1);// indice a eliminar y el segundo numero dice cuantos elementos va a eliminar, si ponemos un tercero lo va a remplazar
        mostrar = "";
        for(let i = 0 ; i<fechas.length ; i++){
            mostrar += i+1 +") "+ fechas[i] + " \n";
        }
        alert(`${mostrar}`);

        if (fechas.length == 0){
            salirCiclo = false
        }
    }
        
    // let fechaElegida = fechas[opcion]
    
    // pedirDatos()
    // preguntar()
}while(salirCiclo)

