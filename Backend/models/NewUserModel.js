import moongose from 'mongoose'


const User=moongose.Schema({

    name:{type:String},
    email:{type:String},
    password:{type:String},
     
    picture:[{type:Buffer}],


})
const registeredUser=moongose.model('Registered_User', User)



export default registeredUser;
