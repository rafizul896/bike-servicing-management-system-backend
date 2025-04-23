import { z } from 'zod';

const createCutomerSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(7, 'Phone number is too short'),
  }),
});

const updateCustomerSchema = z.object({
  body: z.object({
    name: z.string().min(1).optional(),
    email: z.string().email().optional(),
    phone: z.string().min(7).optional(),
  }),
});

export const CustomerValidation = {
  createCutomerSchema,
  updateCustomerSchema,
};
