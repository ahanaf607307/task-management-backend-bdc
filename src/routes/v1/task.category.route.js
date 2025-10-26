const express = require("express");
const auth = require("../../middlewares/auth");
const validate = require("../../middlewares/validate");

const { taskCategoryController } = require("../../controllers");
const { taskValidation } = require("../../validations");

const TaskCategoryRouter = express.Router();

TaskCategoryRouter.route("/create").post(
  auth("admin"),
  taskCategoryController.createTaskCategory
);
// TaskCategoryRouter.route("/all").get(auth("common"), taskController.getTask);

module.exports = TaskCategoryRouter;
