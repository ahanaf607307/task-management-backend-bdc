const { OrderModel } = require("../models");

const createOrder = async (data) => {
  const order = await OrderModel.create(data);
  return order;
};
const getAllOrder = async (claimedTaskIds) => {
  const order = await OrderModel.find({ _id: { $nin: claimedTaskIds } })
    .populate("taskId")
    .populate("clientId")   
    .populate("serviceId")
  return order;
};

module.exports = {
  createOrder,
  getAllOrder,
};
