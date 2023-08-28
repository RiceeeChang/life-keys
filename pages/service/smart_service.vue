<template>
  <section class="page-content">

    <div class="line"></div>
    <div class="service">
      <h3>郵務管理服務</h3>
      <p>透過信件管理系統，由系統自動推播至手機或Mail，通知住戶領取掛號及包裹，或郵務收發、退回等服務。</p>
    </div>

    <div class="line"></div>
    <div class="service">
      <h3>公告管理</h3>
      <p>透過公告管理系統，將政令或管委會公告即時推播，讓住戶無論在哪都能即時掌握社區動態。<br>門禁管理：透過門禁管理系統，進行門禁登錄管理及訪客管理。</p>
    </div>

    <div class="line"></div>
    <div class="service">
      <h3>行政資訊化</h3>
      <p>將社區事務電子化並定期備份進行資料整合，再交由委員會進行保存，記錄社區成長歷程。</p>
    </div>

    <div class="line"></div>
    <div class="service">
      <h3>社區專屬網頁</h3>
      <p>免費設計製作社區專屬識別入口網頁~成立各社區家族入口網頁，社區之公告、會議紀錄、財務報 表、活動花絮、最新訊息⋯等功能，皆可藉由網路無邊際瀏覽，隨時掌握社區動態。</p>
    </div>

    <hr>
  </section>
</template>

<script>
export default {
  layout: 'MainPage',
  data() {
    return {
      pageTitle: '智能服務',
      pageTitleEn: 'Smart Service',
      backgroundImage: '/assets/images/service_smart_service_banner.webp',
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
    margin-top: 24px;

    letter-spacing: 1.5px;
    line-height: 2;
    font-weight: 400;

  }
}
hr {
  width: 100%;
  border-top: 1px #707070 solid;
  margin-top: 80px;
}
</style>
