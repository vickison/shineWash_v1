const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bordyparser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

//log request
app.use(morgan('tiny'));

//MongoDB connection
connectDB();

//parser request
app.use(bordyparser.urlencoded({extended: true}));

//set view
app.set("view engine", "ejs")

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))


//load routes
app.use('/', require('./server/routes/router'));

app.listen(PORT, ()=>{console.log(`Application is running on http://localhost:${PORT}`);})