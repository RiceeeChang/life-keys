<template>
  <section class="page-content">
    <div class="line"></div>
    <div class="service">
      <h3>精緻生活秘書服務</h3>
      <div>服務項目</div>
      <ul>
        <li>代客叫車</li>
        <li>代叫水電</li>
        <li>代客送洗</li>
        <li>代訂花束</li>
        <li>代訂書報</li>
        <li>代繳費用</li>
        <li>代叫鎖匠</li>
        <li>代客刻印</li>
        <li>旅遊規劃</li>
        <li>代訂票務</li>
        <li>代訂旅館</li>
        <li>藝文活動諮詢</li>
        <li>社區共購</li>
      </ul>
    </div>

    <div class="line"></div>
    <div class="service">
      <h3>貼心管家接待服務</h3>
      <div>服務項目</div>
      <ul>
        <li>訪客接待</li>
        <li>引導服務</li>
        <li>購物推車</li>
        <li>留言服務</li>
        <li>臨時寄物</li>
        <li>24小時喚醒服務</li>
        <li>宴會安排</li>
        <li>安全防護</li>
        <li>災害講習</li>
        <li>貼身保鑣</li>
        <li>隨行翻譯秘書</li>
      </ul>
    </div>

    <div class="line"></div>
    <div class="service">
      <h3>便利生活服務</h3>
      <div>服務項目</div>
      <ul>
        <li>鐘點幫傭</li>
        <li>家庭清潔</li>
        <li>外點餐飲</li>
        <li>租售資訊</li>
        <li>擦車洗車服務</li>
        <li>搬家諮詢服務</li>
        <li>公共空間維護</li>
        <li>環保資源回收</li>
      </ul>
    </div>

    <div class="line"></div>
    <div class="service">
      <h3>健康生活體能服務</h3>
      <div>服務項目</div>
      <ul>
        <li>體適能檢測及健身師資諮詢服務</li>
        <li>特約瑜珈及有氧課程服務</li>
      </ul>
    </div>

    <div class="line"></div>
    <div class="service">
      <h3>現代生活才藝</h3>
      <div>服務項目</div>
      <ul>
        <li>插花班</li>
        <li>書法美術班</li>
        <li>廚藝教室</li>
        <li>兒童生活營</li>
        <li>讀書會</li>
        <li>自然生態營</li>
        <li>藝文DIY</li>
      </ul>
    </div>

    <div class="line"></div>
    <div class="service">
      <h3>時尚生活休閒</h3>
      <div>服務項目</div>
      <ul>
        <li>交誼聽</li>
        <li>咖啡飲品吧台</li>
        <li>LOUNGE BAR</li>
        <li>外燴餐飲調酒</li>
        <li>視聽室</li>
      </ul>
    </div>

    <div class="line"></div>
    <div class="service">
      <h3>代繳費用</h3>
      <p>代繳水、電、電信、路邊停車費用，服務人員於收到單據後，應先確定繳款單據是否過期，並依單 據所示之價格費用，前往金融機構或便利商店繳交費用。</p>
    </div>

    <div class="line"></div>
    <div class="service">
      <h3>提供搬家服務</h3>
      <p>免費提供優良搬家公司諮詢，提供有品質ISO搬家公司為社區住戶服務，包括電梯保護、動線地板之 地墊等防範措施。</p>
    </div>

    <div class="line"></div>
    <div class="service">
      <h3>導覽社區服務</h3>
      <p>住戶搬入社區後一週內，導覽簡介社區提供之服務項目說明，社區入口網頁之簡介項目說明，社區 公共設施使用辦法、空間之介紹導覽。</p>
    </div>

    <div class="line"></div>
    <div class="service">
      <h3>代客郵寄服務</h3>
      <p>交付欲寄郵件之種類於管理服務中心、預計郵資，交予服務人員 之郵件，當日寄出。</p>
    </div>

    <div class="line"></div>
    <div class="service">
      <h3>代客訂花</h3>
      <p>代訂包括外縣市婚喪喜慶之花籃花圈等。</p>
    </div>

    <hr>

  </section>
</template>

<script>
export default {
  layout: 'MainPage',
  data() {
    return {
      pageTitle: '生活服務',
      pageTitleEn: 'Life Service',
      backgroundImage: '/assets/images/service_life_service_banner.webp',
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
.page-content {
  padding-top: 30px;
}
.line {

  display: flex;
  align-items: center;

  margin: 40px 0;

  &::before {
    content: "";
    display: inline-block;
    width: 64px;
    border: 2px $main-color solid;
  }
  &::after {
    content: "";
    display: inline-block;
    width: calc(100% - 64px);
    border-top: 1px #707070 solid;
    padding-top: 1px;
  }
}
.service {
  padding-left: 180px;

  @include small-screen {
    padding: 0;
  }

  div {
    margin-top: 60px;
    margin-bottom: 20px;

    font-weight: 400;
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 12px;

    margin-bottom: 40px;

    li {
      margin-right: 20px;

      &::before {
        content: "";
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-right: 6px;
        background-color: #fff;
        vertical-align: -1px;
      }
    }
  }
  p {
    letter-spacing: 1.5px;
    line-height: 2;
    margin-top: 24px;
  }
}
hr {
  width: 100%;
  border-top: 1px #707070 solid;
  margin-top: 80px;
}
</style>
