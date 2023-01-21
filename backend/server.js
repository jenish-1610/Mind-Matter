const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000
const cors = require('cors')
const userRouter = require('./Routes/userRoutes')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const db_url = process.env.DATABASE_URL;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({extended: true}));


try {
    mongoose.set('strictQuery' , false);
    mongoose.connect(db_url , { useNewUrlParser: true });
} catch (error) {
    console.log('error occured in Database Connection: ' + error);
}

app.use(bodyParser.json())


app.use('/users' , userRouter);

app.listen( port , () => {
    console.log('Server Started');
})