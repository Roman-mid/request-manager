import { z } from 'zod';
import { STATUS } from '../../../shared/constants/requestStatus.js';

export const createRequestSchema = z.object({
  title: z.string().trim().min(3).max(100),
  description: z.string().trim().max(1000).optional().default(''),
});

export const updateRequestStatusTypeSchema = z.object({
  status: z.enum([STATUS.NEW, STATUS.IN_PROGRESS, STATUS.COMPLETED]),
});
