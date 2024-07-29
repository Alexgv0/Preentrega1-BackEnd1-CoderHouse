const app = require("./src/app");
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`
        Servidor escuchando en el puerto: ${PORT}.
        Puedes acceder en el siguiente enlace: http://localhost:${PORT}
    `);
});
