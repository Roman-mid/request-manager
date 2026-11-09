import BackLink from '../../Link/BackLink';

const RequestNotFound = () => {
  return (
    <section>
      <BackLink path='/requests' title='Back to requests' />
      <h1 className='mt-24'>Request not found</h1>
    </section>
  );
};

export default RequestNotFound;
