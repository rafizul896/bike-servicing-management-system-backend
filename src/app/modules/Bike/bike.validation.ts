import { z } from 'zod';

const createBikeSchema = z.object({
  body: z.object({
    brand: z.string().min(1, 'Brand is required'),
    model: z.string().min(1, 'Model is required'),
    year: z.number().int().min(1900, 'Year must be a valid integer'),
    customerId: z.string().uuid('Invalid customer ID'),
  }),
});

export const BikeValidation = {
  createBikeSchema,
};
