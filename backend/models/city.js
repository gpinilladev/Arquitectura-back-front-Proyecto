// Importacion del modulo de mongoose
let mongoose = require("mongoose");

// Creacion del esquema de ciudad
let schema = mongoose.Schema;

// Modelado del esquema de ciudad
let citySchema = schema({
    // idCity: ObjectId(), // Auto increment
    idCountry: { type: mongoose.Schema.ObjectId, ref: "country" },
    nameCity: String,
    latitudeCity: String,
    longitudeCity: String,
    descriptionCity: String,
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },
});

// Exportamos el modulo de ciudad
module.exports = mongoose.model("city", citySchema);