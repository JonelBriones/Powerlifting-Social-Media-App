const mongoose = require('mogoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName: {
        type:String,
    },
    username: {
        type:String,
        required: [true, "Enter a Username"],
        minLength: [3, "Username must be at least 3 characters or longer"]
    },
    email: {
        type:String,
        required: [true, "Email is required"],
        validate: {
            validator: val =>/^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid Email Address"
        }
    },
    password: {
        type: String, 
        required: [true, "Enter a Password"],
        minLength: [8, "Password must be at least 8 characters or longer"]
    }
}, {timestamps:true});
UserSchema.virtual('confirmPassword')
    .get(()=> this._confirmPassword)
    .set((value)=>this._confirmPassword = value);

UserSchema.pre('validate',function(next) {
    if(this.password!==this._confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
})
UserSchema.pre('save',function(next){
    bcrypt.hash(this.password,10)
        .then(hash=>{
            this.password = hash;
            next();
        })
})
module.exports = mongoose.model('User',UserSchema);