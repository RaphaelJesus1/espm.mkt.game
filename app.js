"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const wrap = require("express-async-error-wrapper");
const path = require("path");
const ejs = require("ejs");
const app = express();


// Configura o diretório de onde tirar as views (páginas que serão devolvidas
// pelos tratadores das rotas)
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public"), {
    cacheControl: true,
    etag: false,
    maxAge: "30d"
}));
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(require("express-ejs-layouts"));


// ROTAS -------------------------------------------------
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/quiz", wrap(async (req, res) => {
    res.render("quiz");
}));
// ------------------------------------------------------

app.listen(1337, () => {
	console.log("Executando servidor na porta 1337");
});

