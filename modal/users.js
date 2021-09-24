const mongoose = require("mongoose");

let us = mongoose.Schema({
name:{
    fname:{
type:String
    },
    lname:{
type:String
    }
},
email:{
    type:String,
},
address:{
    type:String,
}
})

let use = mongoose.model("Use",us)
module.exports =use;