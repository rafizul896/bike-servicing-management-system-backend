import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BikeServices } from './bike.service';

const createBike = catchAsync(async (req, res) => {
  const result = await BikeServices.createBikeIntoDB(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: 'Bike added successfully',
    data: result,
  });
});

const getAllBikes = catchAsync(async (req, res) => {
  const result = await BikeServices.getAllBikesFromDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Bikes fetched successfully',
    data: result,
  });
});

const getSpecificBike = catchAsync(async (req, res) => {
  const { bikeId } = req.params;
  const result = await BikeServices.getSpecificBikeFromDB(bikeId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Bike fetched successfully',
    data: result,
  });
});

export const BikeControllers = {
  createBike,
  getAllBikes,
  getSpecificBike,
};
