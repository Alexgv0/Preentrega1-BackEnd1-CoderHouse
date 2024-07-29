const express = require("express");
const app = express();
const routes = require("./routes");

app.get('/', (req, res) => {

    res.send("Hola, amor de mi alma");

});

app.use("/api", routes);

app.get('/alex', (req, res) => {

    res.send("Soy el creador del servidor");

});

app.get('/nicol', (req, res) => {

    res.send("Soy la futura esposa del creador del servidor");

});

module.exports = app;
