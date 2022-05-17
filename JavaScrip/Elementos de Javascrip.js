/* 
Toda la documentación en https://developer.mozilla.org/es/docs/Web/API/Element


*/


/* 

Propiedades
Nombre	Descripción	Tipo	Disponibilidad
attributes	Todos los atributos asociados a un elemento.	NamedNodeMap	para todos
childNodes	Todos los nodos hijos de un elemento.	Listado de nudo	para todos
className	La clase del elemento.	Secuencia	para HTML, XUL
clientHeight	El alto interior del elemento.	Número	para HTML
clientWidth	El ancho interior del elemento.	Número	para HTML
dir	La direccionalidad del elemento.	Secuencia	para HTML, XUL
firstChild	El primer hijo directo del elemento, null si no hay.	Nudo	para todos
id	La identificación del elemento.	Secuencia	para HTML, XUL
innerHTML	El contenido y el código que hay dentro del elemento.	Secuencia	para HTML
lang	El lenguaje de los atributos, texto y contenidos del elemento.	Secuencia	para HTML
lastChild	El último hijo directo del elemento, null si no hay.	Node	para todos
localName	La parte local del nombre cualificado del elemento.	Secuencia	para todos
Nombre	Descripción	Tipo	Disponibilidad
name	El nombre del elemento.	Secuencia	para HTML
namespaceURI	El URI del espacio de nombre de ese nodo, null si no está especificado.	Secuencia	para todos
nextSibling	El nodo inmediatamente posterior al primero dado en el árbol, null si no hay.	Nudo	para todos
nodeName	El nombre del nodo de ese elemento.	Secuencia	para todos
nodeType	Un número que representa el tipo del nodo. Lo mismo que 1 para los elementos DOM.	Número	para todos
nodeValue	El valor del nodo. Lo mismo que null para los elementos DOM.	Secuencia	para todos
offsetHeight	El alto de un elemento, tal cual está escrito en la composición.	Número	para HTML
offsetLeft	La distancia que hay desde el borde izquierdo del elemento al de su offsetParent.	Número	para HTML
offsetParent	El elemento del cual todos los cálculos de distancia son actualmente computados.	Elemento	para HTML
offsetTop	La distancia desde el borde superior del elemento hasta el de su offsetParent.	Número	para HTML
offsetWidth	El ancho de un elemento, tal cual está escrito en la composición.	Número	para HTML
ownerDocument	El documento en el cual está ese nodo, null si no hay.	Documento	para todos
Nombre	Descripción	Tipo	Disponibilidad
parentNode	El elemento original(padre) de ese nodo, null si no hay dentro del documento de DOM.	Nudo	para todos
prefix	El prefijo del espacio de nombre del nodo, null si no está especificado.	Secuencia	para todos
previousSibling	El nodo inmediatamente anterior al primero dado en el árbol , null si no hay.	Nudo	para todos
scrollHeight	Muestra la altura de deslizamiento del elemento.	Número	para HTML
scrollLeft	Obtiene/establece el offset de scroll izquierdo de un elemento.	Número	para HTML
scrollTop	Obtiene/establece el offset de scroll superior de un elemento.	Número	para HTML
scrollWidth	Muestra el ancho de deslizamiento de un elemento.	Número	para HTML
style	Un objeto representando las declaraciones de los atributos de estilo del elemento.	Estilo CSS	para HTML, XUL
tabIndex	Obtiene/establece la posición del elemento en el órden de tabulación.	Número	para HTML
tagName	El nombre de la etiqueta para el elemento dado.	Secuencia	para todos
textContent	Obtiene/establece los contenidos textuales de un elemento y todos sus descendentes.	Secuencia	para todos
Métodos
Nombre y Descripción	Devuelve	Disponible
addEventListener( type, handler, bubble)
Registra un controlador de evento para un tipo de evento específico en un elemento.	-	Todos
appendChild( appendedNode )
Inserta un nodo así como el último nodo hijo de este elemento.	Node	Todos
blur()
Quita el foco del teclado del elemento actual.	-	para HTML, XUL
click()
Simula un clic sobre el elemento actual.	-	para HTML, XUL
cloneNode( deep)
Hace copia de un nudo, y opcionalmente, de todo sus contenidos	Node	para Todos
dispatchEvent( event )
Envía un evento a este nodo en el DOM.	Boolean	Todos
getAttribute( name )
Devuelve el valor de un atributo nombrado desde el nodo actual.	Object	Todos
getAttributeNS (en-US)( namespace, name )
Devuelve el valor del atributo con el nombre especificado, desde el nodo actual.	Object	Todos
getAttributeNode (en-US)( name )
Devuelve la representación del nodo del atributo nombrado desde el nodo actual.	Attr	Todos
getAttributeNodeNS( namespace, name )
Devuelve la representación del nodo del atributo con el nombre especificado, desde el nodo actual.	Attr	Todos
Nombre y Descripción	Devuelve	Disponibilidad
getElementsByTagName( name )
Devuelve un conjunto de todos los elementos descendentes, de un nombre de etiqueta particular, desde el elemento actual.	NodeSet	Todos
getElementsByTagNameNS( namespace, name )
Devuelve un conjunto de todos los elementos descendentes, de un nombre de etiqueta y espacio particular, desde el elemento actual.	NodeSet	Todos
hasAttribute( name )
Verifica si el elemento tiene el atributo especificado o no.	Boolean	Todos
hasAttributeNS (en-US)( namespace, name )
Verifica si el elemento tiene el atributo especificado, en el nombre de espacio especificado o no.	Boolean	Todos
hasAttributes (en-US)()
Verifica si el elemento tiene o no algún atributo.	Boolean	Todos
hasChildNodes()
Verifica si el elemento tiene nodos hijos o no.	Boolean	Todos
insertBefore( insertedNode, adjacentNode )
Inserta el primer nodo antes que el segundo, Nodo hijo en el DOM.	Node	Todos
normalize (en-US)()
Limpia todos los nodos de texto debajo de este elemento (une lo adyacente, quita lo vacío).	-	Todos
removeAttribute( name )
Quita el atributo nombrado desde el nodo actual.	-	All
removeAttributeNS (en-US)( namespace, name )
Quita el atributo con el nombre y nombre de espacio especificado desde el nodo actual.	-	Todos
Nombre y Descripción	Devuelve	Disponibilidad
removeAttributeNode (en-US)( name )
Quita la representación del nodo del atributo nombrado desde el nodo actual.	-	Todos
removeChild( removedNode )
Quita el nodo hijo desde el elemento actual.	Node	Todos
removeEventListener( type, handler )
Quita un oyente de evento desde el elemento.	-	Todos
replaceChild( insertedNode, replacedNode )
Reemplaza un nodo hijo en el elemento actual con otro.	Node	Todos
scrollIntoView( alignWithTop )
Recorre la página hasta que el elemento se obtiene en la vista.	-	HTML
setAttribute( name, value )
Establece el valor de un atributo nombrado desde el nodo actual.	-	Todos
setAttributeNS( namespace, name, value )
Establece el valor del atributo con el nombre y nombre de espacio especificado desde el nodo actual.	-	Todos
setAttributeNode (en-US)( name, attrNode )
Establece la representación del nodo del atributo nombrado desde el nodo actual.	-	Todos
setAttributeNodeNS (en-US)( namespace, name, attrNode )
Establece la representación del nodo del atributo con el nombre y nombre de espacio especificado desde el nodo actual.	-	Todos
Eventos
Son propiedades correspondientes a los atributos del evento "on" en HTML.

A diferencia de los atributos correspondientes, los valores de esas propiedades son funciones (o cualquier otro objeto trabajando con la interfaz EventListener) más bien que una cadena de carácteres. En efecto, asignar un atributo de evento en HTML crea una función envolvente alrededor del código especificado. Por ejemplo, el siguiente HTML:

<div onclick="foo();">clic aquí!</div>
Si element es una referencia a esta div, el valor de element.onclick será:

function onclick(event) {
   foo();
}
El objeto event es pasado al parámetro event de esta función envolvente.

onblur - (al quitar el foco)
Devuelve el código de manejo de evento para el evento blur.
onchange - (al modificar)
Devuelve el código de manejo de evento para el evento change.
onclick - (al hacer clic)
Devuelve el código de manejo de evento para el evento onclick.
ondblclick - (al hacer doble clic)
Devuelve el código de manejo de evento para el evento ondblclick.
onfocus - (al poner el foco)
Devuelve el código de manejo de evento para el evento onfocus.
onkeydown - (al tener una tecla apretada)
Devuelve el código de manejo de evento para el evento onkeydown.
onkeypress - (al apretar una tecla)
Devuelve el código de manejo de evento para el evento onkeypress.
onkeyup - (al soltar una tecla)
Devuelve el código de manejo de evento para el evento onkeyup.
onmousedown - (al tener el botón del ratón apretado)
Devuelve el código de manejo de evento para el evento onmousedown.
onmousemove - (al mover el ratón)
Devuelve el código de manejo de evento para el evento onmousemove.
onmouseout - (al quitar el puntero del ratón)
Devuelve el código de manejo de evento para el evento onmouseout.
onmouseover - (al pasar el ratón encima)
Devuelve el código de manejo de evento para el evento onmouseover.
onmouseup - (al soltar el botón del ratón)
Devuelve el código de manejo de evento para el evento onmouseup.
onresize - (al re-dimensionar la pantalla)
Devuelve el código de manejo de evento para el evento onresize.




*/