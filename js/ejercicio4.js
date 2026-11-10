let estudiantes = [
    'ana garcía',
    'carlos rodríguez',
    'laura martínez',
    'miguel torres',
    'sofía hernández',
    'daniel lópez',
    'valentina gómez',
    'andrés moreno'
];

let lista = document.getElementById('lista');
let busqueda = document.getElementById('busqueda');
let btnBuscar = document.getElementById('btnBuscar');
let mensaje = document.getElementById('mensaje');

for (let i = 0; i < estudiantes.length; i++) {
    lista.innerHTML += `<li>${estudiantes[i]}</li>`;
}

btnBuscar.addEventListener('click', function () {
    let nombreBuscado = busqueda.value.trim().toLowerCase();

    if (nombreBuscado === '') {
        alert('Ingrese un nombre para buscar');
        return;
    }

    let estudianteEncontrado = estudiantes.find(function (estudiante) {
        return estudiante.toLowerCase().includes(nombreBuscado);
    });

    if (estudianteEncontrado) {
        mensaje.textContent = `${estudianteEncontrado} está registrado.`;
        mensaje.style.color = 'green';
    } else {
        mensaje.textContent = 'El estudiante no está registrado.';
        mensaje.style.color = 'red';
    }
});
