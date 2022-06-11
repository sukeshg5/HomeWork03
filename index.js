const express= require('express');
const mongoose= require('mongoose');
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

const port=9000;
const url= "mongodb://localhost:27017/GreenBay?readPreference=primary&serverSelectionTimeoutMS=2000&appname=MongoDB%20Compass&directConnection=true&ssl=false";

mongoose.connect(url,{useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

const playersrouter= require("./routes/players");
app.use('/players',playersrouter)



app.listen(port, () =>{
    console.log('Server started');
})

