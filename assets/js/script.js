let listaNombresGastos = [];
let listasValoresGastos = [];
let listaDescripcionGastos = [];
let btnAgregarGasto  = document.getElementById("botonFormulario");
let btnActualizarGasto =  document.getElementById("botonActualizar");
let posicionEditarGasto =  0;


function clickBoton(){
    let nombreGasto = document.getElementById("nombreGasto").value;
    let valorGasto = document.getElementById("valorGasto").value;
    let descripcionGasto = document.getElementById("descripcionGasto").value;

    //confirmar gasto mayor a 150
    let confirmacion = Number(valorGasto) > 150 ? confirm("Confirma el gasto de más de $150?") : true;

    console.log(nombreGasto);
    console.log(valorGasto);
    console.log(descripcionGasto);
    
    if (confirmacion) {
        listaNombresGastos.push(nombreGasto);
        listasValoresGastos.push(valorGasto);
        listaDescripcionGastos.push(descripcionGasto);

        console.log(listaNombresGastos);
        console.log(listasValoresGastos);
        console.log(listaDescripcionGastos);

    
        //alert("Click de usuario");
        actualizarListaGastos();
    }
    
}

function actualizarListaGastos(){
    const listaElementos  = document.getElementById("listaDeGastos");
    const totalElementos = document.getElementById("totalGastos");
    let htmlLista = "";
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) => {
        const  valorGasto = Number(listasValoresGastos[posicion]);
        const descripcionGasto =  listaDescripcionGastos[posicion];

        htmlLista += `<li>${elemento} - ${descripcionGasto} - USD ${valorGasto.toFixed(2)}
        <span><button onclick="editarGasto(${posicion})">Editar</button>
        <button onclick="eliminarGasto(${posicion})">Eliminar</button></span>
        </li>`;
        //Calculamos el total de gastos
        totalGastos += Number(valorGasto);
        console.log(totalGastos);
    });
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar(){
    document.getElementById("nombreGasto").value =  "";
    document.getElementById("valorGasto").value  = "";
    document.getElementById("descripcionGasto").value = "";

}

function  eliminarGasto(posicion){
    listaNombresGastos.splice(posicion, 1);
    listasValoresGastos.splice(posicion, 1);
    listaDescripcionGastos.splice(posicion, 1);
    actualizarListaGastos();
    btnActualizarGasto.style.display = "none";
    btnAgregarGasto.style.display = "block";
}

function editarGasto(posicion){
    document.getElementById("nombreGasto").value = listaNombresGastos[posicion]
    document.getElementById("valorGasto").value = listasValoresGastos[posicion]
    document.getElementById("descripcionGasto").value = listaDescripcionGastos[posicion]
    btnActualizarGasto.style.display =  "block";
    btnAgregarGasto.style.display = "none";
    posicionEditarGasto =  posicion;
    
}

function  actualizarGasto(){
    listaNombresGastos[posicionEditarGasto]  = document.getElementById("nombreGasto").value;
    listasValoresGastos[posicionEditarGasto] = document.getElementById("valorGasto").value;
    listaDescripcionGastos[posicionEditarGasto] = document.getElementById("descripcionGasto").value;
    actualizarListaGastos();
    btnActualizarGasto.style.display = "none";
    btnAgregarGasto.style.display = "block";
    limpiar();

}

