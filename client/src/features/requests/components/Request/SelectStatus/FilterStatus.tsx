import type { RequestStatusType } from '../../../../../../../shared/types/request';
import { STATUS } from '../../../../../../../shared/constants/requestStatus';
import { STATUS_VALUE } from '../../../../../models/status';

import style from './SelectStatus.module.scss';

interface FilterStatusProps {
  statusFilter: RequestStatusType | 'all';
  setStatusFilter: (status: RequestStatusType | 'all') => void;
}

const FilterStatus = ({ statusFilter, setStatusFilter }: FilterStatusProps) => {
  return (
    <div className={style.selectWrapper}>
      <label htmlFor='status-filter' className={style.label}>
        Filter by status
      </label>

      <select
        id='status-filter'
        className={style.select}
        value={statusFilter}
        onChange={(event) =>
          setStatusFilter(event.target.value as RequestStatusType | 'all')
        }
      >
        <option value='all'>All statuses</option>
        <option value={STATUS.NEW}>{STATUS_VALUE.NEW}</option>
        <option value={STATUS.IN_PROGRESS}>{STATUS_VALUE.IN_PROGRESS}</option>
        <option value={STATUS.COMPLETED}>{STATUS_VALUE.COMPLETED}</option>
      </select>
    </div>
  );
};

export default FilterStatus;
