import React from 'react';
import styles from './css/ourService.module.css';

export default function OurService() {
  return (
    <div className={styles['our-service-wrapper']}>
      <div
        id='service'
        className={styles['our-service']}
      />
      <div className={styles['service-box']}>
        <div className={styles['advertising']} />
        <div className={styles['seo-service']} />
        <div className={styles['social-media']} />
        <div className={styles['cis']} />
      </div>

      <div className={styles['why-musense']} />
    </div>
  );
}
