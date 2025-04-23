import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ServiceRecordServices } from './serviceRecord.service';

const createServiceRecord = catchAsync(async (req, res) => {
  const result = await ServiceRecordServices.createServiceRecordIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: 'Service record created successfully',
    data: result,
  });
});

const getAllServiceRecords = catchAsync(async (req, res) => {
  const result = await ServiceRecordServices.getAllServiceRecordsFromDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Service records fetched successfully',
    data: result,
  });
});

const getSpecificServiceRecord = catchAsync(async (req, res) => {
  const { serviceId } = req.params;
  const result =
    await ServiceRecordServices.getSpecificServiceRecordFromDB(serviceId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Service record fetched successfully',
    data: result,
  });
});

const MarkAServiceCompleted = catchAsync(async (req, res) => {
  const { serviceId } = req.params;
  const result =
    await ServiceRecordServices.MarkAServiceCompletedIntoDB(serviceId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Service marked as completed',
    data: result,
  });
});

const overdueServices = catchAsync(async (req, res) => {
  const result = await ServiceRecordServices.overdueServicesFromDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Overdue or pending services fetched successfully',
    data: result,
  });
});

export const ServiceRecordControllers = {
  createServiceRecord,
  getAllServiceRecords,
  getSpecificServiceRecord,
  MarkAServiceCompleted,
  overdueServices,
};
