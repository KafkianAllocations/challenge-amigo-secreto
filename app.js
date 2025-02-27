// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema. //

let amigo = [];

function agregarAmigo(){ //funcion para agregar amigos//
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value;

    if(!nombreAmigo){ //si no hay nombre//
        alert('Debes ingresar un nombre');
        return; //si no hay nombre, no se agrega//
    }
    amigo.push(nombreAmigo); //agrega el nombre al array//
    inputAmigo.value = ''; //limpia el input//
    inputAmigo.focus(); //devuelve el foco al input//
    renderizarAmigos(); //llama a la funcion para mostrar los amigos//

};

function renderizarAmigos(){ //funcion para mostrar los amigos//
    let listaAmigos = document.getElementById('listaAmigos');//crea variable listaAmigos que selecciona el ul//
    listaAmigos.innerHTML = '';
    for(let i = 0; i < amigo.length; i++){ //mientras indice "i" sea menor a la longitud del array amigo incrementa el indice "i" en 1//
        let item = document.createElement('li');//crea variable item que genera elementos li de forma dinámica//
        item.textContent = amigo[i];//agrega el nombre del amigo al li//
        listaAmigos.appendChild(item);//agrega el li "item" a la lista de amigos//
    } //for loop recorre el array y crea un li por cada amigo//
    
} //fin funcion para mostrar los amigos//

function sortearAmigo (){ //funcion para sortear amigos//
    if (amigo.length === 0) { //si no hay amigos//
        alert('Debes agregar amigos antes de sortear');//alerta//
        return; //no sortea//
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)]; //multiplica por el tamaño total del array y sortea un amigo//
    let resultado = document.getElementById('resultado');//crea variable resultado que selecciona el div//
    resultado.innerHTML = `El amigo sorteado es:${amigoSorteado}`;//muestra el amigo sorteado en el div//
    let limpiarLista = document.getElementById('listaAmigos');//crea variable limpiarLista que selecciona el ul//
    limpiarLista.innerHTML = '';//limpia la lista de amigos//


} //fin funcion para sortear amigos//
