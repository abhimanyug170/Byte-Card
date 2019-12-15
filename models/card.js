const Mongoose = require("mongoose");

const User = require("./user");

const cardSchema = new Mongoose.Schema({
    type : String, //PROFESSIONAL, SOCIAL, CUSTOM
    user : {
        type : Mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    attributes : []
});

module.exports = Mongoose.model("Card", cardSchema);
