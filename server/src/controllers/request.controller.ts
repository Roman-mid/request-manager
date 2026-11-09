import type { Request, Response } from 'express';

import {
  createRequestSchema,
  updateRequestStatusTypeSchema,
} from '../validators/request.validator.js';
import { requestService } from '../services/request.service.js';

export const requestController = {
  async getAll(_req: Request, res: Response): Promise<void> {
    const requests = await requestService.getAll();

    res.status(200).json(requests);
  },

  async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    if (typeof id !== 'string') {
      res.status(400).json({ message: 'Invalid request ID' });
      return;
    }

    const request = await requestService.getById(id);

    if (!request) {
      res.status(404).json({ message: 'Request not found' });
      return;
    }

    res.status(200).json(request);
  },

  async create(req: Request, res: Response): Promise<void> {
    const validation = createRequestSchema.safeParse(req.body);

    if (!validation.success) {
      res.status(400).json({
        message: 'Validation failed',
        errors: validation.error.flatten().fieldErrors,
      });
      return;
    }

    const request = await requestService.create(validation.data);

    res.status(201).json(request);
  },

  async updateStatus(req: Request, res: Response): Promise<void> {
    const validation = updateRequestStatusTypeSchema.safeParse(req.body);

    if (!validation.success) {
      res.status(400).json({
        message: 'Validation failed',
        errors: validation.error.flatten().fieldErrors,
      });
      return;
    }

    const { id } = req.params;

    if (typeof id !== 'string') {
      res.status(400).json({ message: 'Invalid request ID' });
      return;
    }

    const request = await requestService.updateStatus(
      id,
      validation.data.status,
    );

    if (!request) {
      res.status(404).json({ message: 'Request not found' });
      return;
    }

    res.status(200).json(request);
  },

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    if (typeof id !== 'string') {
      res.status(400).json({ message: 'Invalid request ID' });
      return;
    }

    const deleted = await requestService.delete(id);

    if (!deleted) {
      res.status(404).json({ message: 'Request not found' });
      return;
    }

    res.status(204).end();
  },
};
