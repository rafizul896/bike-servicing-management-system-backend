import { Bike } from '@prisma/client';
import prisma from '../../utils/prisma';

const createBikeIntoDB = async (data: Bike) => {
  const result = await prisma.bike.create({
    data,
  });

  return result;
};

const getAllBikesFromDB = async () => {
  const result = await prisma.bike.findMany();

  return result;
};

const getSpecificBikeFromDB = async (id: string) => {
  const result = await prisma.bike.findUniqueOrThrow({
    where: {
      bikeId: id,
    },
  });

  return result;
};

export const BikeServices = {
  createBikeIntoDB,
  getAllBikesFromDB,
  getSpecificBikeFromDB,
};
