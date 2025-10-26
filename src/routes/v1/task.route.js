const express = require("express");
const auth = require("../../middlewares/auth");
const validate = require("../../middlewares/validate");

const { taskController } = require("../../controllers");
const { taskValidation } = require("../../validations");


const TaskRouter = express.Router();

TaskRouter.route("/create-task").post(auth("admin"),  taskController.createTask);
TaskRouter.route("/get-all-tasks").get(auth("admin" || "client"), taskController.getTasks);


  

module.exports = TaskRouter;
