let listaNumeros = [];

let numero = document.getElementById('numero');
let btnAgregar = document.getElementById('btnAgregar');
let lista = document.getElementById('lista');
let suma = document.getElementById('suma');
let promedio = document.getElementById('promedio');
let mayor = document.getElementById('mayor');
let menor = document.getElementById('menor');

btnAgregar.addEventListener('click', function(){
    if(numero.value.trim() === ''){
        alert('Ingrese por favor un número');
        numero.style.backgroundColor = 'red';
    } else{
        let valor = parseFloat(numero.value);

        listaNumeros.push(valor);
        numero.value = '';
        mostrarResultados();
        numero.style.backgroundColor = 'white';
    }
});

function mostrarResultados(){
    lista.innerHTML = '';
    let total = 0;
    let numMayor = listaNumeros[0];
    let numMenor = listaNumeros[0];

    for (let i = 0; i < listaNumeros.length; i++) {
        lista.innerHTML += `<li>${listaNumeros[i]}</li>`
        total += listaNumeros[i];

        if (listaNumeros[i] < numMenor) {
            numMenor = listaNumeros[i];
        }
        if (listaNumeros[i] > numMayor) {
            numMayor = listaNumeros[i];
        }
    }
    let media = total / listaNumeros.length;

    suma.textContent = `Suma: ${total}`;
    promedio.textContent = `Promedio:${media.toFixed(2)}`;
    mayor.textContent = `Mayor: ${numMayor}`;
    menor.textContent = `Menor: ${numMenor}`;
}