/*
JS es un lengusje de programacion asincrono y no bloqueante
con un 

EVENT LOOP: 
maneja los eventos en un unico hilo 
para sus interfaces de entrada y salida

ASINCRONISMO: Accion que no ocurre al mismo tiempo

MEMORY GIT: Espacio en memoria compartido para toda la app

PILA DE EJECUCION (CALL STACK): 
donde las funciones van a ser puestas en ejecucion

COLA DE TAREAS: 
donde se van a almacenar los llamados a funciones (callback)

CALLBACKS:
Es una funcion que al crearla le pasamos como parametro
una segunda funcion, y al hacer un llamado asincrono 
esta se ejecuta despues de ese llamado

NOTA:
Solo puede haber una ejecucion (en curso) en la pila de ejecucion (CALL STACK)
y las funciones en espera quedaran en la cola de tareas hasta
que el event loop vea que puede liberar la cola de tareas
EVENT LOOP maneja y controla el paso de espera y de ejecucion
segun el codigo

- - - VENTAJAS - - -

CALLBACKS: 
Nos permite garantizar que tenemos una funcion que recibe otra funcion
y va a ejecutarse sin problemas. No hay complejidad. Son universales, 
cualquier navegador

PROMESAS:
Son enlazables, permite tener una gran capacidad 
para trabajar asincronismo

ASYNC - AWAIT
Try - catch / Son mas faciles de leer

- - - DESVENTAJAS - - -

CALLBACKS: 
Composicion tosca por la estructura porque llegariamos
al concepto de callback hell
Flujo poco intuitivo


PROMESAS:
No maneja excepciones sino que tenemos un catch al final
Requiere un polyfill para funcionar en todos los nav (Babel)

ASYNC - AWAIT:
Esperar por cada uno de los llamados

*/
