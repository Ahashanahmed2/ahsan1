//import external
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//import internal
const path = require('path')
const router = require('./router/routerindex')
const http =require('http')

//configaration
const app = express();
dotenv.config();
app.set('view engine', 'ejs');
app.use('/js',express.static(path.resolve(__dirname, './assets/js')));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
http.createServer(app)


//server
mongoose.connect(process.env.DB,)
    .then(console.log('mongoose connect'))
    .catch(err=>console.log(err))



app.use('/',router)


app.listen(process.env.PORT, (err) => {
    console.log('server conncetnp');
})







