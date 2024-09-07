const express = require('express');
const router = express.Router();

const  handletaskcreation= require("../controllers/TaskManageMent/taskcreation");
const  handlegettask= require("../controllers/TaskManageMent/taskdisplay");
const  verifyToken=require("../middleware/verifyToken");




router

    .route('/createtask')
    .post(verifyToken,handletaskcreation);

router
    .route('/gettasks')
    .get(verifyToken,handlegettask); 

       
module.exports = router;