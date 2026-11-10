let listaNombres = [];

let inputNombre = document.getElementById('nombre');
let btnAgregar = document.getElementById('btnAgregar');
let lista = document.getElementById('lista');
let cantidad = document.getElementById('cantidad');

btnAgregar.addEventListener('click', function(){
    let nombre = inputNombre.value.toUpperCase().trim();

    if(nombre === '' || listaNombres.includes(nombre)){
        alert('Ingrese un nombre válido o no registrado.');
        inputNombre.style.backgroundColor='red';
        inputNombre.value = '';
    } else {
        listaNombres.push(nombre);
        mostrarNombres();

        inputNombre.value = '';
        inputNombre.focus();
        inputNombre.style.backgroundColor='white';
    }
});

function mostrarNombres() {
    lista.innerHTML = '';
    for (let i = 0; i < listaNombres.length; i++) {
        lista.innerHTML += `<li>${listaNombres[i]}</li>`;
    }
    cantidad.textContent = `Total registrados: ${listaNombres.length}`;
};