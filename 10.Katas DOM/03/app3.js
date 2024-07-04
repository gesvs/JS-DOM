/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.*/
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']; 
const uleo = document.createElement('ul');
uleo.textContent = 'Países:';
const ubicante = document.querySelector('body');
ubicante.append(uleo);
for (let i = 0; i < countries.length; i++) {
  const pais = countries[i];
  const liseo = document.createElement('li');
  liseo.textContent = pais;
  uleo.append(liseo);
}

/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */
const borroso = document.querySelector('.fn-remove-me');
borroso.remove();

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere". */
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']; 
const attributeSelector = document.querySelector('div[data-function]');
const ulificador = document.createElement('ul');
ulificador.textContent = 'Autos:';
attributeSelector.append(ulificador);
for (let j = 0; j < cars.length; j++) {
  const carros = cars[j];
  const garaje = document.createElement('li');
  garaje.textContent = carros;
  ulificador.append(garaje);
}

/* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */
const countriesTwo = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
]; 

for (let k = 0; k < countriesTwo.length; k++) {
  let randomeo = countriesTwo[k];  
  let divider = document.createElement('div');
  ubicante.append(divider);
  /* console.log(divider); */
  const titulador = document.createElement('h4');
  titulador.textContent = randomeo.title;
  divider.append(titulador);
  const ilustrador = document.createElement('img');
  divider.append(ilustrador);
  ilustrador.src = randomeo.imgUrl;
}

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs. */
const urtimoDiv = document.querySelector('div:last-child');
let botoncito = document.createElement('button');
botoncito.textContent = 'BORRA'
ubicante.append(botoncito);

botoncito.addEventListener('click', function() {
  urtimoDiv.remove();
});

/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html. */

const divS = document.querySelectorAll('div:not(:first-child)');
/* console.log(divS); */
for (let k = 0; k < divS.length; k++) {
  const megaBoton = document.createElement('button');
  megaBoton.textContent = 'Mátame, por favor!';
  const division = divS[k];
  division.append(megaBoton);
  console.log(division);
  /* const prescindible = document.querySelectorAll(division); */
  /* console.log(prescindible); */
 /* prescindible.append(megaBoton); */
 megaBoton.addEventListener('click', function() {
  division.remove();
})
}





