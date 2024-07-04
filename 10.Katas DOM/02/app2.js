/* 1.1 Inserta dinamicamente en un html un div vacio con javascript. */
let creaDiv = document.createElement('div');
creaDiv.textContent = '1--------------------------texto divisor bonito';
let ubicador = document.querySelector('body');
ubicador.appendChild(creaDiv);


/* 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript. */
const muestra = document.querySelector('body');
const divp = document.createElement('div');
const pdiv = document.createElement('p');
pdiv.textContent = "2--------------------------div con p";
divp.appendChild(pdiv);
muestra.appendChild(divp);

/* 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript. */
  const pContenter = document.createElement('div');
  pContenter.classList.add('clasicismoc');

  const ubicaEnBody = document.querySelector('body');
  ubicaEnBody.appendChild(pContenter);

  for (let i = 0; i < 6; i++) {
    const parrafada = document.createElement('p');
    parrafada.textContent = `3--------------------------${i + 1} div con 6 p`;
    pContenter.appendChild(parrafada);
  };

 /* 1.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'. */
  const parrafoConTextoIrrelevante = document.createElement('p');
  parrafoConTextoIrrelevante.textContent = '4--------------------------Soy dinámico!';
  /* console.log(parrafoConTextoIrrelevante); */
  const queYoLoVea = document.querySelector('body');
  queYoLoVea.appendChild(parrafoConTextoIrrelevante);

  /* 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. */
const meteTextitos = document.querySelector(`.fn-insert-here`);
const sacaTextos = document.querySelector('.fn-remove-me');
meteTextitos.textContent = "5--------------------------Wubba Lubba dub dub";
ubicador.insertBefore(meteTextitos, sacaTextos);

  /* 1.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.*/
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']; 
const uler = document.createElement('ul');
uler.textContent = "6--------------------------Para perder el puto tiempo:";
queYoLoVea.appendChild(uler);

for (let i = 0; i < apps.length; i++) {
  const lier = document.createElement('li');  
  const meteLis = document.querySelector('ul');
  meteLis.appendChild(lier);

  const titular = apps[i];
  lier.textContent = titular;

}

/* 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me */
/* const ubica = document.querySelector('body'); */
const borrables = document.querySelectorAll(".fn-remove-me");
for (let i = 0; i < borrables.length; i++) {
  borrables[i].remove();
}

/* 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild. */
  const spanismo = document.createElement("span");
  spanismo.textContent = "8--------------------------Voy en medio!";
  ubicador.insertBefore(spanismo, pContenter);
  /* 
Métodos insertAdjacentElement:
beforebegin: Inserta el elemento antes del elemento de referencia.
afterbegin: Inserta el elemento como primer hijo del elemento de referencia.
beforeend: Inserta el elemento como último hijo del elemento de referencia.
afterend: Inserta el elemento después del elemento de referencia. 
*/

  /* 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here */
  const rellenar = document.querySelectorAll('div.fn-insert-here');

  for (let j = 0; j < rellenar.length; j++) {
  const rellenable = rellenar[j];  
  const parrafismo = document.createElement('p');
  parrafismo.textContent = "9--------------------------Voy dentro!";
  rellenable.appendChild(parrafismo);
 }

 