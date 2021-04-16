// Importa el modulo de mongoose
let mongoose = require("mongoose");

// Crea el esquema de archivo
let schema = mongoose.Schema;

// Modela el schema de archivo
let fileSchema = schema({
    // idfile: ObjectId(), // Auto increment
    namefile: String,
    descriptionfile: String,
    urlFile: String,
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },  
});

// Exporta el modulo de archivo
module.exports = mongoose.model("file", fileSchema);