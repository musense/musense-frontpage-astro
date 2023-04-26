import { useEffect, useRef } from 'react';
import styles from './css/headerScrollLink.module.css'
const navMap = new Map([
  ['about', {
    name: {
      en: 'About',
      ch: '關於陌聲',
    },
  }],
  ['contact', {
    name: {
      en: 'Contact Us',
      ch: '聯絡我們',
    },
  }],
  ['service', {
    name: {
      en: 'Service',
      ch: '服務項目',
    },
  }],
  ['marketing', {
    name: {
      en: 'Marketing',
      ch: '服務項目',
    },
  }],
])

export default function HeaderScrollLink({ currentId, className, offset, to, disable = false }) {
  const targetRef = useRef(null)
  const scrollHandler = () => {
    window.scrollTo({
      top: targetRef.current + offset,
      behavior: 'smooth',
    })
  };
  useEffect(() => {
    if (!disable) {
      let btn;

      if (targetRef.current === null) {
        const target = document.getElementById(to)
        const { top } = target.getBoundingClientRect()
        targetRef.current = top
        btn = document.getElementById(currentId);
        btn.addEventListener('click', scrollHandler)
      }
      const ref = targetRef.current
      return () => {
        ref.removeEventListener('click', scrollHandler)
      }
    }
  }, [targetRef, disable]);
  const color = to === 'marketing' ? 'blue' : 'orange'
  return (
    <div
      id={currentId}
      title={`${to}`}
      className={styles['nav-button']}>
      <div className={`${styles['bubble']} ${styles[color]}`} />
      <div className={styles['nav-text-wrapper']}>
        <div>{navMap.get(to).name.en}</div>
        <div>{navMap.get(to).name.ch}</div>
      </div>
    </div>
  );
}
