import clsx from 'clsx';
import style from './Alert.module.scss';

interface AlertProps {
  title: string;
  className?: string;
}

const Alert = ({ title, className }: AlertProps) => {
  return (
    <p className={clsx(style.deleteError, className)} role='alert'>
      {title}
    </p>
  );
};

export default Alert;
