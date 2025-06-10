const { BookVehicle } = require('../Controller/bookingController');
const router=require('express').Router();

router.get('/bookvehicle',BookVehicle);




module.exports=router;
// g