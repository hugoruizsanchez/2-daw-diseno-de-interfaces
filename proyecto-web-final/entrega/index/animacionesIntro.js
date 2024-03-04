// INICIO PROGRAMACIÓN DE LA TELEVISIÓN

// Función para cambiar la imagen de la televisión. 
function cambiarImagenTelevision (imagen) {
	imagen_television.src=imagen; 
}

// Programación de los eventos para: mostrar la correspondiente escena en la televisión al hacer hover. 
lista_seccion_videojuegos.addEventListener('mouseover', () => cambiarImagenTelevision("imagenes/tele_videojuegos.gif"))
lista_seccion_emuladores.addEventListener('mouseover', () => cambiarImagenTelevision("imagenes/tele_emuladores.gif"))
lista_seccion_historia.addEventListener('mouseover', () => cambiarImagenTelevision("imagenes/tele_historia.gif"))
lista_seccion_acercade.addEventListener('mouseover', ()=> cambiarImagenTelevision("imagenes/tele_retrorod.gif"))

// Programación de los eventos para: mostrar ruido blanco al soltar el ratón 
lista_seccion_videojuegos.addEventListener('mouseout', () => cambiarImagenTelevision("imagenes/tele_ruidoblanco.gif"))
lista_seccion_emuladores.addEventListener('mouseout', () => cambiarImagenTelevision("imagenes/tele_ruidoblanco.gif"))
lista_seccion_historia.addEventListener('mouseout', () => cambiarImagenTelevision("imagenes/tele_ruidoblanco.gif"))
lista_seccion_acercade.addEventListener('mouseout', () => cambiarImagenTelevision("imagenes/tele_ruidoblanco.gif"))

// Comenzando por defecto con la pantalla con ruido blanco. 
cambiarImagenTelevision ("imagenes/tele_ruidoblanco.gif")

// FIN PROGRAMACIÓN DE LA TELEVISIÓN

// INICIO PROGRAMACIÓN APARICIÓN MENÚ 

// Secuencia de aparición de los elementos del menú en pantalla
setTimeout (function () {
	lista_seccion_videojuegos.style.visibility="visible";
},2500)

setTimeout (function () {
	lista_seccion_emuladores.style.visibility="visible";
},3000)

setTimeout (function () {
	lista_seccion_historia.style.visibility="visible";
},3500)

setTimeout (function () {
	lista_seccion_acercade.style.visibility="visible";
},4000)

// Al finalizar la transición, asignar la opacidad del elemento a 1, para realizar el efecto de aparición programado en el CSS. 

setTimeout (function () {
	imagen_television.style.opacity="1";
},4000)

// FIN PROGRAMACIÓN APARICIÓN MENÚ
