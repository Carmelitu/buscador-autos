// Variables
const year = document.querySelector('#year');
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor resultados
const resultado = document.querySelector('#resultado');

const maxYear = new Date().getFullYear();
const minYear = maxYear - 11;


// Generar objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}


// Eventos

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); // muestra todos los autos al cargar el doc
    

    llenarSelect();
})

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
})

year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
})

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
})

// Funciones

function mostrarAutos(){
    autos.forEach( auto => {
        const {marca, modelo, year, precio, puertas, transmision, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: $ ${precio} - Color: ${color}
        `;

        resultado.appendChild(autoHTML);
    })
}

function llenarSelect(){

    for (let i = maxYear; i > minYear; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // agregar opciones de año al select
    }
}

