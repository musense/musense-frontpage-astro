import styles from './css/logo.module.css';
import logo_white from '@assets/logo/logo_white.webp';
import logo_gray from '@assets/logo/logo_gray.webp';
import { useEffect, useState } from 'react';

export default function Logo({ active, color = 'gray', position = "header" }) {

  const logo = color === 'gray' ? logo_gray : logo_white

  const [prevState, setPrevState] = useState();
  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setPrevState(active)
      }, 500)
    }
  }, [active]);
  return prevState ?
    (
      <div title="Musense Marketing" className={`${styles['logo']} ${styles[position]}`}>
        <img src={logo.src} alt="Musense Marketing" />
      </div>
    ) :
    (
      <a title="Musense Marketing" className={`${styles['logo']} ${styles[position]}`} href="/">
        <img src={logo.src} alt="Musense Marketing" />
      </a>
    )
}
