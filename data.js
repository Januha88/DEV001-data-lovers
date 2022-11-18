//EXPORTANDO FUNCIÓN PARA MOSTRAR DATOS EN LAS TARJETAS
export function resumeData(arregloPokemon) {
  const primerosDatos = [];
  arregloPokemon.forEach(element => {
    primerosDatos.push({ imagen: element.img, numero: element.num, nombre: element.name, infoPoke: element.about, tipo: element.type })
  });
  return primerosDatos
}
//EXPORTANDO FUNCIÓN PARA FILTRAR POR TIPO
export function filtrarPokemonPorTipo(pokemones, opcionElegida) {
  return pokemones.filter((pokemon) => {
    return pokemon.type.includes(opcionElegida)
  })
}
//EXPORTANDO FUNCIÓN QUE ORDENA DE A-Z
export function sortName(data, columna = "name") {
  return data.sort((a, b) => {
     return a[columna] < b[columna] ? -1 : 1;
  })
}
//EXPORTANDO FUNCIÓN QUE ORDENA DE Z-A
export function sortNameReverse(data) {
  const sortedData = sortName(data)
  sortedData.reverse()
  return sortedData
}
//EXPORTANDO FUNCIÓN QUE ORDENA DE MENOR A MAYOR//
export function sortNumber(data) {
  return data.sort((a, b) => {
    return parseInt(a.num) < parseInt(b.num) ? -1 :  parseInt(a.num) == parseInt(b.num) ? 0 : 1
  })
}
//EXPORTANDO FUNCIÓN QUE ORDENA DE MAYOR A MENOR//
export function sortNumberReverse(data) {
  const numOrdenados = sortNumber(data)
  numOrdenados.reverse()
  return numOrdenados;
}

