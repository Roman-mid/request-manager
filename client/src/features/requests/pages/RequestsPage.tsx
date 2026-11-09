import { RequestList } from '../components/Request/RequestList/RequestList';
import { useRequestData } from '../components/Request/RequestList/useRequestData';
import FilterStatus from '../components/Request/SelectStatus/FilterStatus';
import RequestError from '../components/Request/RequestError/RequestError';
import { Loader } from '../components/Loading/Loader';
import CustomLink from '../components/Link/Link';

const RequestsPage = () => {
  const {
    setStatusFilter,
    refetch,
    statusFilter,
    isLoading,
    isError,
    hasRequestsData,
    filteredRequests,
  } = useRequestData();

  if (isLoading) {
    return <Loader />;
  }

  if (isError && !hasRequestsData) {
    return <RequestError isLoading={isLoading} refetch={refetch} />;
  }

  return (
    <section>
      <div className='container'>
        <CustomLink path='/requests/new' title='Create Request' />

        <FilterStatus
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />

        <RequestList filteredRequests={filteredRequests} />
      </div>
    </section>
  );
};

export default RequestsPage;
