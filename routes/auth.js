const express = require('express');

const {signup,signin} = require("../controllers/auth");
const {orgsignup,orgsignin} = require("../controllers/auth");
 
 const {individualSignupValidator,organizationSignupValidator} = require("../validator")

const router = express.Router()


router.post('/signup', individualSignupValidator,  signup )
router.post('/signin' ,  signin )
router.post('/orgsignup', organizationSignupValidator, orgsignup )
router.post('/orgsignin' ,  orgsignin )
module.exports = router;
