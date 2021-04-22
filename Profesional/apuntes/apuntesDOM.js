/*

DOM:
Representacion del documento del HTML (todo el html)

Cunado termina de procesar todo el index.html ocurre
el DOMContentLoaded

SCRIPTS EXTERNOS O EMBEBIDOS
Son un elemento

(Codigo) SCRIPT EMBEBIDO, cuando el DOM se este porcesando va 
a detener todo el procedimiento del HTML y no se va a 
correr nada, hasta que ese script se ejecute

Para evitar errores poner el script antes de cerrar body

(Codigo) SCRIPT EXTERNO, le damos al atributo src un atributo de internet o un path local
y cuando se ejecute sucede lo mismo excepto que añadimos el paso
del ftech (la peticion) cunado se cumplio todo el script se sigue ejecutando

SCRIPT EXTERNO CON ASYNC
Al tener un atributo async al script esterno, sigue ejecutandose 
todo incluso cuando el script fetching esta ocurriendo, ocurre
asincronamente, sin detener el procesamiento del DOM.
Si tenemos el src cargado el html se va a deterner y se va
a cargar el script hasta que se acabe y sigue la ejecucion del DOM

SCRIPT EXTERNO CON DEFER
Defiere la ejecucion de JS hasta el final del procesamiento
del HTML, la peticion ocurre asincronamente sin detener el DOM
pero la ejecucion ocurre al final

¿2 SCRIPTS ASINCRONOS?
Uno grande y uno pequeño, ambas peticiones salen pero se 
contestan en el mismo orden, cunado se contesta un script se 
ejecuta inmediatamente, se detiene el porcesamiento del HTML y aunq 
la peticion del grande continua, el del pequeño ya termino...

Nota: No es necesario poner asunc o defer en los scripts si 
estos se ubican al final del body

*/