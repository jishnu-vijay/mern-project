const express = require('express')
const env = require('dotenv');
const app = express();

//config variable

env.config();

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on ${process.env.PORT}`);
});