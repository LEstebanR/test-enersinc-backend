const mongoose = require('mongoose');
const User = require('../models/users.model.js');

const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({name: 1});
    res.status(200).json(users);
  }catch (error) {
   res.status(500).json({error: error.message}) 
  }
}

module.exports = { getUsers };