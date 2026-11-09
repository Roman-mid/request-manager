import type {
  Request,
  RequestStatusType,
} from '../../../../../../../shared/types/request';

import styles from './RequestDetails.module.scss';
import ChangeStatus from '../SelectStatus/ChangeStatus';

import RequestDetailsInfo from './RequestDetailsInfo';
import Button from '../../Button/Button';
import Alert from '../../Alert/Alert';

interface RequestDetailsProps {
  request: Request;
  isUpdating: boolean;
  isUpdateStatusError: boolean;
  isDeleteLoading: boolean;
  isDeleteError: boolean;
  handleStatusChange: (status: RequestStatusType) => void;
  handleDeleteRequest: (id: string) => void;
}

const RequestDetails = ({
  request,
  isUpdating,
  isUpdateStatusError,
  isDeleteLoading,
  isDeleteError,
  handleStatusChange,
  handleDeleteRequest,
}: RequestDetailsProps) => {
  return (
    <div className={styles.details}>
      <RequestDetailsInfo request={request} />

      <ChangeStatus
        className='mt-24'
        status={request.status}
        isUpdating={isUpdating}
        handleStatusChange={handleStatusChange}
      />
      {isUpdateStatusError && (
        <Alert title='Failed to update status. Please try again.' />
      )}

      <Button
        title='Delete'
        isLoading={isDeleteLoading}
        ButtonType='delete'
        ButtonHTMLType='button'
        onClick={() => handleDeleteRequest(request.id)}
        className={styles.deleteButton}
      />

      {isDeleteError && (
        <Alert title='Could not delete this request. Please try again.' />
      )}
    </div>
  );
};

export default RequestDetails;
