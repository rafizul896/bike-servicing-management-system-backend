import { z } from 'zod';

const createServiceRecordSchema = z.object({
  body: z.object({
    bikeId: z.string().uuid({ message: 'Invalid bikeId UUID format' }),
    serviceDate: z.string().datetime().optional(),
    completionDate: z.string().datetime().optional().nullable(),
    description: z.string().min(1, 'Description is required'),
    status: z.string().optional(),
  }),
});

export const ServiceRecordValidations = {
  createServiceRecordSchema,
};
