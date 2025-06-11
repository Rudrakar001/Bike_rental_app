const globalroute=require('express').Router();

const Authroute=require('./Authentication');


globalroute.use('/auth',Authroute);


module.exports= globalroute;
// a