// Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const maxYear = new Date().getFullYear();
const minYear = maxYear - 11;

// Eventos

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); // muestra todos los autos al cargar el doc
    

    llenarSelect();
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

