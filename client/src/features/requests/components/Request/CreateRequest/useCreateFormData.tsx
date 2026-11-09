import { useState, type FormEvent } from 'react';
import { useCreateRequestMutation } from '../../../api/requestsApi';
import { useNavigate } from 'react-router';

const useCreateFormData = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [createRequest, { isLoading }] = useCreateRequestMutation();
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTitleError('');
    setSubmitError('');

    const trimmedTitle = title.trim();

    if (trimmedTitle.length < 3 || trimmedTitle.length > 100) {
      setTitleError('Title must be between 3 and 100 characters.');
      return;
    }

    if (description.length > 1000) {
      setSubmitError('Description must be no more than 1000 characters.');
      return;
    }

    try {
      const request = await createRequest({
        title: trimmedTitle,
        description: description.trim() || undefined,
      }).unwrap();

      navigate(`/requests/${request.id}`);
    } catch {
      setSubmitError('Could not create the request. Please try again.');
    }
  };

  return {
    title,
    setTitle,
    description,
    setDescription,
    titleError,
    setTitleError,
    submitError,
    setSubmitError,
    isLoading,
    handleSubmit,
  };
};

export default useCreateFormData;
