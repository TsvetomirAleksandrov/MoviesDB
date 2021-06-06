const express = require('express');
const router = express.Router();

const { Favorite } = require("../models/Favorite");
const { auth } = require("../middlewares/authentication");

//=================================
//             Subscribe
//=================================

router.post("/getFavorite", (req, res) => {
    console.log(req.body.movieId);

    Favorite.find({ "movieTitle": req.body.movieId })
        .exec((err, favorite) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, favorite })
        })

});

router.post("/favorited", (req, res) => {

    Favorite.find({ "movieTitle": req.body.movieTitle, "userFrom": req.body.userFrom })
        .exec((err, subscribe) => {
            if (err) return res.status(400).send(err)

            let result = false;
            if (subscribe.length !== 0) {
                result = true
            }

            res.status(200).json({ success: true, subcribed: result })
        })
});

router.post("/addToFavorite", (req, res) => {

    console.log(req.body)

    const favorite = new Favorite(req.body);

    favorite.save((err, doc) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({ success: true })
    })
});

router.post("/removeFromFavorite", (req, res) => {

    Favorite.findOneAndDelete({ movieTitle: req.body.movieTitle, userFrom: req.body.userFrom })
        .exec((err, doc) => {
            if (err) return res.status(400).json({ success: false, err });
            res.status(200).json({ success: true, doc })
        })
});

router.post("/getFavoredMovie", (req, res) => {

    Favorite.find({ 'userFrom': req.body.userFrom })
        .exec((err, favorites) => {
            if (err) return res.status(400).send(err);
            return res.status(200).json({ success: true, favorites })
        })
});

module.exports = router;
