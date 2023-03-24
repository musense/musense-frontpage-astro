// import { Link } from 'react-router-dom';
import styles from './css/logo.module.css';
import logo_white from '@assets/logo_white.webp';
import logo_gray from '@assets/logo_gray.webp';

export default function Logo({ color, position = "header" }) {
  color ||= 'gray';

  const logo = color === 'gray' ? logo_gray : logo_white
  return (<a
    title="Musense Marketing"
    className={`${styles['logo']} ${styles[position]}`}
    href="/"
  >
    <img src={logo.src} alt="Musense Marketing" />
  </a>)
}
