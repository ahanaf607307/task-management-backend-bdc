const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const { Tasks, EmployeeTaskModel } = require("../models");

const createTask = async (data) => {
  const task = await Tasks.create(data);
  return task;
};

const getAllTasksService = async () => {

  return await Tasks.find()
    .populate("createdBy", "name email")
    .populate("categoryId", "category")
    .populate("subCategories.subCategoryId")
    .populate("subCategories.serviceId");
};

module.exports = {
  createTask,
  getAllTasksService,
};
