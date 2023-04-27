import { useCallback, useEffect, useRef } from 'react';
import styles from './css/headerScrollLink.module.css'
import useShowHeader from './hook/useShowHeader';
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
  ['contactUs', {
    name: {
      en: null,
      ch: null,
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

export default function HeaderScrollLink({
  currentId,
  className,
  name,
  offset,
  to,
  disable = false,
  callbackHandler = null
}) {

  const targetRef = useRef(null)
  const scrollHandler = useCallback(() => {
    // console.log("🚀 ~ file: HeaderScrollLink.jsx:39 ~ scrollHandler ~ callback:", callbackHandler)
    window.scrollTo({
      top: targetRef.current + offset,
      behavior: 'smooth',
    })
    callbackHandler && callbackHandler()

  }, [callbackHandler]);


  useEffect(() => {
    if (!disable) {
      let btn;
      if (targetRef.current === null) {
        const target = document.getElementById(to)
        const { top } = target.getBoundingClientRect()
        targetRef.current = top
        btn = document.getElementById(currentId);
        btn.addEventListener('click', scrollHandler)

        // document.addEventListener('touchmove', ()=>console.log('touchmove!!!!!'))
      }
      const ref = targetRef.current
      return () => {
        ref.removeEventListener('click', scrollHandler)
      }
    }
  }, [targetRef, disable]);
  const color = to === 'marketing' ? 'blue' : 'orange'
  const mainClassName = className ? className : styles['nav-button']
  return (
    <div
      id={currentId}
      title={`${to}`}
      className={mainClassName}>
      <div className={`${styles['bubble']} ${styles[color]}`} />
      <div className={styles['nav-text-wrapper']}>
        <div>{navMap.get(name).name.en}</div>
        <div>{navMap.get(name).name.ch}</div>
      </div>
    </div>
  )
}
