const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const response = require("../config/response");
const { taskService, taskServiceService } = require("../services");

const createTaskService = catchAsync(async (req, res) => {
try {
    req.body.createdBy = req.user.id

  const tasks = await taskServiceService.postTaskService(req.body);
  res.status(httpStatus.CREATED).json(
    response({
      message: "Task service created successfully",
      status: "OK",
      statusCode: httpStatus.CREATED,
      data: tasks,
    })
  );
} catch (error) {
      res.status(httpStatus.BAD_REQUEST).json(
    response({
      message: "Task service creating failed",
      status: "NOT OK",
      statusCode: httpStatus.BAD_REQUEST,
    })
  );
}

});



module.exports = {
  createTaskService,

};
