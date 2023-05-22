import './css/button.css';
import BtnMarketing from './btnMarketing';
import BtnMarketingWrapper from './btnMarketingWrapper';

export default function MarketingButtonList() {
  return (
    <>
      <BtnMarketingWrapper position='upper'>
        <BtnMarketing title="廣告代理商" name='advertise' />
        <BtnMarketing title="SEO網站優化" name='seo' />
        <BtnMarketing title="社群行銷" name='social-media' />
        <BtnMarketing title="CIS設計" name='cis' />
        <BtnMarketing title="品牌/口碑行銷" name='brand' />
      </BtnMarketingWrapper>
    </>
  );
}
