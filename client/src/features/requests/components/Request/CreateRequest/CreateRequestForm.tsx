import Button from '../../Button/Button';
import useCreateFormData from './useCreateFormData';
import styles from './CreateRequestForm.module.scss';
import { Loader } from '../../Loading/Loader';
import Alert from '../../Alert/Alert';

const CreateRequestForm = () => {
  const {
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
  } = useCreateFormData();
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Create request</h2>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label className={styles.label} htmlFor='request-title'>
            Title <span className={styles.required}>*</span>
          </label>
          <input
            className={styles.input}
            id='request-title'
            name='title'
            type='text'
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
              setTitleError('');
            }}
            minLength={3}
            maxLength={100}
            required
            aria-invalid={Boolean(titleError)}
            aria-describedby={titleError ? 'title-error' : undefined}
          />
          {titleError && (
            <p className={styles.fieldError} id='title-error' role='alert'>
              {titleError}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor='request-description'>
            Description
          </label>
          <textarea
            className={styles.textarea}
            id='request-description'
            name='description'
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
              setSubmitError('');
            }}
            maxLength={1000}
            rows={6}
          />
          <span className={styles.characterCount}>
            {description.length}/1000
          </span>
        </div>

        <Button
          title='Create'
          isLoading={isLoading}
          ButtonType='primary'
          ButtonHTMLType='submit'
          onClick={() => {}}
        />
      </form>
      {submitError && <Alert title={submitError} />}
      {isLoading && <Loader />}
    </div>
  );
};

export default CreateRequestForm;
