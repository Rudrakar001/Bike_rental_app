const globalroute=require('express').Router();

const BookingRoute=require('./bookingRoute');


globalroute.use('/booking',BookingRoute);


module.exports= globalroute;
// a