// Importa el modulo de mongoose
let mongoose = require("mongoose");

// Crea el esquema de especialidades por usuario profesional
let schema = mongoose.Schema;

// Modela el schema de especialidades por usuario profesional
let specialitiesProfessionalSchema = schema({
    // idSpecialty: ObjectId(), // Auto increment
    nameSpecialty: String,
    descriptionSpecialty: String,
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },  
});

// Exporta el modulo de especialidades por usuario profesional
module.exports = mongoose.model("specialitiesProfessional", specialitiesProfessionalSchema);