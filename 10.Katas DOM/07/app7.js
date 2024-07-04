/* Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere" */

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const ulismo = document.createElement('ul');
ulismo.textContent = "Inmundos lugares:";
const empotralo = document.querySelector(`[data-function="printHere"]`);
empotralo.append(ulismo);

for (let i = 0; i < places.length; i++) {
  const lugar = places[i];
  const liante = document.createElement('li');
  empotralo.append(liante);
  liante.textContent = lugar;
  
}
