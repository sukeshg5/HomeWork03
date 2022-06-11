const mongoose =require('mongoose');

const playersSchema = mongoose.Schema({
    "name": {
        type: String,
        required: true,
    },
    "rushing yards": {
        type: Number,
         
    },
    "touchdowns thrown": {
        type: Number,
       
    },
    "sacks": {
        type: Number,
       
    },
    "missed field goals": {
        type: Number,
        
    },
    "catches made": {
        type: Number,
        
    },

})

var playersdata=mongoose.model('players',playersSchema);
module.exports= playersdata;