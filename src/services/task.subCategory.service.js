const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const { TaskSubCategory } = require("../models");


const createTaskSubCategoryService = async (data) => {
  const task = await TaskSubCategory.create(data);
  return task;
};



module.exports = {
  createTaskSubCategoryService,
};
