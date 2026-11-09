import clsx from 'clsx';

import style from './Button.module.scss';
import type { ButtonProps, ButtonType } from './Button.types';

const styleButton: { [key in ButtonType]: string } = {
  delete: style.deleteButton,
  primary: style.primaryButton,
};

const Button = ({
  title,
  isLoading,
  className,
  ButtonType,
  ButtonHTMLType = 'button',
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={clsx(styleButton[ButtonType], className)}
      type={ButtonHTMLType}
      aria-label={title}
      disabled={isLoading}
      onClick={onClick}
    >
      {isLoading ? 'In progress...' : title}
    </button>
  );
};

export default Button;
