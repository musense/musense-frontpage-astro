import React, { useEffect, useState } from 'react';
import styles from './css/about.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 50, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms);
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <div className={styles['about-us']}>
      <div className={styles['bg']} />
      <div id='about'  className={styles['about-box']}>
        <div className={styles['slogan']} />
        <div className={styles['top-image']} />
      </div>

      <div className={styles['welcome']} />

      <div className={'bubble-box'}>
        <div>
          <div
            className={'orange-bubble-left'}
            data-aos='orange-slide-left'
            data-aos-delay='0'
          />
          <div
            className={'orange-bubble-right'}
            data-aos='orange-slide-right'
            data-aos-delay='400'
          />
        </div>
        <div>
          <div
            className={'blue-bubble-left'}
            data-aos='blue-slide-left'
            data-aos-delay='600'
          />
          <div
            className={'blue-bubble-right'}
            data-aos='blue-slide-right'
            data-aos-delay='1000'
          />
        </div>
      </div>

      <div className={styles['musense-can-help']} />
      <div className={styles['reply']} />
      <div className={styles['triangle-box']}>
        <div className={styles['triangle-range-orange-right']} />
        <div className={styles['triangle-range-orange-left']} />
      </div>
    </div>
  );
}

