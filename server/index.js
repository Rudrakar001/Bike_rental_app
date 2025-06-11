const express=require('express')
const globalroute=require('./Router/globalRoute')
const app=express();
const port =5000;
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Allow requests from React's origin (http://localhost:3000)
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // If using cookies/sessions
  
}));

app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());


app.use("/",globalroute);



app.listen(port,()=>{
    console.log(`server is runnig on port ${port}`)
});