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