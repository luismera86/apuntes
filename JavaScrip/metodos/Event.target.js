/* 

Event.target
La propiedad target de la interfaz del event.currentTarget es una referencia al objeto en el cual se lanzo el evento. Es diferente de event.currentTarget donde el controlador de eventos (event handler) es llamado durante la fase de bubbling or capturing del evento.

*/

// Sintaxis

const theTarget = algunEvento.target

// Ejemplo

// La propiedad event.target  puede ser usada para implementar una delegación del evento.

// Crear una lista
const ul = document.createElement('ul');
document.body.appendChild(ul);

const li1 = document.createElement('li');
const li2 = document.createElement('li');
ul.appendChild(li1);
ul.appendChild(li2);

function hide(e){
  // e.target se refiere elemento clickado <li>
  // Esto es diferente de e.currentTarget, que se referiría al padre <ul> en este contexto
  e.target.style.visibility = 'hidden';
}

// Incluir el 'listener' a la lista
// Se ejecutará cuando se haga click en cada <li>
ul.addEventListener('click', hide, false);



e.target.tagName // Saca el nombre del tag por ejemple h1, div, span, a, img, section, etc.

e.target.id // Saca el valor del id de la etiqueta html

e.target.classList // Devuelve un array con las clases que tiene la etiqueta html, se puede identificar la clase por el valor indice e.target.classList[0] te devuelve el valor de la primera clase

e.target.parentElement //  El parentElement Identifica el elemento padre del elemento clicado, siendo el div el elemento padre del input y el li el elemento padre del div. A medida que agregamos parentElement, se irá subiendo hasta llegar al elemento que se quiere identificar.

e.target.localName // Identifica el elemento que se ha clicado en el DOM (input, label, button, etc)

e.target.tex // Identifica el texto donde se hace el target