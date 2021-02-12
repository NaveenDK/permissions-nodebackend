const express = require('express');

const {signup} = require("../controllers/auth");
const {orgsignup} = require("../controllers/auth");
 
 

const router = express.Router()


router.post('/signup',  signup )
router.post('/orgsignup',  orgsignup )

module.exports = router;
