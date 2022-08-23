const express = require ('express');
const bodyPasser = require ('body-parser');


// configuration du chemin vers .env //
require('dotenv').config({path: './config/.env'});

// appel de la config db //
const mongoose = require ("./config/db");
const app = express();

// initialisation de express et bodypasser // 
app.use(express.json());
app.use(bodyPasser.json());
app.use(bodyPasser.urlencoded({extended: true}));


// server //
app.listen(process.env.PORT, () =>{
    console.log(`listening on port ${process.env.PORT}`);
})


