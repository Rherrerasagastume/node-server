¿Qué sucedió al usar async y await?

Al usar async y await, mi programa se vuelve más claro y legible, ya que permite escribir código asincrónico de una manera que se asemeja a código síncrono. Con async/await, las llamadas a funciones asincrónicas, como las que retornan promesas, pueden esperar a que la promesa se resuelva antes de continuar con la ejecución. Esto elimina la necesidad de anidar llamadas de retorno y simplifica la gestión de errores con try...catch.

¿Qué sucedió al usar el método then()?

Al usar el método then(), mi programa sigue siendo asincrónico, pero el flujo de control se estructura de una manera más "promisificada". En lugar de utilizar palabras clave async y await, utilizas then() para encadenar las acciones que deben ocurrir después de que una promesa se resuelva o rechace. En mi código, esto puede resultar en un código que se asemeja a una serie de llamadas de funciones encadenadas, donde cada then() maneja el resultado de la promesa anterior. Es una forma más antigua de trabajar con promesas y puede ser menos intuitiva para algunos desarrolladores.

¿Qué diferencias encontraste entre async, await y el método then()?

async/await:

Proporciona una forma más clara y legible de escribir código asincrónico, similar al código síncrono.
Permite un flujo de control más lineal y evita la anidación de llamadas de retorno.
Facilita la gestión de errores con try...catch.
Método then():

Sigue siendo asincrónico pero se estructura de una manera más "promisificada".
Se utiliza para encadenar acciones que deben ocurrir después de que una promesa se resuelva o rechace.
Puede dar lugar a una serie de llamadas de funciones encadenadas, lo que puede ser menos intuitivo y más difícil de leer en algunos casos.