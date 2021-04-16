// Importacion del modulo mongoose
let mongoose = require("mongoose");

// Crear esquema del usuario
let schema = mongoose.Schema;

// Modelado del esquema
let userSchema = schema({
    // idUser: ObjectId(), // Auto increment
    photo: { type: mongoose.Schema.ObjectId, ref: "file" },
    firstName: String,
    lastName: String,
    idDocumentType: { type: mongoose.Schema.ObjectId, ref: "documentType" },
    documentNumber: String,
    birthDate: { type: Date },
    phoneNumber: String,
    email: String,
    address: String,
    idCountry: { type: mongoose.Schema.ObjectId, ref: "country" },
    idCity: { type: mongoose.Schema.ObjectId, ref: "city" },
    idProfile: { type: mongoose.Schema.ObjectId, ref: "profile" },
    idState: { type: mongoose.Schema.ObjectId, ref: "state" },
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },
    pass: String,
});

// Exportamos el modelo usuarios
module.exports = mongoose.model("user", userSchema);