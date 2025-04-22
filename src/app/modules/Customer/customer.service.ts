import { Customer } from '@prisma/client';
import prisma from '../../utils/prisma';

const createCutomerIntoDB = async (data: Customer) => {
  const result = await prisma.customer.create({
    data,
  });

  return result;
};

export const CustomerServices = {
  createCutomerIntoDB,
};
