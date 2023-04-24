require('dotenv').config(); //to save sensitive information on .env file
const express= require('express');
const cors= require('cors');
require('./db/conn')  //connect to DB
const app= express();

const PORT= process.env.PORT || 8000;

// app.options('*', cors())
app.use(cors({credentials: false, origin: "*"}));
app.use(express.json())  //to get data from user as json format
const router = require('./router/auth');
app.use(router);  //all restAPi calls

app.listen(PORT,'0.0.0.0',()=>{
    const keyword= new RegExp("curology",'i');
    console.log('Connected to port '+PORT);
    const Ads= require('./model/adsSchema');
    
})