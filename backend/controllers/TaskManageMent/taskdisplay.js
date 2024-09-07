
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {users}= require("../../model/users");

async function handlegettask(req, res) {
    const user = users.find((u) => u.username === req.user.username && u.token === req.headers['authorization'].split(' ')[1]);
    if (!user) {
      return res.sendStatus(401);
    }
    res.json(user.tasks); // Return only the tasks for the authenticated user

}

module.exports = handlegettask; 