import { useUpdateRequestStatusMutation } from '../../../../api/requestsApi';
import type { RequestStatusType } from '../../../../../../../../shared/types/request';

const useRequestUpdateStatus = ({ id }: { id: string }) => {
  const [
    updateStatus,
    { isLoading: isUpdatingStatus, isError: isUpdateStatusError },
  ] = useUpdateRequestStatusMutation();

  const handleStatusChange = async (status: RequestStatusType) => {
    if (!id) return;

    try {
      await updateStatus({ id, status }).unwrap();
    } catch (error) {
      console.error('Failed to update request status:', error);
    }
  };

  return {
    isUpdatingStatus,
    isUpdateStatusError,
    handleStatusChange,
  };
};

export default useRequestUpdateStatus;
