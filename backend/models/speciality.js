// Importa el modulo de mongoose
let mongoose = require("mongoose");

// Crea el esquema de especialidades
let schema = mongoose.Schema;

// Modela el schema de especialidades
let specialitySchema = schema({
    // idSpecialty: ObjectId(), // Auto increment
    nameSpecialty: String,
    descriptionSpecialty: String,
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },  
});

// Exporta el modulo de especialidades
module.exports = mongoose.model("speciality", specialitySchema);