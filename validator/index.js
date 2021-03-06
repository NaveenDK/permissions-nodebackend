exports.createPostValidator = (req,res,next)=>{
    //title

    req.check('title', "Type in something..").notEmpty()
    req.check('title', 'title must be between 4 to 150 characters' ).isLength({
        min:4,
        max:150
    });


    req.check('body', "Should not be empty").notEmpty()
    req.check('body', ' must be between 4 to 1500 characters' ).isLength({
        min:4,
        max:1500
    });

    //check for errors
    const errors = req.validationErrors();
    //pick the first out of the errors

    if(errors){
        const firstError =  errors.map((error)=>error.msg)[0]
        return res.status(400).json({error: firstError})
    }

    next();

}

exports.individualSignupValidator = (req,res,next) =>{

    //name is not null and between 4 to 10 characters

    req.check("name", "Name is required").notEmpty();

    //email not null,valid and normalized
    req.check("email", "Email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @")
    .isLength({
        min:4,
        max:2000
    })

    //organization should not be null
    req.check("organization", "Organization is required").notEmpty();
   
    //mobile should not be empty
    req.check("mobile", "Mobile is required").notEmpty();

    req.check('mobile')
    .isLength({min:8})
    .withMessage("Mobile number should contain atleast 8 digits")

    //check for password
   req.check("password", "Password is required").notEmpty();
   req.check('password')
   .isLength({min:6})
   .withMessage("Password must contain atleast 6 characters")
   .matches(/\d/).withMessage("Password must contain a number")

    //check for errors
    //check for errors
    const errors = req.validationErrors();
    //pick the first out of the errors

    if(errors){
        const firstError =  errors.map((error)=>error.msg)[0]
        return res.status(400).json({error: firstError})
    }

    next();

    

}
exports.organizationSignupValidator = (req,res,next) =>{

        //name is not null and between 4 to 10 characters

    req.check("name", "Name is required").notEmpty();

    //email not null,valid and normalized
    req.check("email", "Email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @")
    .isLength({
        min:4,
        max:2000
    })

     
   
    //mobile should not be empty
    req.check("mobile", "Mobile is required").notEmpty();

    req.check('mobile')
    .isLength({min:8})
    .withMessage("Mobile number should contain atleast 8 digits")
    
    //check for password
   req.check("password", "Password is required").notEmpty();
   req.check('password')
   .isLength({min:6})
   .withMessage("Password must contain atleast 6 characters")
   .matches(/\d/).withMessage("Password must contain a number")

    //check for errors
    //check for errors
    const errors = req.validationErrors();
    //pick the first out of the errors

    if(errors){
        const firstError =  errors.map((error)=>error.msg)[0]
        return res.status(400).json({error: firstError})
    }

    next();

}

exports.individualPasswordResetValidator = (req, res, next) => {
    // check for password
    req.check("newPassword", "Password is required").notEmpty();
    req.check("newPassword")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 chars long")
        .matches(/\d/)
        .withMessage("must contain a number")
        .withMessage("Password must contain a number");
 
    // check for errors
    const errors = req.validationErrors();
    // if error show the first one as they happen
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    // proceed to next middleware or ...
    next();
};

exports.organizationPasswordResetValidator = (req, res, next) => {
    // check for password
    req.check("newPassword", "Password is required").notEmpty();
    req.check("newPassword")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 chars long")
        .matches(/\d/)
        .withMessage("must contain a number")
        .withMessage("Password must contain a number");
 
    // check for errors
    const errors = req.validationErrors();
    // if error show the first one as they happen
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    // proceed to next middleware or ...
    next();
};