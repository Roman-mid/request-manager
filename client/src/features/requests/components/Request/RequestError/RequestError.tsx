import Button from '../../Button/Button';
import { Loader } from '../../Loading/Loader';

interface RequestErrorProps {
  refetch: () => void;
  isLoading: boolean;
}

const RequestError = ({ refetch, isLoading }: RequestErrorProps) => {
  return (
    <>
      <section>
        <Button
          isLoading={isLoading}
          ButtonType='primary'
          title='Try again'
          onClick={() => refetch()}
        />
        <h1 className='mt-24'>Failed to load requests.</h1>
      </section>
      {isLoading && <Loader />}
    </>
  );
};

export default RequestError;
