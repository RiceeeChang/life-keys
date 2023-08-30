<template>
  <section class="page-content">
    <div class="slogan">
      <hr>
      <h2>將舒適的空間導入生活</h2>
      <p>
        根據不同的時間範圍，我們為每棟建築制定了適合的日常清潔和特殊清潔計畫，以確保清潔工作能符合日/周/年的需求，為建築維持舒適與衛生的環境。
      </p>

      <hr>
    </div>

    <div class="clean-card">
      <div class="l">
        <h4>環境維護管理</h4>
        <ul>
          <li>室內清潔維護管理</li>
          <li>石材清潔維護管理</li>
          <li>垃圾集中清運管理</li>
          <li>資源回收處理管理</li>
          <li>定期除蟲滅鼠管理</li>
          <li>定期社區消毒管理</li>
          <li>戶外環境維護管理</li>
        </ul>
      </div>
      <div class="r">
        <img src="/assets/images/cleaning_service1.webp">
      </div>
    </div>

    <div class="clean-card">
      <div class="l">
        <h4>景觀維護管理</h4>
        <ul>
          <li>植栽修剪安排管理</li>
          <li>防颱防風監控管理</li>
          <li>植栽施肥維護管理</li>
          <li>植栽除蟲維護管理</li>
          <li>落葉清理維護管理</li>
          <li>景觀設施定期維護</li>
          <li>庭園景觀保養維護</li>
        </ul>
      </div>
      <div class="r">
        <img src="/assets/images/cleaning_service2.webp">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'MainPage',
  data() {
    return {
      pageTitle: '清潔服務',
      pageTitleEn: 'Cleaning Service',
      backgroundImage: '/assets/images/service_cleaning_service_banner.webp',
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
.slogan {
  margin-top: 128px;

  hr {
    width: 100vw;
    margin: 18px 0;
    border-color: $main-color;

    position: absolute;
    z-index: -1;
    left: 0;
  }
  h2 {
    width: 480px;
    //padding: 0 100px;
    margin: 0 auto;

    background-color: $main-background-color;

    color: $main-color;
    font-size: 36px;
    line-height: 36px;
    font-weight: 500;
    text-align: center;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;

    box-sizing: border-box;
    max-width: 930px;
    padding: 0 24px;
    margin: 48px auto 30px;

    display: block;
  }

  @include small-screen {
    margin-top: 60px;
    h2 {
      font-size: 20px;
      width: 208px;
    }
    p {
      padding: 0;
      margin: 32px auto 16px;
    }
  }
}

.clean-card {
  box-sizing: border-box;
  max-width: 960px;
  padding: 57px 45px;
  border: 1px $main-color solid;
  border-radius: 8px;
  margin: 80px auto 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @include small-screen {
    width: 100%;
    flex-direction: column;

  }

  .l {
    margin-right: 16px;
    h4 {
      padding-left: 8px;
      color: $main-color;
      font-size: 36px;

      @include small-screen {
        font-size: 24px;
      }

    }
    ul {
      list-style-type: none;

      li {
        padding-left: 8px;
        padding-bottom: 12px;
        border-bottom: 2px #d5b87790 solid;
        margin-bottom: -2px;
        margin-right: 12px;

        font-weight: 400;

        &::before {
          content: url('/assets/images/check_mark.svg');
          margin-right: 4px;
          vertical-align: -9px;
        }
      }

    }
  }
  .r {
    padding-top: 60px;

    @include small-screen {
      order: -1;
      padding-top: 0;
      margin-bottom: 24px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
