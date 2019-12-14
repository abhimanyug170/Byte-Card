const Mongoose = require("mongoose");

const userSchema = new Mongoose.Schema({
    professionalCards : [],
    socialCards : [],
    otherCards : [],

    //personal Info
    name: String,
    phone: String,
    email: String,
    address: String,
    thumbnail: {
        type: String,
        default: "https://middle.pngfans.com/20190529/fq/user-icon-png-computer-icons-user-clipart-949894ad0aa0ba2c.jpg"
    },
    status: String, //or role at work
    //social
    instagram: String,
    facebook: String,
    skype: String,
    pinterest: String,
    snapchat: String,
    twitter: String,

    //professional
    linkedIn: String,
    angelList: String,
    workAddress: String
});

module.exports = Mongoose.model("User", userSchema);