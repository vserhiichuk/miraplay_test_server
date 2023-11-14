const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require('joi-password-complexity'); 

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this.id}, process.env.JWTPRIVATEKEY);

    return token;
}

const User = mongoose.model("user", userSchema);

const validate = (date) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First name"),
        lastName: Joi.string().required().label("Last name"),
        email: Joi.string().required().label("Email"),
        password: passwordComplexity().required().label("Password")
    })

    return schema.validate(date);
}

module.exports = { User, validate }