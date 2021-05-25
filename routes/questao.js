"use strict";
const express = require("express");
const wrap = require("express-async-error-wrapper");
const Questao = require("../models/questao");

const router = express.Router();

router.get("/", wrap(async (req, res) => {
    let lista = JSON.stringify(await Questao.listar());
   
    res.render("index", { lista: lista });

}));

module.exports = router;