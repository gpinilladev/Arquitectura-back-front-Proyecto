// Importacion del modulo mongoose
let mongoose = require("mongoose");

// Creacion del esquema de pais
let schema = mongoose.Schema;

// Modelado del esquema Pais
let countrySchema = schema({
    // idCountry: ObjectId(), // Auto increment
    nameCountry: String,
    flagCountry: String,
    latitudeCountry: String,
    longitudeCountry: String,
    descriptionCountry: String,
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },
});

// Exportamos el modulo de pais
module.exports = mongoose.model("country", countrySchema);