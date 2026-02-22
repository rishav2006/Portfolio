const express = require('express');
const userModel = require('../../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    let {email, password} = req.body;
    if(!email || !password) return res.send('Please fill in all the details properly');
    const checkUser = await userModel.findOne({email: email});
    if(!checkUser) return res.send('Invalid username or password');
    const passCompare = await bcrypt.compare(password, checkUser.password);
    if(!passCompare) return res.send('Invalid username or password');

    const token = await jwt.sign({email: email, id: checkUser._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
    res.cookie('token', token, {
        httpOnly: true
    });
    res.send('Login Successful');
}

module.exports = login;