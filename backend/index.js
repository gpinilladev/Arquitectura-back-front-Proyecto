// Varianles de modulos
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

// Variable para puerto de conexion del backend
let port = process.env.PORT || 3001;

// Variable de la aplicacion
let app = express();

// Conexion a MongoDB
mongoose.connect("mongodb://localhost:27017/bleeringdb", { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
    }, (error, response) => {
        if (error) {
            throw error;
        } else {
            console.log("Servidor DB Mongo: ON - Ejecutandose ...");
            app.listen(port, () => {
                console.log("Servidor backend funcionando en el puerto: " + port);   
            });
        }
    }
);

// Analizar las urls
app(bodyParser.urlencoded({ extended: true }));
app(bodyParser.json());

// Modulo para exportar
module.exports = app;