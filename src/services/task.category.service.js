const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const {  TaskCategory } = require("../models");

const createTaskCategoryService = async (data) => {
  const task = await TaskCategory.create(data);
  return task;
};


module.exports = {
  createTaskCategoryService,
};
