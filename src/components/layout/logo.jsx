// import { Link } from 'react-router-dom';
import styles from './css/logo.module.css';
import logo_white from '@assets/logo_white.png';
import logo_gray from '@assets/logo_gray.png';

export default function Logo({ color, position = "header" }) {
  color ||= 'gray';

  const Logo = color === 'gray' ? logo_gray : logo_white
  return (<a
    title="Musense Marketing"
    className={`${styles['logo']} ${styles[position]}`}
    href="/"
  >
    <img src={Logo} alt="Musense Marketing" />
  </a>)
}
