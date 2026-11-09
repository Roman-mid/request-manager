import { useDeleteRequestMutation } from '../../../../api/requestsApi';
import { useNavigate } from 'react-router';

const useRequestDelete = () => {
  const navigate = useNavigate();

  const [
    deleteRequest,
    { isLoading: isDeleteLoading, isError: isDeleteError },
  ] = useDeleteRequestMutation();

  const handleDeleteRequest = async (id: string) => {
    try {
      await deleteRequest(id).unwrap();
      navigate('/requests');
    } catch (error) {
      console.error('Failed to delete request:', error);
    }
  };

  return {
    isDeleteLoading,
    isDeleteError,
    handleDeleteRequest,
  };
};

export default useRequestDelete;
