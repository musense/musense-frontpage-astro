import React from "react";
import './css/button.css';
import BtnMarketing from "./btnMarketing";
import BtnMarketingWrapper from "./btnMarketingWrapper";

export default function MiscButtonList() {
  return  (
    <>
      <BtnMarketingWrapper position='lower'>
        <BtnMarketing title="回首頁" to="/" name='back-home' />
        <BtnMarketing title="看更多文章" name='see-more' />
      </BtnMarketingWrapper>
    </>
  );;
}
