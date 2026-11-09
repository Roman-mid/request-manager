import type { Request } from '../../../../../../../shared/types/request';
import RequestItem from './RequestItem';
import style from './Request.module.scss';

interface RequestListProps {
  filteredRequests: Request[];
}

export const RequestList = ({ filteredRequests }: RequestListProps) => {
  return (
    <>
      {filteredRequests.length === 0 ? (
        <p>No requests found.</p>
      ) : (
        <ul className={style.list}>
          {[...filteredRequests].reverse().map((request) => (
            <RequestItem key={request.id} request={request} />
          ))}
        </ul>
      )}
    </>
  );
};
