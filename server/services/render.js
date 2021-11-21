const axios = require('axios');

exports.homeRoutes = (req, res)=>{
    res.render('index');
}

exports.login = (req, res)=>{
    res.render('signin');
}

exports.signup = (req, res)=>{
    res.render('signup');
}

exports.service = (req, res)=>{
    res.render('service');
}