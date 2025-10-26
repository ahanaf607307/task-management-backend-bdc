const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const response = require("../config/response");
const { taskCategoryService } = require("../services");

const createTaskCategory = catchAsync(async (req, res) => {
try {
    req.body.createdBy = req.user.id
console.log(req.body.createdBy)
  const tasks = await taskCategoryService.createTaskCategoryService(req.body);
  console.log('tasks from category' , tasks)
  res.status(httpStatus.CREATED).json(
    response({
      message: "Task Category created successfully",
      status: "OK",
      statusCode: httpStatus.CREATED,
      data: tasks,
    })
  );
} catch (error) {
      res.status(httpStatus.BAD_REQUEST).json(
    response({
      message: "Task Category creating failed",
      status: "NOT OK",
      statusCode: httpStatus.BAD_REQUEST,
      error : error
    })
  );
}

});



module.exports = {
  createTaskCategory,

};
