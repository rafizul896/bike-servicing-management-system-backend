import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CustomerServices } from "./customer.service";

const createCutomer = catchAsync(async (req,res) => {
    const result = await CustomerServices.createCutomerIntoDB(req.body);

    sendResponse(res,{
        statusCode: status.CREATED,
        success: true,
        message: "Customer created successfully",
        data: result
    })
})

export const CustomerControllers = {
    createCutomer
}