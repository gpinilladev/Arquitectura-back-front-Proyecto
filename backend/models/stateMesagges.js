// Importa el modulo de mongoose
let mongoose = require("mongoose");

// Crea el esquema de estado mensaje
let schema = mongoose.Schema;

// Modela el schema de estado mensaje
let stateMesaggesSchema = schema({
    // idStateMesagges: ObjectId(), // Auto increment
    nameStateMesagges: String,
    descriptionStateMesagges: String,
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },  
});

// Exporta el modulo de estado mensaje
module.exports = mongoose.model("stateMesagges", stateMesaggesSchema);