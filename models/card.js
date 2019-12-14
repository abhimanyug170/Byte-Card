const Mongoose = require("mongoose");

const cardSchema = new Mongoose.Schema({
    type : String, //PROFESSIONAL, SOCIAL, CUSTOM
    user : Mongoose.Schema.Types.ObjectId,
    attributes : []
});

module.exports = Mongoose.model("Card", cardSchema);
