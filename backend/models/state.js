// Importacion del modulo de mongoose
let mongoose = require("mongoose");

// Crear esquema de estados
let schema = mongoose.Schema;

// Modelado del esquema de estados
let stateSchema = schema({
    // idState: ObjectId(), // Auto increment
    nameState: String,
    descriptionState: String,
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },  
});

// Exporta el modulo de estados
module.exports = mongoose.model("state", stateSchema);