const { SignUp,Login } = require('../Controller/AuthController');
const router=require('express').Router();

router.post('/signup',SignUp);
router.post('/login',Login);




module.exports=router;
// a