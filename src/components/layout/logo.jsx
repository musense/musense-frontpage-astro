// import { Link } from 'react-router-dom';
import styles from './css/logo.module.css';

export default function Logo({ color }) {
  color ||= 'gray';
  // return <Link title="Musense Marketing" className={`${styles['logo']} ${styles[color]}`} to="/"/>;
  return <a title="Musense Marketing" className={`${styles['logo']} ${styles[color]}`} href="/">index</a>;
}
