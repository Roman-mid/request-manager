import { useState } from 'react';
import { useGetRequestsQuery } from '../../../api/requestsApi';
import type { RequestStatusType } from '../../../../../../../shared/types/request';

export const useRequestData = () => {
  const [statusFilter, setStatusFilter] = useState<RequestStatusType | 'all'>(
    'all',
  );

  const { data: requests, isLoading, isError, refetch } = useGetRequestsQuery();

  const filteredRequests = (requests ?? []).filter((request) => {
    return statusFilter === 'all' || request.status === statusFilter;
  });

  return {
    setStatusFilter,
    refetch,
    statusFilter,
    isLoading,
    isError,
    hasRequestsData: requests !== undefined,
    filteredRequests,
  };
};
