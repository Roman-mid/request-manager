import clsx from 'clsx';

import style from './Link.module.scss';
import type { LinkProps } from './Link.types';
import { Link } from 'react-router';
import LeftArrowIcon from '../../../../assets/svg/left-arrow.svg?react';

const BackLink = ({ title, path, blank, className }: LinkProps) => (
  <Link
    to={path}
    className={clsx(style.link, className)}
    target={blank ? '_blank' : '_self'}
  >
    <LeftArrowIcon className={style.icon} /> {title}
  </Link>
);

export default BackLink;
