import BackLink from '../components/Link/BackLink';
import CreateRequestForm from '../components/Request/CreateRequest/CreateRequestForm';

const CreateRequestPage = () => {
  return (
    <section>
      <BackLink path='/requests' title='Back to requests' />

      <CreateRequestForm />
    </section>
  );
};

export default CreateRequestPage;
