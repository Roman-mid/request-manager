import { randomUUID } from 'node:crypto';

import type {
  CreateRequestDto,
  Request,
  RequestStatusType,
} from '../../../shared/types/request.js';

import { requestRepository } from '../repositories/request.repository.js';
import { STATUS } from '../../../shared/constants/requestStatus.js';

export const requestService = {
  async getAll(): Promise<Request[]> {
    return requestRepository.findAll();
  },

  async getById(id: string): Promise<Request | undefined> {
    return requestRepository.findById(id);
  },

  async create(data: CreateRequestDto): Promise<Request> {
    const request: Request = {
      id: randomUUID(),
      title: data.title,
      description: data.description ?? '',
      status: STATUS.NEW,
      createdAt: new Date().toISOString(),
    };

    return requestRepository.create(request);
  },

  async updateStatus(
    id: string,
    status: RequestStatusType,
  ): Promise<Request | undefined> {
    const requests = await requestRepository.findAll();

    const request = requests.find((item) => item.id === id);

    if (!request) {
      return undefined;
    }

    request.status = status;

    await requestRepository.save(requests);

    return request;
  },

  async delete(id: string): Promise<boolean> {
    return requestRepository.delete(id);
  },
};
