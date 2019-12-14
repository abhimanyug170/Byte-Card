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
router.get("/get/custom/:uid", (req, res) => {
    console.log("Custom cards being fetched...");
    const userId = req.params.uid;
    User.findById(userId, (err, foundUser) => {
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
            var card_queries = [];
            var custom_cards = foundUser.otherCards;

            //we can't use the loop with mongoose queries since find is an async function

            // console.log("before for each");
            // cards = custom_cards.forEach(async cardId => {
            //     console.log("inside for each");
            //     const value = await Card.findById(cardId, (err, foundCard) => {
            //         if (err) {
            //             console.error(err);
            //             res.send({
            //                 error: err.message
            //             });
            //             return;
            //         }
            //         else if (foundCard == null);
            //         else {
            //             console.log("found a card", foundCard);
            //             // cards.push(foundCard);
            //             return foundCard;
            //             // console.log("cards : ", cards);
            //         }
            //     });
            //     return value;
            // });

            custom_cards.forEach(cardId => {
                card_queries.push(Card.findById(cardId));
            });

            Promise.all(card_queries)
            .then(cards => cards.filter(card => card!=null))
            .then(() => console.log("Custom cards fetched"))
            .then((cards) => res.send(cards))
            .catch(err => {
                        console.error(err);
                        res.send({
                            error: err.message
                        });
                        return;
                    });
        }
    });
    
});

router.get("/get/professional/:uid", (req, res) => {
  console.log("Professional cards being fetched...");
  const userId = req.params.uid;
  User.findById(userId, (err, foundUser) => {
    if (err) {
      console.error(err);
      res.send({
        error: err.message
      });
      return;
    } else if (foundUser == null) {
      console.error("No user found");
      res.send({
        error: "No user found"
      });
      return;
    } else {
      var card_queries = [];
      var pro_cards = foundUser.professionalCards;

      pro_cards.forEach(cardId => {
        card_queries.push(Card.findById(cardId));
      });

      Promise.all(card_queries)
        .then(cards => cards.filter(card => card != null))
        .then(() => console.log("Professional cards fetched"))
        .then(cards => res.send(cards))
        .catch(err => {
          console.error(err);
          res.send({
            error: err.message
          });
          return;
        });
    }
  });
});

router.get("/get/social/:uid", (req, res) => {
  console.log("Social cards being fetched...");
  const userId = req.params.uid;
  User.findById(userId, (err, foundUser) => {
    if (err) {
      console.error(err);
      res.send({
        error: err.message
      });
      return;
    } else if (foundUser == null) {
      console.error("No user found");
      res.send({
        error: "No user found"
      });
      return;
    } else {
      // var cards = [];
      var card_queries = [];
      var social_cards = foundUser.otherCards;

      social_cards.forEach(cardId => {
        card_queries.push(Card.findById(cardId));
      });

      Promise.all(card_queries)
        .then(cards => cards.filter(card => card != null))
        .then(() => console.log("Social cards fetched"))
        .then(cards => res.send(cards))
        .catch(err => {
          console.error(err);
          res.send({
            error: err.message
          });
          return;
        });
    }
  });
});

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