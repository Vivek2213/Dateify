const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// upload image....
const imgdetSchema = new mongoose.Schema({
    imgUrl: {
        type: String

    },
    caption: {
        type: String
    }
})

// user schema....
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim:true,
        required: [true,"Name is required"],
        max:64
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique: true,
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
    age:{
        type:String
    },
    sex: {
        type:String
    },
    tags: [String],
    about: {
        type: String
    },
    profilepic: {
        type: String
    },
    city:{
        type: String
    },
    company:{
        type: String
    },
    institution:{
        type: String
    },
    uploadedimg: [imgdetSchema],
    likedppl:[String],
});

module.exports = mongoose.model("Person",userSchema);