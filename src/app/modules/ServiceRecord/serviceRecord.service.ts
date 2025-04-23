import { ServiceRecord } from '@prisma/client';
import prisma from '../../utils/prisma';
import AppError from '../../errors/AppError';
import status from 'http-status';

const createServiceRecordIntoDB = async (data: ServiceRecord) => {
  const result = await prisma.serviceRecord.create({
    data,
  });

  return result;
};

const getAllServiceRecordsFromDB = async () => {
  const result = await prisma.serviceRecord.findMany();

  return result;
};

const getSpecificServiceRecordFromDB = async (id: string) => {
  const result = await prisma.serviceRecord.findUnique({
    where: {
      serviceId: id,
    },
  });

  if (!result) {
    throw new AppError(status.NOT_FOUND, 'Service Record not found');
  }

  return result;
};

const MarkAServiceCompletedIntoDB = async (id: string) => {
  const result = await prisma.serviceRecord.update({
    where: {
      serviceId: id,
    },
    data: {
      completionDate: new Date(),
      status: 'done',
    },
  });

  return result;
};

const overdueServicesFromDB = async () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const result = await prisma.serviceRecord.findMany({
    where: {
      AND: [
        {
          OR: [{ status: 'pending' }, { status: 'in_progress' }],
        },
        {
          serviceDate: { lt: sevenDaysAgo },
        },
      ],
    },
  });

  return result;
};

export const ServiceRecordServices = {
  createServiceRecordIntoDB,
  getAllServiceRecordsFromDB,
  getSpecificServiceRecordFromDB,
  MarkAServiceCompletedIntoDB,
  overdueServicesFromDB,
};
