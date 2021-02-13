const express = require('express');

const {signup} = require("../controllers/auth");
const {orgsignup} = require("../controllers/auth");
 
 const {individualSignupValidator,organizationSignupValidator} = require("../validator")

const router = express.Router()


router.post('/signup', individualSignupValidator,  signup )
router.post('/orgsignup', organizationSignupValidator, orgsignup )

module.exports = router;
