import mongoose from "mongoose";

const schema = mongoose.Schema;

const users = new schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
});

const user = mongoose.model('users',users);
export default user;