const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const response = require("../config/response");
const { taskService, orderService } = require("../services");

const createOrder = catchAsync(async (req, res) => {
try {
    req.body.clientId = req.user.id

  const order = await orderService.createOrder(req.body);
  res.status(httpStatus.CREATED).json(
    response({
      message: "Order created successfully",
      status: "OK",
      statusCode: httpStatus.CREATED,
      data: order,
    })
  );
} catch (error) {
    console.log('error from create order' , error)
      res.status(httpStatus.BAD_REQUEST).json(
    response({
      message: "Order creating failed",
      status: "NOT OK",
      statusCode: httpStatus.BAD_REQUEST,
    })
  );
}

});

const getOrder = async (req, res) => {
  try {
    const orders = await orderService.getAllOrder();
    res.status(200).json({
      success: true,
      message : "Order retrive successfully",
      data: orders
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
  createOrder,
getOrder
};
