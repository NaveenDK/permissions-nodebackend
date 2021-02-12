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