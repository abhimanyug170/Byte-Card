const express = require("express");
const router = express.Router();

const User = require("../models/user.js");
const Card = require("../models/card.js");

//create
router.post("/create", (req, res) => {
    //input : {userId, attributes:[], type}
    const data = req.body;//form encoded
    const type = data.type;
    const userId = data.user;
    User.findById(userId, (err, foundUser) => {
        if (err) {
            console.error(err);
            res.send({
                error: err.message
            });
            return;
        }
        else if (foundUser == null) {
            console.error("No user found");
            res.send({
                error: "No user found"
            });
            return;
        }
        else {
            console.error("User found");
            console.log(data);
            Card.create(data, (err, createdCard) => {
                if(err){
                    console.error(err);
                    res.send({
                        error: err.message
                    });
                    return;
                }
                else if(createdCard == null){
                    console.error("Unable to create card");
                    res.send({
                        error: "Unable to create card"
                    });
                    return;
                }
                else{
                    const cardId = createdCard._id;
                    foundUser.personalCards.push(cardId);

                    //because these cards belong to the user 
                    // if (type == "PROFESSIONAL") {
                    //     foundUser.professionalCards.push(cardId);
                    // }
                    // else if (type == "CUSTOM") {
                    //     foundUser.otherCards.push(cardId);
                    // }
                    // else if(type == "SOCIAL"){
                    //     foundUser.socialCards.push(cardId);
                    // }
                    // else{
                    //     foundUser.professionalCards.push(cardId);
                    // }

                    foundUser.save();

                }
                console.log("Card Created");
                res.send(createdCard);
                return;
            });
        }
    })
});

//read
router.get("/get/custom/:uid", async(req, res) => {
    console.log("Custom cards being fetched...");
    const userId = req.params.uid;
    User.findById(userId, async(err, foundUser) => {
        if(err){
            console.error(err);
            res.send({
                error: err.message
            });
            return;
        }
        else if(foundUser == null){
            console.error("No user found");
            res.send({
                error: "No user found"
            });
            return;
        }
        else{
            // var cards = [];
            const custom_cards = foundUser.otherCards;
            console.log("before for each");
            cards = custom_cards.map(async cardId => {
                console.log("inside for each");
                const value = await Card.findById(cardId, (err, foundCard) => {
                    if (err) {
                        console.error(err);
                        res.send({
                            error: err.message
                        });
                        return;
                    }
                    else if (foundCard == null);
                    else {
                        console.log("found a card", foundCard);
                        // cards.push(foundCard);
                        return foundCard;
                        // console.log("cards : ", cards);
                    }
                });
                return value;
            });
            console.log("cards array : ", cards);
            console.log("Custom cards send...");
            res.send(cards);
            return;
        }
    });
    
});

// router.get("/get/professional/:uid", (req, res) => {
//     const userId = req.params.uid;
//     const cards = [];
//     User.findById(userId, (err, foundUser) => {
//         const pro_Cards = foundUser.professionalCards;
//         pro_Cards.forEach(cardId => {
//             Card.findById(cardId, (err, foundCard) => {
//                 if (err) {
//                     console.error(err);
//                     res.send({
//                         error: err.message
//                     });
//                     return;
//                 }
//                 else if (foundCard == null) {
//                     // continue;
//                 }
//                 else {
//                     cards.push(foundCard);
//                 }
//             });
//         });
//     });
//     res.send(cards);
//     return;
// });

// router.get("/get/social/:uid", (req, res) => {
//     const userId = req.params.uid;
//     const cards = [];
//     User.findById(userId, (err, foundUser) => {
//         const social_cards = foundUser.socialCards;
//         social_cards.forEach(cardId => {
//             Card.findById(cardId, (err, foundCard) => {
//                 if (err) {
//                     console.error(err);
//                     res.send({
//                         error: err.message
//                     });
//                     return;
//                 }
//                 else if (foundCard == null) {
//                     // continue;
//                 }
//                 else {
//                     cards.push(foundCard);
//                 }
//             });
//         });
//     });
//     res.send(cards);
//     return;
// });

router.get("/get/personal/:uid", (req, res) => {
    const userId = req.params.uid;
    Card.find({user : userId}, (err, foundCards) => {
        if (err) {
            console.error(err);
            res.send({
                error: err.message
            });
            return;
        }
        else if (foundCards == null) {
            res.send([]);
            return;
        }
        else {
            res.send(foundCards);
            return;
        }
    });
});


//share
//todo:test this
router.post("/share", (req,res) => {
    console.log("sharing card ...");
    const data = req.body;
    const userId = data.user;
    const cardId = data.cardId;
    const type = data.type;

    User.findById(userId, (err, foundUser) => {
        if (err) {
            console.error(err);
            res.send({
                error: err.message
            });
            return;
        }
        else if (foundUser == null) {
            console.error("No user found");
            res.send({
                error: "No user found"
            });
            return;
        }
        else {

            console.log("user found");
            if (type == "PROFESSIONAL") {
                foundUser.professionalCards.push(cardId);
            }
            else if (type == "CUSTOM") {
                foundUser.otherCards.push(cardId);
            }
            else if(type == "SOCIAL"){
                foundUser.socialCards.push(cardId);
            }
            else{
                foundUser.professionalCards.push(cardId);
            }

            foundUser.save();
            res.send({
                status:"SHARED"
            })
        }
    });

});

//edit
//todo:test this
router.put("/edit", (req,res) => {
    const data = req.body;
    const attributes = data.attributes;
    const cardId = data.cardId;

    Card.find(cardId, (err, foundCard) => {
        if (err) {
            console.error(err);
            res.send({
                error: err.message
            });
            return;
        }
        else if (foundCard == null) {
            console.error("Unable to find card");
            res.send({
                error: "Unable to find card"
            });
            return;
        }
        else {
           foundCard.attributes = attributes;
           foundCard.save();
           res.send({
               status : "UPDATED"
           });
           return;
        }
    });

})


module.exports = router;