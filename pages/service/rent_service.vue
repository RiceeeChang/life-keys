<template>
  <section class="page-content">
    <div class="logo">
      <div class="l">
        <img src="/assets/images/br-logo.webp">
      </div>
      <div class="r">
        專業客服諮詢
      </div>
    </div>
    <hr>
    <h2>專業管理您的公寓  讓您的時間更自由並將您的資產運用最大化</h2>

    <p class="d">開辦社區房屋租賃與買賣交易服務，期望能提供客戶租售資訊透明、物業快速媒合、降低交易成本的優質服務。此外，我們亦提供房屋代租代管業務，有效管理客戶閒置資產，提供保值、增值的專業服務。</p>

    <div class="card-wrap">
      <div class="br-card">
        <img src="/assets/images/rent1.svg">
        <div>
          <h6>居住諮詢</h6>
          <p>即時服務 ，即時解決</p>
        </div>
      </div>

      <div class="br-card">
        <img src="/assets/images/rent2.svg">
        <div>
          <h6>社區公告</h6>
          <p>隨時了解自己的社區的狀況</p>
        </div>
      </div>

      <div class="br-card">
        <img src="/assets/images/rent3.svg">
        <div>
          <h6>房屋裝修</h6>
          <p>廚房水管漏水了該怎麼辦 ？</p>
        </div>
      </div>
      <div class="br-card">
        <img src="/assets/images/rent4.svg">
        <div>
          <h6>家宴預約</h6>
          <p>慶生壽宴慶祝大大小小的時刻</p>
        </div>
      </div>
      <div class="br-card">
        <img src="/assets/images/rent5.svg">
        <div>
          <h6>生活用品</h6>
          <p>生活選務在地嚴選品牌</p>
        </div>
      </div>
      <div class="br-card">
        <img src="/assets/images/rent6.svg">
        <div>
          <h6>買賣出租</h6>
          <p>買賣出租不再麻煩 ，精準篩選客戶</p>
        </div>
      </div>
    </div>

    <hr class="mn">
    <div class="rent-section">
      <div class="rent-card">
        <span class="number">01</span>
        <h6>代理招租，增加入住率</h6>
        <ul>
          <li>租賃條件提案</li>
          <li>內部空間診斷</li>
          <li><p>公寓介紹準備工作<br>(攝影、文案撰寫、廣告上線及維護)</p></li>
        </ul>
      </div>
      <div class="rent-card">
        <span class="number">02</span>
        <h6>房客帶看服務</h6>
        <ul>
          <li>證件要求(身分證及公司名片)</li>
          <li>素質審查(良善、易溝通)</li>
        </ul>
      </div>
      <div class="rent-card">
        <span class="number">03</span>
        <h6>嚴格審查過濾與審查</h6>
        <ul>
          <li>經濟能力審查</li>
          <li>背景審查(禁八大、黑道、有前科或背景)</li>
          <li>雙證件要求(身分證及公司名片)</li>
        </ul>
      </div>
      <div class="rent-card">
        <span class="number">04</span>
        <h6>房屋固定開銷透明化</h6>
        <ul>
          <li><p>每月租金及開銷報表<br>製作及客閱</p></li>
        </ul>
      </div>
    </div>

    <hr class="mn">
    <div class="rent-section">
      <div class="rent-card">
        <span class="number">05</span>
        <h6><p>定期租金<br>調整及管理</p></h6>
      </div>
      <div class="rent-card">
        <span class="number">06</span>
        <h6>代理催繳租金</h6>
        <ul>
          <li><p>每月交費前提醒<br>及逾期不繳催促</p></li>
        </ul>
      </div>
      <div class="rent-card">
        <span class="number">07</span>
        <h6>定期建築物巡迴檢查</h6>
        <ul>
          <li><p>每月定期巡視房屋硬體狀況<br>及周遭環境安全</p></li>
          <li>代理抄電及瓦斯度數</li>
        </ul>
      </div>
      <div class="rent-card">
        <span class="number">08</span>
        <h6>全年專人管理</h6>
        <ul>
          <li><p>即時狀況處理<br>(房客反鎖/失訊不聯)</p></li>
          <li><p>硬體水電設備損壞代理維修<br>(房東/房客支付)</p></li>
        </ul>
      </div>
      <div class="rent-card">
        <span class="number">09</span>
        <h6>房客糾紛處理</h6>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  layout: 'MainPage',
  data() {
    return {
      pageTitle: '代租代管',
      pageTitleEn: 'Rent Service',
      backgroundImage: '/assets/images/service_rent_service_banner.webp',
    }
  },
  components: {},
  created() {
    this.$store.commit('page/setPageTitle', this.pageTitle)
    this.$store.commit('page/setPageTitleEn', this.pageTitleEn)
    this.$store.commit('page/setBackgroundImage', this.backgroundImage)
  }
}
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  max-width: 860px;
  margin: 128px auto 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .r {
    width: 240px;
    height: 58px;

    background-image: url('/assets/images/br-logo-bk.webp');

    color: #333;
    font-size: 22px;
    line-height: 54px;
    font-weight: 500;
    text-align: center;
  }

  @include small-screen {
    margin-top: 60px;
    flex-direction: column;
    row-gap: 40px;
  }
}
hr {
  border-top: 1px $main-color solid;
  width: 100vw;

  position: relative;
  left: calc(50% - 50vw);
  margin-bottom: -24px;
  z-index: -1;

  @include small-screen {
    margin-bottom: -14px;
  }
}
h2 {
  color: $main-color;
  font-size: 36px;
  text-align: center;

  display: inline-block;
  width: 100%;
  background-color: #333;

  margin-bottom: 40px;

  @include small-screen {
    font-size: 20px;
    padding: 0 16px;
  }
}
.d {
  font-weight: 400;
  line-height: 1.8;
  max-width: 880px;
  margin: 0 auto 54px;
}
.card-wrap {
  margin-bottom: 80px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 20px;

  .br-card {
    width: 135px;
    height: 480px;
    background-image: url('/assets/images/rent-card-border.svg');
    background-size: 135px 480px;
    background-repeat: no-repeat;

    padding-top: 36px;

    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h6 {
      font-size: 20px;
      font-weight: 400;
      margin-bottom: 24px;
    }
    p {
      width: 20px;
      line-height: 17px;
      font-weight: 400;
    }
  }

  @include small-screen {
    flex-direction: column;
    row-gap: 24px;

    .br-card {
      width: 100%;
      height: 134px;
      padding: 20px;
      background-image: url('/assets/images/rent-card-border-m.svg');
      background-size: 100% 134px;

      flex-direction: row;
      column-gap: 24px;

      div {
        align-items: flex-start;
      }
      h6 {
        margin-bottom: 16px;
      }
      p {
        width: unset;
        letter-spacing: 1px;
        line-height: 1.5;
      }
    }
  }
}

.rent-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  .rent-card {
    max-width: 268px;
    padding-right: 16px;
    padding-bottom: 30px;

    .number {
      display: block;
      width: 44px;
      height: 44px;
      border-radius: 22px;
      background-color: $main-color;
      color: #333;
      font-size: 24px;
      font-weight: 500;
      line-height: 42px;
      text-align: center;
    }
    h6 {
      margin-top: 24px;
      margin-bottom: 20px;

      font-size: 20px;
      font-weight: 400;
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      row-gap: 12px;

      li {
        display: flex;
        font-size: 16px;
        font-weight: 400;
        &::before {
          content: ">";
          margin-right: 4px;
        }
      }
    }
  }

  @include small-screen {
    .rent-card {
      min-width: 300px;
      padding-left: 20px;
      margin-left: 21px;
      border-left: 2px #d5b87699 solid;
      .number {
        margin-left: -44px;
      }
    }
  }
}
.mn {
  @include small-screen {
    display: none;
  }
}
</style>
