const express = require("express");
const auth = require("../../middlewares/auth");
const validate = require("../../middlewares/validate");


const { taskValidation } = require("../../validations");
const { taskSubCategoryController } = require("../../controllers");



const TaskSubCategoryRouter = express.Router();
TaskSubCategoryRouter.route("/create").post(
  auth("admin"),
taskSubCategoryController.createTaskSubCategory
);


  

module.exports = TaskSubCategoryRouter;
