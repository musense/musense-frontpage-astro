import { useCallback, useEffect, useRef } from 'react';
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
      ch: '行銷趨勢',
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

  console.log("🚀 ~ file: HeaderScrollLink.jsx:39 ~ scrollHandler ~ callback:", callbackHandler)
  const targetRef = useRef(null)
  const scrollHandler = useCallback(() => {
    window.scrollTo({
      top: targetRef.current + offset,
      behavior: 'smooth',
    })
    callbackHandler && callbackHandler()

  }, [callbackHandler]);


  useEffect(() => {
    if (!disable) {
      // scroll button
      let btn;
      if (targetRef.current === null) {
        const target = document.getElementById(to)
        const { top } = target.getBoundingClientRect()
        targetRef.current = top
        btn = document.getElementById(currentId);
        btn.addEventListener('click', scrollHandler)

        // document.addEventListener('touchmove', ()=>console.log('touchmove!!!!!'))
      }

      const myBtnRef = btn
      return () => {
        myBtnRef.removeEventListener('click', scrollHandler)
      }
    }
  }, [targetRef, disable]);
  const color = to === 'marketing' ? 'blue' : 'orange'
  const mainClassName = className ? className : styles['nav-button']
  return disable
    ? (<a
      id={currentId}
      href={`${to}`}
      className={mainClassName} >
      <div className={`${styles['bubble']} ${styles[color]}`} />
      <div className={styles['nav-text-wrapper']}>
        <div>{navMap.get(name).name.en}</div>
        <div>{navMap.get(name).name.ch}</div>
      </div>
    </a>)
    : (
      <div
        id={currentId}
        title={`${to}`}
        className={mainClassName} >
        <div className={`${styles['bubble']} ${styles[color]}`} />
        <div className={styles['nav-text-wrapper']}>
          <div>{navMap.get(name).name.en}</div>
          <div>{navMap.get(name).name.ch}</div>
        </div>
      </div >
    )
}
