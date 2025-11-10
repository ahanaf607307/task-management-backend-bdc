const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const response = require("../config/response");
const { TransactionService } = require("../services");


const createTransaction = catchAsync(async (req, res) => {
try {
    req.body.employeeId = req.user.id

  const transaction = await TransactionService.createTransaction(req.body)
  res.status(httpStatus.CREATED).json(
    response({
      message: "Transaction created successfully",
      status: "OK",
      statusCode: httpStatus.CREATED,
      data: transaction,
    })
  );
} catch (error) {
    console.log('error from create Transaction' , error)
      res.status(httpStatus.BAD_REQUEST).json(
    response({
      message: "Transaction creating failed",
      status: "NOT OK",
      statusCode: httpStatus.BAD_REQUEST,
    })
  );
}

});

const getTransactions = async (req, res) => {
  try {
    const transactions = await TransactionService.getTransactions();
    res.status(200).json({
      success: true,
      message : "Transaction retrieved  successfully",
      data: transactions
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
  createTransaction,
getTransactions
};
