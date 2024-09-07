
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {users}= require("../../model/users");


async function handletaskcreation(req, res) {

  const user = users.find((u) => u.username === req.user.username && u.token === req.headers['authorization'].split(' ')[1]);
  if (!user) {
    return res.sendStatus(401);
  }
  const task = { name: req.body.name };
  user.tasks.push(task); // Add task to the authenticated user's task list
  res.status(201).json(task);

}

module.exports = handletaskcreation;