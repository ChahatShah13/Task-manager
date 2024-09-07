
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {users}= require("../../model/users");

async function handleregister(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required.' });
    }
    const userExists = users.find((user) => user.username === username);
    if (userExists) {
      return res.status(409).json({ message: 'User already exists.' });
    }
    const newUser = { username, password,token:null,tasks:[]};
    users.push(newUser);
    res.status(201).json({ message: 'User registered successfully.' });
}

module.exports = handleregister;