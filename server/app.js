const express = require('express');
const app = express();
const conn = require('./db/conn');
const dotenv = require('dotenv');
dotenv.config();
const userRoutes = require('./router/userRouters');
const authRoutes = require('./router/authRouters');


//database connectiongffgfdafds fdfgdgffds 123456 7891011122345
conn();//Some update 11111
app.use(express.json());

app.use('/',express.static(__dirname + '/../client'));
//userRoutes
app.use(userRoutes);


//authRoutes
app.use(authRoutes);


app.listen(process.env.PORT, () => {
    console.log(`server running at http://localhost:${process.env.PORT}`)
});
