const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const authentication= require('./routes/authentication');
const taskmanagement= require('./routes/taskmanagement');

const app = express();
const PORT = 5000;


app.use(cors(
  {
    origin: ['https://your-vercel-frontend-url.vercel.app'],
    method: ["POST", "GET"],
    credential: true
  }
));
app.use(bodyParser.json());
app.use("/auth",authentication);
app.use("/task",taskmanagement);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
