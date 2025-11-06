const { OrderModel, EmployeeTaskModel } = require("../models");
const ApiError = require("../utils/ApiError"); // assuming you have a custom error class

const claimTask = async (data) => {

  let orderData = null;
  if (data.taskId) {
    orderData = await OrderModel.findById(data.taskId);
console.log('orderData -> ',orderData)
    if (!orderData) {
      throw new ApiError(404, "Order not found");
    }
    if (orderData.quantity <= 0) {
      throw new ApiError(400, "No more quantity left for this task");
    }

    orderData.quantity -= 1;
    await orderData.save();
  }

  const result = await EmployeeTaskModel.create(data);

  return result;
};

const getAllClaimTask = async () => {
  const result = await EmployeeTaskModel.find()
    .populate("taskId")
    .populate("employeeId");
  return result;
};

module.exports = {
  claimTask,
  getAllClaimTask,
};
