const mongoose = require('mongoose');
let uuidv1 = require('uuidv1');
const crypto = require('crypto');
 

const individualSchema = new mongoose.Schema({
    organization:{

        type: String,
        required: true,
        trim:true
       

    },
    name:{
        type: String,
        required :true,
        trim:true
    
    },
    email:{
        type: String,
        required :true,
        trim:true
    
    },
    mobile:{
        type: String,
        required :true,
        
    
    },
    hashed_password:{
        type: String,
        required :true,
        trim:true
    
    },
    salt:String,
    created:{
        type:Date,
        default:Date.now
    },
    updated:Date
})




//virtual
individualSchema.virtual('password')
.set(function(password){
    //create temp variable _password
    this._password = password,
    //time stamp
    this.salt = uuidv1()
    //encrypt password
    this.hashed_password= this.encryptPassword(password)
})
.get( function(){
    return this._password
})

//methods
individualSchema.methods = {

    authenticate:function(plainText){

        return this.encryptPassword(plainText) == this.hashed_password
    },



    encryptPassword: function(password){
        if(!password)return "";
        try{
            return crypto.createHmac ('sha1',this.salt)
            .update(password)
            .digest();
        }
        catch(err){
            return"";
        }
    }
}

module.exports  = mongoose.model("Individual", individualSchema);