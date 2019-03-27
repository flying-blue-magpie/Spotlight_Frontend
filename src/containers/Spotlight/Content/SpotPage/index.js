import React from 'react';
import styled from 'styled-components';

const Feature = styled.div`
  position: relative;
`;

const FeatureImage = styled.img`
  display: block;
  height: 220px;
  width: 100%;
  object-fit: cover;
`;

const FeatureInfo = styled.div`
  position: absolute;
  width: calc(100% - 2 * 12px);
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background-color: rgba(255, 255, 255, .7);
`;

const SpotPage = ({ match }) => (
  <div>
    <Feature>
      <FeatureImage src="https://images.zi.org.tw/kenalice/2018/12/18230156/1545145316-f3e11951575df2215de376fd211c8747.jpg" />
      <FeatureInfo>
        寧夏夜市
        <i className="fas fa-heart">666</i>
      </FeatureInfo>
    </Feature>
    <div>景點介紹</div>
    <p>最好逛、最美味…都好理解，最環保夜市冠軍又是怎麼來的呢? 原來【寧夏夜市】響應環保署及台北市政策，內用攤位全面禁用一次性及美耐皿餐具，更換成玻璃、陶、瓷及不鏽鋼材質的環保餐具，部分外帶店家也推出不分裝優惠、鼓勵客戶攜帶可重複使用器皿；如果以每個人來夜市至少吃個五攤、八攤來看，一趟下來光是免洗筷、塑膠湯匙等丟棄式餐具就不知製造了多少污染，藉由夜市店家帶動消費者使用環保餐具、逐步改變餐飲習慣，加強食安及環保意識、改善餐飲環境，經年累月下來，保護地球的成效很可觀，大啖夜市小吃的時候也為環保盡一份力，真的是大推啦~</p>
    <div>地址</div>
    <p>寧夏夜市位於捷運雙連站(R12)與中山站(R11、G14)之間，步行約8-10分鐘即可到達；開車前來的話，可以將車停在最近的蓬萊國小地下停車場</p>
    <div>電話</div>
    <p>0912345678</p>
    <div>網址</div>
    <a href="https://kenalice.tw/blog/post/42366268" target="_blank">https://kenalice.tw/blog/post/42366268</a>
  </div>
);

export default SpotPage;
