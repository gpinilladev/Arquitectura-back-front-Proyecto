// Importa el modulo de mongoose
let mongoose = require("mongoose");

// Crea el esquema de conversacion
let schema = mongoose.Schema;

// Modela el schema de conversacion
let conversationSchema = schema({
    // conversation.ObjectId(): [{
    //     idUserClient: { type: mongoose.Schema.ObjectId, ref: "user" },
    //     idUserProfessional: { type: mongoose.Schema.ObjectId, ref: "user" },
    //     dateCreated: { type: Date, default: Date.now },
    //     dateUpdated: { type: Date, default: Date.now },
    //     chats: [{
    //         idChat: { type: mongoose.Schema.ObjectId, ref: "chat" },
    //         idState: { type: mongoose.Schema.ObjectId, ref: "stateMesagges" },
    //     }]
    // }] 
});

// Exporta el modulo de conversacion
module.exports = mongoose.model("conversation", conversationSchema);