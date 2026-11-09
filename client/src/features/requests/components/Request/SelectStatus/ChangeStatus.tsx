import clsx from 'clsx';
import type { RequestStatusType } from '../../../../../../../shared/types/request';
import { STATUS } from '../../../../../../../shared/constants/requestStatus';
import { STATUS_VALUE } from '../../../../../models/status';

import style from './SelectStatus.module.scss';

interface FilterStatusProps {
  status: RequestStatusType;
  isUpdating: boolean;
  handleStatusChange: (status: RequestStatusType) => void;
  className?: string;
}

const ChangeStatus = ({
  status,
  isUpdating,
  handleStatusChange,
  className,
}: FilterStatusProps) => {
  return (
    <div className={clsx(style.selectWrapper, className)}>
      <label htmlFor='request-status'>Change status:</label>

      <select
        id='request-status'
        className={style.select}
        disabled={isUpdating}
        value={status}
        onChange={(event) =>
          handleStatusChange(event.target.value as RequestStatusType)
        }
      >
        <option value={STATUS.NEW}>{STATUS_VALUE.NEW}</option>
        <option value={STATUS.IN_PROGRESS}>{STATUS_VALUE.IN_PROGRESS}</option>
        <option value={STATUS.COMPLETED}>{STATUS_VALUE.COMPLETED}</option>
      </select>
    </div>
  );
};

export default ChangeStatus;
