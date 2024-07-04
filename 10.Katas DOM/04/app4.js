/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click */
const pinchable = document.createElement('button');
pinchable.id = 'btnToClick';
let sonidoDeClickeo = 'Cliiiiiiiiiiiiiiiiiiiiiiiiiiiiiiick!';
pinchable.textContent = sonidoDeClickeo;
const enchufar = document.querySelector('body');
enchufar.appendChild(pinchable);

pinchable.addEventListener('click', function() {
    console.log(sonidoDeClickeo);
})

const escuchador = document.querySelector('.click');

/* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. */
const textBox = document.querySelector('.focus');
pinchable.addEventListener('focus', function() {
  console.log(textBox.value);
});

/* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */
const inputacion = document.querySelector('.value');
inputacion.addEventListener('input', function() {
  console.log(inputacion.value);
});