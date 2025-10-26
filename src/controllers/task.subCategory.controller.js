const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const response = require("../config/response");
const { taskSubCategoryService } = require("../services");

const createTaskSubCategory = catchAsync(async (req, res) => {
  try {
    console.log("req.body from sub cat", req.body);
    req.body.createdBy = req.user.id;
    console.log("created by", req.body.createdBy);
    const tasks = await taskSubCategoryService.createTaskSubCategoryService(req.body);
    console.log("sub category", tasks);
    res.status(httpStatus.CREATED).json(
      response({
        message: "Task Sub Category created successfully",
        status: "OK",
        statusCode: httpStatus.CREATED,
        data: tasks,
      })
    );
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json(
      response({
        message: "Task Sub Category creating failed",
        status: "NOT OK",
        statusCode: httpStatus.BAD_REQUEST,
        error: error.message,
      })
    );
  }
});

module.exports = {
  createTaskSubCategory,
};
