
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {users}= require("../../model/users");
const SECRET_KEY = 'Chahat_Shah';

async function handleLogin(req, res) {
    const { username, password } = req.body;
    const user = users.find((user) => user.username === username && user.password === password);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }
    // Generate a token
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    user.token=token;
    res.json({ token });
}

module.exports = handleLogin;