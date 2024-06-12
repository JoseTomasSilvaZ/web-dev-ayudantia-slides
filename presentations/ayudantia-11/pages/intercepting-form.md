### Interceptando el envío de un formulario
Dado que nuestra API sólo se encargará de enviarnos información, ahora nosotros tenemos que realizar acciones ante la respuesta de esta a nuestra solicitud (por ejemplo, enviar al usuario a otra página, actualizar la página en la que estamos, mostrar un error, o cualquier otro).

<div class='grid grid-cols-2 gap-10'>

```html
<form id='login-form'>
    <input type='email' name='email' id='email' required/>
    <input type='password' name='password' id='password' required/>
    <button type='submit'>Iniciar sesión</button>
</form>
<!-- Importamos nuestro archivo de js que se encarga de 
interceptar el envío -->
<script src='../scripts/login.js'></script>
```


```js
//scripts/login.js
const form = document.getElementById('login-form')
form.addEventListener('submit', event => {
    event.preventDefault()
    const formData = new FormData(form).entries()

    fetch('http://localhost:3000/api/v1/auth/login', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
    }).then(response => response.json())
    .then(data => {
        if(data.ok) {
            return window.location.href = '/admin/productos.html'
        }
        // Acá la lógica para el error
    })
}) 
```

</div>