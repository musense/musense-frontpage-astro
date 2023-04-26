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
      <div id='about' className={styles['about-box']}>
        <div className={styles['slogan']} >
          <div className={styles['text-zhtw']}>傾聽陌聲、傳遞陌生</div>
          <div className={styles['text-en']}>We listen. We care. We transmit.</div>
        </div>
        <div className={styles['top-image']} />
      </div>

      <div className={styles['welcome']} />

      <BubbleBox />

      <BubbleBoxMobile />

      <div className={styles['musense-can-help']} />
      <div className={styles['reply']} />
      <div className={styles['triangle-box']}>
        <div className={styles['triangle-range-orange-right']} />
        <div className={styles['triangle-range-orange-left']} />
      </div>
    </div>
  );
}

function BubbleBoxMobile() {
  return <div className={'bubble-box-mobile'}>
    <div>
      <div
        className={'orange-bubble-product'} >
        要怎麼讓消費者能夠快速地<br />了解我的產品特色？
      </div>
      <div
        className={'orange-bubble-view'}>
        如何在網路上增加瀏覽數，<br />並且讓客人願意付費呢？
      </div>
    </div>
    <div>
      <div
        className={'blue-bubble-seo'} >
        ＳＥＯ是什麼？<br />對我有什麼幫助？
      </div>
      <div
        className={'blue-bubble-time'} >
        為什麼花錢做一堆廣告<br />卻沒有效果？
      </div>
    </div>
  </div>;
}

function BubbleBox() {
  return <div className={'bubble-box'}>
    <div>
      <div
        className={'orange-bubble-left'}
        data-aos='orange-slide-left'
        data-aos-delay='0' >
        如何在網路上增加瀏覽數，<br />並且讓客人願意付費呢？
      </div>
      <div
        className={'orange-bubble-right'}
        data-aos='orange-slide-right'
        data-aos-delay='400' >
        要怎麼讓消費者能夠快速地<br />了解我的產品特色？
      </div>
    </div>
    <div>
      <div
        className={'blue-bubble-left'}
        data-aos='blue-slide-left'
        data-aos-delay='600' >
        ＳＥＯ是什麼？<br />對我有什麼幫助？
      </div>
      <div
        className={'blue-bubble-right'}
        data-aos='blue-slide-right'
        data-aos-delay='1000' >
        為什麼花錢做一堆廣告<br />卻沒有效果？
      </div>
    </div>
  </div>;
}

