//importo la data
import data from './data/pokemon/pokemon.js';
import { resumeData } from './data.js';
//accedo a la función que desee colocando el nombre de la misma dentro de {} desde el data.js
import { filtrarPokemonPorTipo, sortName, sortNameReverse, sortNumber, sortNumberReverse} from "./data.js"



//aqui se guarda el arreglo de los pokemones
let arregloPokemon = data.pokemon
const pokeCard = document.getElementById("root")
const btnConocerMas = document.getElementById('conocerMas');
const pantallaUno = document.getElementById('contenedor1');
const pantallaDos = document.getElementById('root');

//FUNCIÓN PARA BOTÓN "CONOCE MÁS" Y CAMBIO DE PANTALLA//
btnConocerMas.addEventListener("click", (event) => {
   event.preventDefault()
   pantallaUno.style.display = "none";
   pantallaDos.style.display = "flex";
});


//FUNCIÓN PARA MOSTRAR LOS POKEMONES EN TARJETAS//
//le paso como parametro pokemones ya que eso es lo que queremos que muestre la interfaz//
function pintarPokemones(pokemones) {
   const pokeCard = document.getElementById("root")
   //aqui le paso el parametro pokemones
   const mostrarData = resumeData(pokemones);
   pokeCard.innerHTML = "";
   mostrarData.forEach(element => {

      pokeCard.insertAdjacentHTML("beforeend", `
   <div class="tarjetas" id="tarjetas">
      <div class="pokemonCard" id="pokemonCard"> 
      
   <div class="pokemonCard-front">
      <div class="numero">
       <span class="number" id="number">${element.numero}</span>
     </div>
     <div class="imagen">
       <img id="imgPokemon" src=${element.imagen} alt="">
     </div>
     <div class="nombre">
       <h3 id="name">${element.nombre.toUpperCase()} </h3>
     </div>
     <div class="tipo">
       <h3 id="tipo">Tipo: ${element.tipo} </h3>
     </div>
   </div>
   <div class="pokemonCard-back">
     <div class="pokeInfo">
      <h3  id=pokeInfo>${element.infoPoke} </h3>
     </div>
  
   </div>
     
 </div> 
   </div>`);
   });
}
/*aqui llamo la función creada y le paso como parametro "arregloPokemon" que es la varibale que guarda 
dicha información*/
pintarPokemones(arregloPokemon);

//FUNCIÓN FILTRAR POR TIPO//
let selectTipoDePokemon = document.getElementById("selectTipoDePokemon");
selectTipoDePokemon.addEventListener("change", (event) => {
   pokeCard.innerHTML = "";
   const valorDeOpcionSeleccionado = event.target.value;
   //aqui estoy pintando los pokemones filtrados
   let resultado = filtrarPokemonPorTipo(arregloPokemon, valorDeOpcionSeleccionado)
   //llamo la función creada y utilizo la variable RESULTADO para pintar los pokemones en la interfaz.
   pintarPokemones(resultado);
})


//FUNCIÓN PARA EL SELECT ORDENAR POR NOMBRE//
function ordenarPorNombre() {
   pokeCard.innerHTML = "";
   const selectName = document.getElementById('ordenarPorNombre').value;
   //con ese valor comparar si tengo que ordenar ascendente o descendente
   if (selectName === "orderUp") {
      const ordenAZ = sortName(arregloPokemon)
      pintarPokemones(ordenAZ)
   }
   if (selectName === "orderDown") {
      const ordenZA = sortNameReverse(arregloPokemon)
      pintarPokemones(ordenZA)
   }
}
const selectName = document.getElementById('ordenarPorNombre');
selectName.addEventListener('change', ordenarPorNombre);


//FUNCION PARA EL SELECT ORDENAR POR NÚMERO//
function ordenarPorNumero(event) {
   pokeCard.innerHTML = "";
   const selectNum = event.target.value;
   if (selectNum === "order-Up") {
      const ordenMenor = sortNumber(arregloPokemon)
      pintarPokemones(ordenMenor)
   }
   else
   if (selectNum === "order-Down") {
      const ordenMayor = sortNumberReverse(arregloPokemon)
      pintarPokemones(ordenMayor)
   }
}
const selectNum = document.getElementById('orderNumber');
selectNum.addEventListener('change', ordenarPorNumero);

