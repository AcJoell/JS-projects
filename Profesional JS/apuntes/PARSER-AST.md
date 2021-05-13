## ¿Qué hace un JS Engine?

#

- Recibe código fuente
- Parsea el código y produce un Abstract Syntax Tree (AST)
- Se compila a byte code y se ejecuta
- Se optimiza a machine code y se reemplaza el código base

#

---

#

Este es el proceso que realiza JavaScript para lograr ejecutar su código de la mejor forma posible.

#

![](https://gblobscdn.gitbook.com/assets%2F-LlTyKe9xd6RJ6x5f2-z%2F-LpJD_gOuEHVDVAUJeUX%2F-LoBMn-8Q8TceF9mxDoZ%2FScreenshot_10.png?alt=media)

#

- **Bytecode:** es un código de más bajo nivel que permite que se ejecute mucho más rápido.
- **Profiling data:** encuentra todos los puntos optimizables del código para luego dar paso al optimizer compiler
- Optimized code

#

---

#

## ¿Qué hace un parser?

#

Agarra tu codigo fuente y lo lee, pero antes lo descompone, al resultado se le llama **tokens**, estos identifican tu código y lo convierten en **AST**

#

![](https://gblobscdn.gitbook.com/assets%2F-LlTyKe9xd6RJ6x5f2-z%2F-LpJD_gOuEHVDVAUJeUX%2F-LoBMwAgrV-aWtsbRwjx%2FScreenshot_12.png?alt=media)

> Nota: `SystaxError` es lanzado cuando el motor de JS se encuentra con partes de código que no forman parte de la sintaxis del lenguaje al momento de analizar el código

#

![](https://gblobscdn.gitbook.com/assets%2F-LlTyKe9xd6RJ6x5f2-z%2F-LoBMLhD1_J2PtZzvrDo%2F-LoBN0Y_a0Moc2i_Vocu%2FScreenshot_13.png?alt=media&token=fbf8b78c-6af5-4904-98b9-794f320a4daa)

#

---

#

## Parser de V8

Hay dos modos de hacer `Parsing`

#

![](https://gblobscdn.gitbook.com/assets%2F-LlTyKe9xd6RJ6x5f2-z%2F-LpJD_gOuEHVDVAUJeUX%2F-LoBN4CAxmGYvGfV_Gp0%2FScreenshot_14.png?alt=media)

#

---

#

## Tokens

Te compartiré un link donde puedes experimentar con los tokens para ver cómo funciona.
- [Tokens | Demo](https://esprima.org/demo/parse.html)

#

Acción a ejecutar...

```js
var answer = 6 * 7;
```

Resultado del Token...

```sh
[
    {
        "type": "Keyword",
        "value": "var"
    },
    {
        "type": "Identifier",
        "value": "answer"
    },
    {
        "type": "Punctuator",
        "value": "="
    },
    {
        "type": "Numeric",
        "value": "6"
    },
    {
        "type": "Punctuator",
        "value": "*"
    },
    {
        "type": "Numeric",
        "value": "7"
    },
    {
        "type": "Punctuator",
        "value": ";"
    }
]
```

#

---

#

## Abstract Syntax Tree (AST)

Es una estructura en forma de arbol, descomponiendo en partes nuestro código

![](https://gblobscdn.gitbook.com/assets%2F-LlTyKe9xd6RJ6x5f2-z%2F-LoBMLhD1_J2PtZzvrDo%2F-LoBN86xTwwuf5tX7KfZ%2FScreenshot_15.png?alt=media&token=194427bf-c15b-4884-96ee-cb56bb2f8a63)

> Todo se hace siguiendo los `tokens` que produjo el `parser`

Esto se usa para transformar código de una forma a otra

- [AST | Example](https://astexplorer.net/)

Allí veremos como se va ramificando nuestro programa y va haciéndolo en forma de patrón anidado profundo, aparece valores que nuestro programa terminará ejecutando.

#

---

#

## PARSER-AST en práctica

Vamos a usar el AST para crear una regla de eslint, este analizará estéticamente nuestro código a ver si hay que levantar un warning por violar la sintaxis.

### Test

En el **link** de **AST Explorer** ya tenemos un código escrito. Donde el la primera entrada tenemos las tareas que debe cumplir nuestro **fixer**.

```js
const pi = 3.1415;
const half_pi = 1.57075;
// variable constantes
// variables que guarden un numero
// El nombre de la variable tiene que estar en UPPERCASE
```

A la derecha tenemos el **AST** completo con todas estas declaraciones. Luego implementamos una función que recibe la declaración de la variable y accedemos a los datos que nos ofrece el **AST** para lograr cumplir con los requerimientos de nuestro solucionador.

```sh
export default function(context) {
  return {
    VariableDeclaration(node) {
        // tipo de variable const
          if (node.kind === "const") {
          const declaration = node.declarations[0];

          // asegurarnos que el valor es un numero
          if (typeof declaration.init.value === "number") {
            if (declaration.id.name !== declaration.id.name.toUpperCase()) {
              context.report({
                node: declaration.id,
                message: "El nombre de la constante debe estar en mayúsculas",
                fix: function(fixer) {
                  return fixer.replaceText(declaration.id, declaration.id.name.toUpperCase())
                }
              })
            }
          }
        }
    }
  };
};
```
Con `context.report()` podemos mandar un warning y además podemos solucionar el problema que se haya presentado.