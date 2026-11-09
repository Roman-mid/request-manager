export type ButtonType = 'delete' | 'primary';
export type ButtonHTMLType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  title: string;
  isLoading: boolean;
  ButtonType: ButtonType;
  ButtonHTMLType?: ButtonHTMLType;
  onClick?: () => void;
  className?: string;
}
