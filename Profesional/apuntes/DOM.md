### DOM:
Representacion del documento del HTML (todo el html)
Cuando termina de procesar todo el index.html ocurre el DOMContentLoaded
![DOM](https://gblobscdn.gitbook.com/assets%2F-LlTyKe9xd6RJ6x5f2-z%2F-LpJD_gOuEHVDVAUJeUX%2F-LnAt4WvAC2p0YUSAQfN%2FScreenshot_5.png?alt=media)

> A partir de este punto tenemos la garantía de que todo nuestro documento se ha cargado.

#
---
#
#### SCRIPT EMBEBIDO

Provoca que el navegador detenga el proceso de carga hasta que todo el código que esté dentro de ese script se ejecute por completo. Pasaría algo así:

![](https://gblobscdn.gitbook.com/assets%2F-LlTyKe9xd6RJ6x5f2-z%2F-LpJD_gOuEHVDVAUJeUX%2F-LnAtEMrCVRrSCCDCqSz%2FScreenshot_8.png?alt=media)

> Cuando el DOM se este porcesando va a detener todo el procedimiento del HTML y no se va a correr nada, hasta que ese script se ejecute

Para evitar errores ponemos el script antes de cerrar la etiqueta `</body>`

#
---
#
#### SCRIPT EXTERNO
Le damos al atributo [src]() un atributo de internet o un path local y cuando se ejecute sucede lo mismo excepto que añadimos el paso del [fetch]() (la peticion) 
> Cuando se cumplio todo el script se sigue ejecutando

![](https://gblobscdn.gitbook.com/assets%2F-LlTyKe9xd6RJ6x5f2-z%2F-LpJD_gOuEHVDVAUJeUX%2F-LnAtOf3C_MzB_roSVQ4%2FScreenshot_11.png?alt=media)

#
---
#
#### SCRIPT EXTERNO CON ASYNC
Al tener un atributo async al script externo, sigue ejecutandose todo incluso cuando el script fetching esta ocurriendo, ocurre asincronamente, sin detener el procesamiento del DOM.
> Si tenemos el [src]() cargado, el HTML se va a deterner y se va a cargar el script hasta que se acabe y da paso a que siga la ejecucion del DOM.

![](https://gblobscdn.gitbook.com/assets%2F-LlTyKe9xd6RJ6x5f2-z%2F-LpJD_gOuEHVDVAUJeUX%2F-LnAtRdn_jIHyGbuaeKG%2FScreenshot_12.png?alt=media)

#
---
#
#### SCRIPT EXTERNO CON DEFER
Defiere la ejecucion de JS hasta el final del procesamiento
del HTML, la peticion ocurre asincronamente sin detener el DOM
pero la ejecucion ocurre al final

![](https://gblobscdn.gitbook.com/assets%2F-LlTyKe9xd6RJ6x5f2-z%2F-LpJD_gOuEHVDVAUJeUX%2F-LnAtaXWPuWvqqnOHMzc%2FScreenshot_14.png?alt=media)

> Es similar al async ya que funciona asíncronamente sin detener el HTML

#
---
#
#### ¿ 2 SCRIPTS ASINCRONOS ?
Supongamos que tenemos dos scripts, uno grande y uno pequeño, ambas peticiones salen pero no se contestan en el mismo orden, cuando se contesta un script se ejecuta inmediatamente, se detiene el procesamiento del HTML y aunque la peticion del grande continua, el del pequeño ya termino...

![](https://gblobscdn.gitbook.com/assets%2F-LlTyKe9xd6RJ6x5f2-z%2F-LpJD_gOuEHVDVAUJeUX%2F-LnAtYruZmqR50cusYm3%2FScreenshot_13.png?alt=media)

> Nota: No es necesario poner async o defer en los scripts si estos se ubican al final del body