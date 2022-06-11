const express= require('express');
const mongoose= require('mongoose');

const Players= require('../models/playersdata.js');

const router= express.Router();

// • The Player with the most touchdown passes.
const getPlayersMostPasses = async (req, res) => {
    try {
        const players= await Players.find({}).sort({"touchdowns thrown":-1}).limit(1);
        
        res.status(200).json(players);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}
// • The Player with the most rushing yards.
const getPlayersMostRushingYards = async (req, res) => {
    try {
        const players= await Players.find({}).sort({"rushing yards":-1}).limit(1);
        
        res.status(200).json(players);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}
// • The Player with the least rushing yards.
const getPlayersLeastRushingYards = async (req, res) => {
    try {
        const players= await Players.find({}).sort({"rushing yards":1}).limit(1);
        
        res.status(200).json(players);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}
// • A list of players sorted from most to fewest field goals made.
const getPlayersSortedMostToFewest = async (req, res) => {
    try {
        const players= await Players.find({}).sort({"missed field goals":-1});
        
        res.status(200).json(players);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}
// • The Player with the most number of sacks.
const getPlayersMostSacks = async (req, res) => {
    try {
        const players= await Players.find({}).sort({"sacks":-1}).limit(1);

        res.status(200).json(players);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

//end 5 queries

const getplayers = async (req, res) => {
    try {
        const players= await Players.find();
        
        res.status(200).json(players);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getspecplayer = async (req,res) => {
    const id = req.params.id;

    try {
        const player = await Players.findOne({_id: id});

        if (player === null) {
            res.status(200).json("No Record found");
        } else {
            res.status(200).json(player);
        }
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}

const createplayer =  async (req, res) => {
    console.log(req.body);
    const newplayer = new Players({
        "missed field goals": req.body["missed field goals"],
        "catches made":req.body["catches made"],
        "name": req.body["name"],
        "rushing yards": req.body["rushing yards"],
        "touchdowns thrown": req.body["touchdowns thrown"],
        "sacks": req.body["sacks"],
      })
    try {
        await newplayer.save();

        res.status(201).json(newplayer);

    } catch(error) {
        res.status(400).json({ message : error.message});
    }

}

const createMultipleplayer =  async (req, res) => {
    console.log(req.body);
    try {
        const options = { ordered: true };
        const result = await Players.insertMany(req.body, options);
        res.status(201).json(result);

    } catch(error) {
        res.status(400).json({ message : error.message});
    }

}

const updateplayer = async (req, res) => {
    const id= req.params.id;
    try{
        await Players.findOneAndUpdate({
            _id: id,
        },
        {
            "missed field goals": req.body["missed field goals"],
            "catches made":req.body["catches made"],
            "name": req.body["name"],
            "rushing yards": req.body["rushing yards"],
            "touchdowns thrown": req.body["touchdowns thrown"],
            "sacks": req.body["sacks"],
          }
        )
        res.status(202).json({_id: id});

    } catch (error) {
        res.status(401).json({message: error.message});
    }
    
}

const deleteplayer = async (req, res) => {
    const id= req.params.id;

    try {
        await Players.findOneAndRemove({_id: id});
        res.status(203).json({_id:id});

    }catch(error) {
        res.status(402).json({message: error.message});
    }
}

module.exports.getplayers= getplayers;
module.exports.createplayer= createplayer;
module.exports.createMultipleplayer= createMultipleplayer;
module.exports.getspecplayer= getspecplayer;
module.exports.updateplayer= updateplayer;
module.exports.deleteplayer= deleteplayer;

module.exports.getPlayersMostPasses= getPlayersMostPasses;
module.exports.getPlayersMostRushingYards= getPlayersMostRushingYards;
module.exports.getPlayersLeastRushingYards= getPlayersLeastRushingYards;
module.exports.getPlayersSortedMostToFewest= getPlayersSortedMostToFewest;
module.exports.getPlayersMostSacks= getPlayersMostSacks;