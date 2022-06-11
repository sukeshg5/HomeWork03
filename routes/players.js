const express = require("express");

const  players_Act = require("../controllers/players"); 

const router = express.Router();

router.get('/', players_Act.getplayers);
router.get('/getPlayersMostTouchdownsThrown', players_Act.getPlayersMostPasses);
router.get('/getPlayersMostRushingYards', players_Act.getPlayersMostRushingYards);
router.get('/getPlayersLeastRushingYards', players_Act.getPlayersLeastRushingYards);
router.get('/getPlayersSortedMostToFewest', players_Act.getPlayersSortedMostToFewest);
router.get('/getPlayersMostSacks', players_Act.getPlayersMostSacks);

router.get('/:id', players_Act.getspecplayer);
router.post('/', players_Act.createplayer);
router.post('/createMultipleplayer', players_Act.createMultipleplayer);
router.patch('/:id', players_Act.updateplayer);
router.delete('/:id', players_Act.deleteplayer);


module.exports=router;