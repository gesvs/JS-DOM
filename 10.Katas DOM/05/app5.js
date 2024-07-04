/* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
que imprima cada uno de los albums. */

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

let discos = document.createElement('ul');
const colocar = document.querySelector('body');
colocar.append(discos);

for (let i = 0; i < albums.length; i++) {
  const disco = albums[i];
   
  const vinilo = document.createElement('li');
  
  discos.append(vinilo);  

  vinilo.textContent = disco;
};
