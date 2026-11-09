import { useParams } from 'react-router';

import RequestNotFound from '../components/Request/RequestError/RequestNotFound';
import { Loader } from '../components/Loading/Loader';
import BackLink from '../components/Link/BackLink';
import RequestDetails from '../components/Request/RequestDetails/RequestDetails';
import RequestError from '../components/Request/RequestError/RequestError';
import useRequestUpdateStatus from '../components/Request/RequestDetails/hooks/useRequestUpdateStatus';
import useRequestDelete from '../components/Request/RequestDetails/hooks/useRequestDelete';
import useRequestByIdQuery from '../components/Request/RequestDetails/hooks/useRequestQueryById';

const RequestDetailsPage = () => {
  const { id } = useParams();
  const reqId = { id: id ?? '' };

  // get a request by ID
  const { request, isLoading, isError, error, refetch } =
    useRequestByIdQuery(reqId);

  // update status
  const { isUpdatingStatus, isUpdateStatusError, handleStatusChange } =
    useRequestUpdateStatus(reqId);

  // delete request
  const { isDeleteLoading, isDeleteError, handleDeleteRequest } =
    useRequestDelete();

  if (isLoading) return <Loader />;

  if (isError && !request) {
    const isNotFound = error && 'status' in error && error.status === 404;

    return isNotFound ? (
      <RequestNotFound />
    ) : (
      <RequestError refetch={refetch} isLoading={isLoading} />
    );
  }

  if (!request) {
    return <RequestNotFound />;
  }

  return (
    <>
      <section>
        <BackLink path='/requests' title='Back to requests' />

        <RequestDetails
          request={request}
          isUpdating={isUpdatingStatus}
          isUpdateStatusError={isUpdateStatusError}
          isDeleteLoading={isDeleteLoading}
          isDeleteError={isDeleteError}
          handleStatusChange={handleStatusChange}
          handleDeleteRequest={handleDeleteRequest}
        />
      </section>
      {(isUpdatingStatus || isDeleteLoading) && <Loader />}
    </>
  );
};

export default RequestDetailsPage;
