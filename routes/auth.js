const express = require('express');

const {signup,signin,signout} = require("../controllers/auth");
const {orgsignup,orgsignin,orgsignout} = require("../controllers/auth");
 
 const {individualSignupValidator,organizationSignupValidator} = require("../validator")

const router = express.Router()


router.post('/signup', individualSignupValidator,  signup )
router.post('/signin' ,  signin )
router.post('/signout',signout)

router.post('/orgsignup', organizationSignupValidator, orgsignup )
router.post('/orgsignin' ,  orgsignin )
router.post('/orgsignout',orgsignout)

module.exports = router;
