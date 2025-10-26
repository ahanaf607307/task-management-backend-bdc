const express = require("express");
const auth = require("../../middlewares/auth");
const validate = require("../../middlewares/validate");


const { taskValidation } = require("../../validations");
const { taskServiceController } = require("../../controllers");


const TaskServiceRouter = express.Router();

TaskServiceRouter.route("/create").post(auth("admin"),  taskServiceController.createTaskService);
// TaskServiceRouter.route("/all").get(auth("common"), taskController.getTask);


  

module.exports = TaskServiceRouter;
