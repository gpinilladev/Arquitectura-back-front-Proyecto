// Importamos el modulo de mongoose
let mongoose = require("mongoose");

// Creamos el esquema de perfiles
let schema = mongoose.Schema;

// Modelamos el esquema de perfiles
let profileScheme = schema({
    // idProfile: ObjectId(), // Auto increment
    nameProfile: String,
    descriptionProfile: String,
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },
});

// Exportamos el modulo de perfiles
module.exports = mongoose.model("profile", profileScheme);