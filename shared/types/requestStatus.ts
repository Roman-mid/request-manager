import type { STATUS } from '../constants/requestStatus.js';

export type RequestStatusType = (typeof STATUS)[keyof typeof STATUS];
