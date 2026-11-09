import type { Request } from '../../../../../../../shared/types/request';
import LocalDateTime from '../../LocalDateTime';
import RequestStatus from '../RequestStatus/RequestStatus';
import styles from './RequestDetails.module.scss';

const RequestDetailsInfo = ({ request }: { request: Request }) => {
  const { title, description, status, createdAt } = request;

  return (
    <div className={styles.detailss}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description || '-'}</p>
      <div className={styles.metadata}>
        <p className={styles.metadataItem}>
          <b className={styles.label}>Status:</b>
          <RequestStatus status={status} />
        </p>

        <p className={styles.metadataItem}>
          <b className={styles.label}>
            <LocalDateTime date={createdAt} />
          </b>
        </p>
      </div>
    </div>
  );
};

export default RequestDetailsInfo;
