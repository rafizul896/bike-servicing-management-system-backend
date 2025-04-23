import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CustomerServices } from './customer.service';

const createCutomer = catchAsync(async (req, res) => {
  const result = await CustomerServices.createCutomerIntoDB(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: 'Customer created successfully',
    data: result,
  });
});

const getAllCustomers = catchAsync(async (req, res) => {
  const result = await CustomerServices.getAllCustomersFromDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Customers fetched successfully',
    data: result,
  });
});

const getSpecificCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;
  const result = await CustomerServices.getSpecificCustomerFromDB(customerId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Customer fetched successfully',
    data: result,
  });
});

const updateCustomerDetails = catchAsync(async (req, res) => {
  const { customerId } = req.params;
  const result = await CustomerServices.updateCustomerDetailsIntoDB(
    customerId,
    req.body,
  );

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Customer updated  successfully',
    data: result,
  });
});

const deleteCustomerFromDB = catchAsync(async (req, res) => {
  const { customerId } = req.params;
  const result = await CustomerServices.deleteCustomerFromDB(customerId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Customer deleted successfully',
    data: result,
  });
});

export const CustomerControllers = {
  createCutomer,
  getAllCustomers,
  getSpecificCustomer,
  updateCustomerDetails,
  deleteCustomerFromDB,
};
