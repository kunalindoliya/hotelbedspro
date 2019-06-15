const bcrypt=require('bcryptjs');
const User = require('../model/user');
const Sequelize = require('sequelize');
const City = require('../model/city');

exports.getIndex= async (req,res,next)=>{
  const cities = await City.findAll();
  res.render('index',{cities:cities});
};
exports.getRegister = (req,res,next)=>{
  res.render('register');
};
exports.postRegister = async (req,res,next)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;
    const user = await User.findOne({where:{[Sequelize.Op.or]:[{email:email} , {username:username}]}});
    if(user){
       return  res.redirect('/register');
    }
    const hash = await bcrypt.hash(password,10);
    await User.create({username:username,email:email,phone:phone,password:hash});
    res.redirect('/');
};
