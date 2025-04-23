import { Customer } from '@prisma/client';
import prisma from '../../utils/prisma';
import AppError from '../../errors/AppError';
import status from 'http-status';

const createCutomerIntoDB = async (data: Customer) => {
  const result = await prisma.customer.create({
    data,
  });

  return result;
};

const getAllCustomersFromDB = async () => {
  const result = await prisma.customer.findMany();

  return result;
};

const getSpecificCustomerFromDB = async (id: string) => {
  const result = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });

  if (!result) {
    throw new AppError(status.NOT_FOUND, 'Customer not found');
  }

  return result;
};

const updateCustomerDetailsIntoDB = async (
  id: string,
  payload: Partial<Customer>,
) => {
  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data: {
      ...payload,
    },
  });

  return result;
};

const deleteCustomerFromDB = async (id: string) => {
  await prisma.customer.delete({
    where: {
      customerId: id,
    },
  });

  return;
};

export const CustomerServices = {
  createCutomerIntoDB,
  getAllCustomersFromDB,
  getSpecificCustomerFromDB,
  updateCustomerDetailsIntoDB,
  deleteCustomerFromDB,
};
