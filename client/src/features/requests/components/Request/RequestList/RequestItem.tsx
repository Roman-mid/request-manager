import type { Request } from '../../../../../../../shared/types/request';
import { Link } from 'react-router';
import RequestStatus from '../RequestStatus/RequestStatus';
import LocalDateTime from '../../LocalDateTime';
import { useDeleteRequestMutation } from '../../../api/requestsApi';

import style from './Request.module.scss';
import Button from '../../Button/Button';
import Alert from '../../Alert/Alert';

const RequestItem = ({ request }: { request: Request }) => {
  const { id, title, status, createdAt } = request;
  const [deleteRequest, { isLoading, isError }] = useDeleteRequestMutation();

  return (
    <li className={style.item}>
      <Button
        title='Delete'
        isLoading={isLoading}
        ButtonType='delete'
        ButtonHTMLType='button'
        onClick={() => deleteRequest(id)}
        className={style.deleteButton}
      />

      <Link to={`/requests/${id}`} className={style.link}>
        <h3 className={style.title}>{title}</h3>

        <div className={style.info}>
          <p>
            <span>Status</span>
            <RequestStatus status={status} />
          </p>

          <p>
            {/* <span>Created</span> */}
            <LocalDateTime date={createdAt} />
          </p>
        </div>
        {isError && (
          <Alert title='Could not delete this request. Please try again.' />
        )}
      </Link>
    </li>
  );
};

export default RequestItem;
