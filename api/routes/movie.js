const router = require('express').Router()
const Movie = require("../models/Movie")
const verify = require('../verifyToken');

//Create

router.post("/", verify, async (req, res) => {
    if(req.user.isAdmin){
        const newMovie = new Movie(req.body)

        try {
            const saveMovie = await newMovie.save()
            res.status(201).json(saveMovie)
        }catch(err) {
            res.status(500).json(err)
        }
    } else{
        res.status(403).json("You are not allowed")
    }
})

//Update

router.put("/:id", verify, async (req, res) => {
    if(req.user.isAdmin){
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },
            { new : true}
            )
            res.status(201).json(updatedMovie)
        }catch(err) {
            res.status(500).json(err)
        }
    } else{
        res.status(403).json("You are not allowed")
    }
})

//Delete

router.delete("/:id", verify, async (req, res) => {
    if(req.user.isAdmin){
        try {
            await Movie.findByIdAndDelete(req.params.id);
            res.status(201).json(updatedMovie)
        }catch(err) {
            res.status(500).json(err)
        }
    } else{
        res.status(403).json("You are not allowed")
    }
})


module.exports = router