// Importacion del modulo de mongoose
let mongoose = require("mongoose");

// Crear schema del tipo de documento
let schema = mongoose.Schema;

// Modelado del esquema de tipo de documento
let documentTypeSchema = schema({
    // idDocumentType: ObjectId(), // Auto increment
    nameDocumentType: String,
    descriptionDocumentType: String,
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },
});

// Exportamos el modulo de tipo de documento
module.exports = mongoose.model("documentType", documentTypeSchema);