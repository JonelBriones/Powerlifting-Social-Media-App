const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    register:(req,res)=> {
        const user = new User(req.body)
        user.save()
            .then((newUser)=> {
                console.log("Successfully Register",newUser)
                res.json({
                    successMessage: "Thank you for registering",
                    user: newUser
                });
            })
            .catch((err)=>{
                console.log("Register not successful!")
                res.status(400).json(err);
            });
    },
    login:(req,res)=>{
        User.findOne({email:req.body.email})
            .then((userRecord)=>{
                if(userRecord === null) {
                    res.status(400).json({message:"Invalid Login Attempt"})
                }
                else {
                    bcrypt.compare(req.body.password,userRecord.password)
                        .then((isPasswordValid)=>{
                            if(isPasswordValid){
                                console.log("Password is valid...Logging In")
                                res.cookie(
                                    "usertoken",
                                    jwt.sign({
                                        id: userRecord._id,
                                        email: userRecord.email,
                                        username: userRecord.username,
                                        firstName: userRecord.firstName,
                                        lastName: userRecord.lastName
                                    },
                                    process.env.JWT_SECRET
                                ),
                                {
                                    httpOnly:true,
                                    expires: new Date(Date.now() + 90000000)
                                },
                                ).json({
                                    message: "Successful Login",
                                    userLoggedIn: userRecord.username,
                                    userId: userRecord._id
                                })
                            }
                            else {
                                res.status(400).json({
                                    message: "Invalid Login Attempt"
                                })
                            }
                        })
                        .catch((err)=> {
                            console.log(err)
                            res.status(400).json({message:"Invalid Login Attempt"})
                        })
                }
            })
            .catch((err)=> {
                console.log(err)
                res.status(400).json({message:"Invalid Login Attempt"})
            })
    },
    logout(req,res) {
        console.log("You have successfully logged out!"),
        res.cookie("usertoken",jwt.sign({_id:""},process.env.JWT_SECRET),{
            httpOnly:true,
            maxAge:0
        })
        .json({message: "You have successfully logged out!"})
    },
    getLoggedInUser(req,res) {
        const decodedJwt = jwt.decode(req.cookies.usertoken,{complete:true})
        User.findOne({_id:decodedJwt.payload.id})
            .then((findLoggedInUser)=>res.json(findLoggedInUser))
            .catch((err)=>res.json(err))
            console.log("Something went wrong in finding logged user")
    },
    getOneUser: (req,res)=> {
        User.findOne({username:req.params.username})
            .then((oneUser)=>{
                console.log(oneUser)
                res.json(oneUser)
            })
            .catch((err)=>{
                console.log(err)
                res.status(400).json(err)
                console.log("Something went wrong in finding one user")
            })
    },
    updateUser: (req,res)=> {
        User.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
            .then((updateUser)=> {
                res.json(updateUser)
                console.log(updateUser)
            })
            .catch((err)=>{
                res.status(400).json(err)
                console.log("Something went wrong in updating user")
            })
    },
    getAllUsers: (req,res) => {
        User.find()
            .then((allUsers)=> {
                res.json(allUsers)
                console.log(allUsers)
            })
            .catch((err)=> {
                res.status(400).json(err)
                console.log("Something went wrong in finding all users")
            })
    }
}