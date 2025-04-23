import { ServiceRecord } from '@prisma/client';
import prisma from '../../utils/prisma';

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
  const result = await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId: id,
    },
  });

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
