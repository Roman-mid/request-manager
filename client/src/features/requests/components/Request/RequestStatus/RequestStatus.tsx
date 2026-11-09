import clsx from 'clsx';
import type { RequestStatusType } from '../../../../../../../shared/types/request';
import { STATUS } from '../../../../../../../shared/constants/requestStatus';
import { STATUS_VALUE } from '../../../../../models/status';

import style from './RequestStatus.module.scss';

const statusType = {
  [STATUS.NEW]: style.new,
  [STATUS.IN_PROGRESS]: style.in_progress,
  [STATUS.COMPLETED]: style.completed,
};

const statusLabels: Record<RequestStatusType, string> = {
  [STATUS.NEW]: STATUS_VALUE.NEW,
  [STATUS.IN_PROGRESS]: STATUS_VALUE.IN_PROGRESS,
  [STATUS.COMPLETED]: STATUS_VALUE.COMPLETED,
};

const RequestStatus = ({ status }: { status: RequestStatusType }) => {
  return (
    <span className={clsx(style.status, statusType[status])}>
      {statusLabels[status]}
    </span>
  );
};

export default RequestStatus;
