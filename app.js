const path = require("path")
const ejs = require("ejs");
const express = require("express");
const app = express();

// Explica para o express qual será o diretório de onde serviremos os
// arquivos estáticos (js, css, imagens etc...)
app.use(express.static(path.join(__dirname, "public"), {
    cacheControl: true,
    etag: false,
    maxAge: "30d"
}));

// Configura o diretório de onde tirar as views
app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");
app.use(require("express-ejs-layouts"));

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(1337);