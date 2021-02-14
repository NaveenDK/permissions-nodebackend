const express = require('express');

const {signup,signin,signout, forgotPassword,
    resetPassword} = require("../controllers/auth");
const {orgsignup,orgsignin,orgsignout} = require("../controllers/auth");
 
 const {individualSignupValidator,individualPasswordResetValidator,
    organizationPasswordResetValidator,
    
    organizationSignupValidator} = require("../validator")

const router = express.Router()


router.post('/api/signup', individualSignupValidator,  signup )
router.post('/api/signin' ,  signin )
router.post('/api/signout',signout)

router.post('/api/orgsignup', organizationSignupValidator, orgsignup )
router.post('/api/orgsignin' ,  orgsignin )
router.post('/api/orgsignout',orgsignout)

module.exports = router;
