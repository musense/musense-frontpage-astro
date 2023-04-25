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
        <div className={styles['advertising']} >
          <div className={styles['service-header']}>
            <div>廣告投放代理</div>
            <div>Advertising Agency</div>
          </div>
          <div className={styles['service-body']}>
            <div>數位媒禮採購</div>
            <div>專業廣告投放</div>
            <div>行銷宣傳企劃</div>
            <div>成效執行分析</div>
          </div>
        </div>
        <div className={styles['seo-service']} >
          <div className={styles['service-header']}>
            <div>ＳＥＯ網站優化</div>
            <div>SEO Service</div>
          </div>
          <div className={styles['service-body']}>
            <div>關鍵字佈局分析</div>
            <div>網頁問題診斷</div>
            <div>網站程式優化</div>
            <div>社群串接整合</div>
          </div>
        </div>
        <div className={styles['social-media']} >
          <div className={styles['service-header']}>
            <div>社群口碑行銷</div>
            <div>Social Media</div>
          </div>
          <div className={styles['service-body']}>
            <div>市場輿情分析</div>
            <div>社群平台代操</div>
            <div>宣傳議題規劃</div>
            <div>ＫＯＬ網紅宣傳</div>
          </div>
        </div>
        <div className={styles['cis']} >
          <div className={styles['service-header']}>
            <div>數位形象設計</div>
            <div>Digital Image Design</div>
          </div>
          <div className={styles['service-body']}>
            <div>品牌視覺設計</div>
            <div>ＲＷＤ網頁設計</div>
            <div>平面設計包裝</div>
            <div>行銷宣傳圖像</div>
          </div>
        </div>
      </div>

      <div className={styles['why-musense']} />
    </div>
  );
}
