import clsx from 'clsx';

import style from './Link.module.scss';
import type { LinkProps } from './Link.types';
import { Link } from 'react-router';

const CustomLink = ({ title, path, blank, className }: LinkProps) => (
  <Link
    to={path}
    className={clsx(style.link, className)}
    target={blank ? '_blank' : '_self'}
  >
    {title}
  </Link>
);

export default CustomLink;
