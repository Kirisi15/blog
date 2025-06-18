const mongoose = requre("mongoose")

const UserSchema = new mongoose.Schema({
    user:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        default:"",
    },
},
{timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);