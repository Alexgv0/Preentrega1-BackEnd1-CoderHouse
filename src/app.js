const express = require("express");
const app = express();
const routes = require("./routes");

app.get("/", (req, res) => {
    res.send("Bienvenido a el BackEnd de Kevin Alex Muñoz Pascal");
});

app.use("/api", routes);

module.exports = app;
