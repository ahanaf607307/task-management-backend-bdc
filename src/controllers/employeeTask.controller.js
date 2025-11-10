const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const response = require("../config/response");
const {   EmployeeTaskService } = require("../services");

const claimEmployeeTask = catchAsync(async (req, res) => {
    try {
        req.body.employeeId = req.user.id
        const order = await EmployeeTaskService.claimTask(req.body);
        
        res.status(httpStatus.CREATED).json(
            response({
                message: "Task Claim successfully",
                status: "OK",
                statusCode: httpStatus.CREATED,
                data: order,
            })
        );
    } catch (error) {
        console.log('error from create claim route', error)
        res.status(httpStatus.BAD_REQUEST).json(
            response({
                message: "Task Claim  failed",
                status: "NOT OK",
                statusCode: httpStatus.BAD_REQUEST,
            })
        );
    }

});

const getEmployeeTask = async (req, res) => {
    try {
        const orders = await EmployeeTaskService.getAllClaimTask();
        res.status(200).json({
            success: true,
            message: "Claim Task retrieved  successfully",
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
    claimEmployeeTask,
    getEmployeeTask
};
