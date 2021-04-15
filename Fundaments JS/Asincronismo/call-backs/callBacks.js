/*

¿Cómo JS ejecuta código asíncrono?

JS solo puede hacer una tarea a la vez sin importar tus nucleos en la CPU
JS delega la ejecucion de funciones a otros procesos (modelo de concurrencia = event loop)
JS tiene una pila de ejecucion donde pone las llamadas a funciones segun el orden
Si una funcion llama a otra, esta se agrega a la pila, cuando la termina de ejecutar, la bota
Un callback es una ejecucion que se ejecutara cuando regrese la respuesta del servidor
Cola de tareas: Aqui paran las peticiones a servidores, interacciones visuales, navegacion o eventos
Cuando llegue la respuesta se almacenara en la cola de tareas, aqui se encolan segun el orden
Por eso NO hay que llenar muchas tareas alli, debido a que las funciones tardaran mucho tiempo en ejecutarse
*/