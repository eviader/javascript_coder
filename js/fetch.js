fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "post",
    body: JSON.stringify({
        title: "Conectado con exito a la API",
        body: "Este es un mensaje de prueba de conexion",
        id: 1
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})
.then((response) => response.json())
.then((data) => {
    alertas(data.title);
});
