const Individual = require("../models/individual")

exports.signup = async (req,res)=>{
    const individualExists = await Individual.findOne({email: req.body.email})
    if(individualExists) return res.status(403).json({
        error: "Email is taken"
    })

    const individual = await new Individual(req.body)
    await individual.save()
    res.status(200).json({individual})

}