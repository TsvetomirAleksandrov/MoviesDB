const express = require('express');
const router = express.Router();
const { Rating } = require("../models/Rating");
const { auth } = require("../middlewares/authentication");

//=================================
//             Subscribe
//=================================

router.post("/saveRating", auth, (req, res) => {

    const rating = new Rating(req.body)

    if (req.body.content !== "" && req.body.content !== null) {
        
        rating.save((err, rating) => {
            console.log(err)
            if (err) return res.json({ success: false, err })

            Rating.find({ '_id': rating._id })
                .populate('writer')
                .exec((err, result) => {
                    if (err) return res.json({ success: false, err })
                    return res.status(200).json({ success: true, result })
                })
        })
    } else {
        console.log(`req body cannot be empty or null`);
    }
})

router.post("/getRating", (req, res) => {

    Rating.find({ "movieId": req.body.movieId })
        .populate('writer')
        .exec((err, rating) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, rating })
        })
});

module.exports = router;