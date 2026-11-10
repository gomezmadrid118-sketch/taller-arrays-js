let productos = [];

let formulario = document.getElementById('formulario');
let inputNombre = document.getElementById('producto');
let inputPrecio = document.getElementById('precio');
let inputCantidad = document.getElementById('cantidad');
let btnAgregar = document.getElementById('btnAgregar');
let tabla = document.getElementById('tabla');
let pTotal = document.getElementById('total');
let pProductoMayor = document.getElementById('productoMayor');

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    let nombreP = inputNombre.value;
    let precioP = parseFloat(inputPrecio.value);
    let cantidadP = parseInt(inputCantidad.value);
    if(nombreP === ''){
        inputNombre.style.backgroundColor = 'red';
        alert('Ingrese por favor un nombre válido');
    } else if(isNaN(precioP) || precioP <= 0){
        inputPrecio.style.backgroundColor = 'red';
        alert('Ingrese por favor un precio válido');
    } else if(isNaN(cantidadP)){
        inputCantidad.style.backgroundColor = 'red';
        alert('Ingrese por favor una cantidad válida');
    } else{
        inputNombre.style.backgroundColor = 'white';
        inputPrecio.style.backgroundColor = 'white';
        inputCantidad.style.backgroundColor = 'white';
            productos.push({
            nombre: nombreP,
            precio:  precioP,
            cantidad: cantidadP
        });
        formulario.reset();
        cargarProductos();
    }
});

function cargarProductos() {
    tabla.innerHTML = '';
    let valorTotal = 0;
    let mayorProducto;
    let mayorPrecio = 0;

    for (let i = 0; i < productos.length; i++) {

        let subtotal = productos[i].precio * productos[i].cantidad;
        valorTotal += subtotal;

        if(productos[i].precio > mayorPrecio){
            mayorProducto = productos[i].nombre;
            mayorPrecio = productos[i].precio;
        }

        tabla.innerHTML += `
        <tr>
            <td>${productos[i].nombre}</td>
            <td>${productos[i].precio}</td>
            <td>${productos[i].cantidad}</td>
            <td>${subtotal}</td>
            <td>
                <button type='button' class='Eliminar' data-indice='${i}'> Eliminar</button>
            </td>
        </tr>
        `;
        
        pTotal.textContent = `Valor total del inventario: $${valorTotal}`;
        pProductoMayor.textContent = `El producto más caro es ${mayorProducto} con un valor de $${mayorPrecio} COP`;
    }
}

tabla.addEventListener('click', eliminarProducto());

function eliminarProducto(event){
    if(event.target.id === 'btnEliminar'){
        let indice = Number(event.target.dataset.indice);

        listaProductos.splice(indice, 1);

        mostrarResultados();
    }
}