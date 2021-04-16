// Importa el modulo de mongoose
let mongoose = require("mongoose");

// Crea esquema de agenda
let schema = mongoose.Schema;

// Modela el esquema de agenda
let scheduleSchema = schema({
    idSchedule: ObjectId(), // Auto increment
    nameSchedule: String,
    dateStartSchedule: { type: Date },
    dateEndSchedule: { type: Date },
    subjectSchedule: String,
    idUserClient: { type: mongoose.Schema.ObjectId, ref: "user" },
    idUserProfessional: { type: mongoose.Schema.ObjectId, ref: "user" },
    idCountry: { type: mongoose.Schema.ObjectId, ref: "country" },
    idCity: { type: mongoose.Schema.ObjectId, ref: "city" },
    locationAddress: String,
    locationLatitude: String,
    locationLongitude: String,
    descriptionSchedule: String,
    files:[
        {
            idFile: { type: mongoose.Schema.ObjectId, ref: "file" },
        }
    ],
    dateCreated: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },  
});

// Exporta el modulo de agenda
module.exports = mongoose.model("schedule", scheduleSchema);