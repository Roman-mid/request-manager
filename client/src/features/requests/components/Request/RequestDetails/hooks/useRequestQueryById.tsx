import { useMemo } from 'react';

import {
  useGetRequestsQuery,
  useGetRequestByIdQuery,
  requestsApi,
} from '../../../../api/requestsApi';

import { useAppSelector } from '../../../../../../app/store/hooks';

const useRequestByIdQuery = ({ id }: { id: string }) => {
  // Проверяем список заявок в Redux Store
  const selectRequestsResult = useMemo(
    () => requestsApi.endpoints.getRequests.select(),
    [],
  );

  const { data: cachedRequests } = useAppSelector(selectRequestsResult);

  // Подписываемся на список только если он уже загружен
  const { data: requests } = useGetRequestsQuery(undefined, {
    skip: !cachedRequests,
  });

  // Ищем заявку в кэше
  const cachedRequest = requests?.find((request) => request.id === id);

  // Если заявки нет в кэше — запрашиваем её по ID
  const {
    data: fetchedRequest,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetRequestByIdQuery(id ?? '', {
    skip: !id || Boolean(cachedRequest),
  });

  // Приоритет отдаём заявке из кеша
  const request = cachedRequest ?? fetchedRequest;

  return {
    request,
    isLoading,
    isError,
    error,
    refetch,
  };
};

export default useRequestByIdQuery;
