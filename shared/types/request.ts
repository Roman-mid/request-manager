import type { RequestStatusType } from './requestStatus.js';

export type { RequestStatusType } from './requestStatus.js';

export interface Request {
  id: string;
  title: string;
  description: string;
  status: RequestStatusType;
  createdAt: string;
}

export interface CreateRequestDto {
  title: string;
  description?: string;
}

export interface UpdateRequestStatusTypeDto {
  status: RequestStatusType;
}
