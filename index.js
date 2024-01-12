const express = require("express");
const app = express();
const mysql = require("mysql");
const config = require("./config.js");

const db = mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.NAME
});

app.post("/create", (req,res) => {
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const pais = req.body.pais;
    const cargo = req.body.cargo;
    const anios = req.body.anios;

    db.query('INSERT INTO empleados(nombre,edad,pais,cargo,anios) VALUES(?,?,?,?,?)', [nombre,edad,pais,cargo,anios],
    (err,result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Empleado registrado con exito!");
        }
    }
    );
});

app.listen(3001, () => {
    console.log("Corriendo en el puerto 3001");
});