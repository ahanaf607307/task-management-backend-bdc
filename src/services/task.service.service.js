const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const { Tasks, TaskService } = require("../models");

const postTaskService = async (data) => {
  const task = await TaskService.create(data);
  return task;
};
const getTaskService = async () => {
  const task = await TaskService.find();
  return task;
};


module.exports = {
  postTaskService,
  getTaskService
};
