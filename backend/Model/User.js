const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    username: {
        type: String,
        required : true,
    },
    email: {
        type: String,
        required : true,
    },
    password: {
        type: String,
       required: true,
    },
    validate: {
        type: Boolean,
        default: false,
    }
},
{
    timeStamps: true
});

module.exports = mongoose.model("user" , userSchema)