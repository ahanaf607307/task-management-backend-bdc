const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const response = require("../config/response");
const { taskService } = require("../services");
const { Tasks } = require("../models");

const createTask = catchAsync(async (req, res) => {
try {
    req.body.createdBy = req.user.id

  const tasks = await taskService.createTask(req.body);
  res.status(httpStatus.CREATED).json(
    response({
      message: "Task created successfully",
      status: "OK",
      statusCode: httpStatus.CREATED,
      data: tasks,
    })
  );
} catch (error) {
      res.status(httpStatus.BAD_REQUEST).json(
    response({
      message: "Task creating failed",
      status: "NOT OK",
      statusCode: httpStatus.BAD_REQUEST,
    })
  );
}

});


// const getTasks = catchAsync(async (req, res) => {
//   // Pick filters and options from query
//     const filter = pick(req.query, ["status", "categoryId", "subCategoryId", "serviceId", "title"]);
//   const options = pick(req.query, ["sortBy", "limit", "page"]);

//   // Pass user if needed for filtering by createdBy
//   const result = await taskService.getTasksService(filter, options, req.user);

//   res.status(httpStatus.OK).json(
//     response({
//       message: "All Tasks",
//       status: "OK",
//       statusCode: httpStatus.OK,
//       data: result,
//     })
//   );
// });
const getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasksService();
    res.status(200).json({
      success: true,
      data: tasks
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

module.exports = {
  createTask,
getTasks
};
