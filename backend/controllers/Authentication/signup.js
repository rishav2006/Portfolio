const express = require('express');
const userModel = require('../../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try{
        const {name, email, password} = req.body;
    const checkUser = await userModel.findOne({email});
    if(checkUser) return res.send('User already exists');
    if(!name || !email || !password) return res.send('Please Fill n all the details properly');
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await userModel.create({
        name,
        email,
        password: hash
    });
    const token = await jwt.sign({email: email, id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
    res.cookie('token', token, {httpOnly: true});
    res.send('Account Created Successfully');
    } catch(err) {
        console.log(err.message);
    }
}

module.exports = signup;