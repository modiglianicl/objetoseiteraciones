// Definiendo tipo de consultas
let tipoConsultas = ['Radiología','Traumatología','Dental']
let tipoIsapre = ['Kongsalud','Foñata','Coolmena']

// Funciones que generan datos random
const consultaRandom = () => {
    randomIndex = Math.floor(Math.random() * tipoConsultas.length);
    consultaFinal = tipoConsultas[randomIndex];
    return consultaFinal

}

const isapreRandom = () => {
    randomIndex = Math.floor(Math.random() * tipoIsapre.length);
    isapreFinal = tipoIsapre[randomIndex];
    return isapreFinal

}

// Objeto que contiene info pacientes
let infocentro = {
    consultas : [
        {
            datosPaciente: {
                tipoConsulta : `${consultaRandom()}`,
                nombre : 'Pepito D. Doble',
                atencion : `${isapreRandom()}`,
                edad : `${Math.floor(Math.random() * 80)}`
            }
        },
        {   datosPaciente: {
                tipoConsulta : `${consultaRandom()}`,
                nombre : 'Katakuri',
                atencion : `${isapreRandom()}`,
                edad : `${Math.floor(Math.random() * 80)}`
            }
        },
        {datosPaciente: {
                tipoConsulta : `${consultaRandom()}`,
                nombre : 'Zorojuro',
                atencion : `${isapreRandom()}`,
                edad : `${Math.floor(Math.random() * 80)}`
            }
        },
            {datosPaciente: {
                tipoConsulta : `${consultaRandom()}`,
                nombre : 'Okuki',
                atencion : `${isapreRandom()}`,
                edad : `${Math.floor(Math.random() * 80)}`
            },
        }
    ]
}



/// Requerimiento N°2

// Primera consulta
let parrafoMensajes = document.getElementById("mensajes").innerHTML

parrafoMensajes += `<h2>Primera Consulta</h2>
<p>Tipo de Consulta : ${infocentro.consultas[0].datosPaciente.tipoConsulta}</p>
Nombre Paciente : ${infocentro.consultas[0].datosPaciente.nombre}<br>
Tipo Atención : ${infocentro.consultas[0].datosPaciente.atencion}<br>
Edad : ${infocentro.consultas[0].datosPaciente.edad} años.<br><hr>
`
document.getElementById("mensajes").innerHTML = parrafoMensajes;

// Segunda consulta

// Obtenemos la cantidad de elementos
let ultimoIndice = infocentro.consultas.length - 1;

let parrafoMensajesDos = document.getElementById("mensajes").innerHTML

parrafoMensajesDos += `<h2>Ultima Consulta</h2>
<p>Tipo de Consulta : ${infocentro.consultas[ultimoIndice].datosPaciente.tipoConsulta}</p>
Nombre Paciente : ${infocentro.consultas[ultimoIndice].datosPaciente.nombre}<br>
Tipo Atención : ${infocentro.consultas[ultimoIndice].datosPaciente.atencion}<br>
Edad : ${infocentro.consultas[ultimoIndice].datosPaciente.edad} años.<br><br>
`
document.getElementById("mensajes").innerHTML = parrafoMensajesDos;




console.log('Ultima consulta ')
console.log(`Tipo de Consulta : ${infocentro.consultas[ultimoIndice].tipoConsulta}`);
console.log(`Nombre : ${infocentro.consultas[ultimoIndice].datosPaciente.nombre}`);
console.log(`Atención : ${infocentro.consultas[ultimoIndice].datosPaciente.atencion}`);
console.log(`Edad : ${infocentro.consultas[ultimoIndice].datosPaciente.edad}`);

/// Requerimiento N°3

// Obteniendo nombre de columnas

let nombreColumnas = Object.keys(infocentro.consultas[0].datosPaciente); // Usamos las columnas que tiene el primer elemento;

// Elemento a modificar

let headersTabla = document.getElementById("columnas").innerHTML;

for (let columna of nombreColumnas) {
    headersTabla += `<th>${columna}</th>`
}

// Asignamos el nuevo HTML al elemento id #columnas
document.getElementById("columnas").innerHTML = headersTabla;

// Insertando Datos en filas

let filasTabla = document.getElementById("datos-paciente").innerHTML;

for (let i = 0 ;  i < infocentro.consultas.length; i++) {
    let consultaName = infocentro.consultas[i].datosPaciente.tipoConsulta;
    let pacienteName = infocentro.consultas[i].datosPaciente.nombre;
    let atencionName = infocentro.consultas[i].datosPaciente.atencion;
    let edadValue = infocentro.consultas[i].datosPaciente.edad;

    filasTabla += `<tr>
                    <td>${consultaName}</td>
                    <td>${pacienteName}</td>
                    <td>${atencionName}</td>
                    <td>${edadValue}</td>
                </tr>`
}

document.getElementById("datos-paciente").innerHTML = filasTabla;

console.log(`${infocentro.consultas[2].datosPaciente.edad}`)