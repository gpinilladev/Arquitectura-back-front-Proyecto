// Importa el modulo de mongoose
let mongoose = require("mongoose");

// Crea el esquema de chat
let schema = mongoose.Schema;

// Modela el esquema de chat
let chatSchema = schema({
    // chat.ObjectId(): [{
    //     idUserClient: { type: mongoose.Schema.ObjectId, ref: "user" },
    //     idUserProfessional: { type: mongoose.Schema.ObjectId, ref: "user" },
    //     mesaggeChat: String,
    //     idState: { type: mongoose.Schema.ObjectId, ref: "stateMesagges" },
    //     dateCreated: { type: Date, default: Date.now },
    //     dateUpdated: { type: Date, default: Date.now },
    // }],
});

// Exporta el modulo de chat
module.exports = mongoose.model("chat", chatSchema);