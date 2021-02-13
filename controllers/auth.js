const jwt = require('jsonwebtoken')
require('dotenv').config()
const Individual = require("../models/individual")
const Organization = require("../models/organization")



exports.signup = async (req,res)=>{
    const individualExists = await Individual.findOne({email: req.body.email})
    if(individualExists) return res.status(403).json({
        error: "Email is taken"
    })

    const individual = await new Individual(req.body)
    await individual.save()
    res.status(200).json({message: "Signup success!"})

}


exports.orgsignup = async (req,res) =>{
    const organizationExists = await Organization.findOne({email: req.body.email})
    if(organizationExists) return res.status(403).json({
        error: "Email is taken"
    })

    const organization = await new Organization(req.body)
    await organization.save()
    res.status(200).json({message: "Signup success!"})


}

exports.signin = (req,res)=>{
    //get user based on email

    const {_id, name, email, password} = req.body

    Individual.findOne({email},(err, individual)=>{

        //if err or no user
        if(err || !individual){
            return res.status(401).json({
                error:"Account with that email does not exist. Please sign in"
            })
        }
        //if user is found make sure email and pwd match
        //use authenticate method in model here 

    
    //if user, authenticate
    if(!individual.authenticate(password)){
        return res.status(401).json({
            error: "Email and password do not match"
        })
    }


    //genrate token with id and secret

    const token = jwt.sign({_id:individual._id},process.env.JWT_SECRET);

    //persist token as 't' in cookie with expiry 
    res.cookie("t",token, {expire:new Date() + 9999})

    //return res with user and token

    const {_id, name, email, mobile, organization} = individual

    return res.json({token, individual:{_id, email, name, mobile, organization}})

    })

}

exports.orgsignin = (req,res)=>{
    //get user based on email

    const {_id, name, email, password} = req.body

    Organization.findOne({email},(err, organization)=>{

        //if err or no user
        if(err || !organization){
            return res.status(401).json({
                error:"Account with that email does not exist. Please sign in"
            })
        }
        //if user is found make sure email and pwd match
        //use authenticate method in model here 

    
    //if user, authenticate
    if(!organization.authenticate(password)){
        return res.status(401).json({
            error: "Email and password do not match"
        })
    }


    //genrate token with id and secret

    const token = jwt.sign({_id:organization._id},process.env.JWT_SECRET);

    //persist token as 't' in cookie with expiry 
    res.cookie("t",token, {expire:new Date() + 9999})

    //return res with user and token

    const {_id, name, email, mobile} = organization

    return res.json({token, organization:{_id, email, name, mobile}})

    })

}