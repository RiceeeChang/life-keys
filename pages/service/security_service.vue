<template>
  <section class="page-content">
    <div class="t">
      <div class="slogan">
        <h2>守護日常，日常守護</h2>
        <p>我們擁有豐富的管理經驗，針對住宅、辦公、商場、廠辦及大型事業等需求，規劃最佳的管理模式。以不同場域的特性結合智慧科技，使勤務之安全性、多元性及應變能力得到提升。</p>
      </div>
      <div class="photo">
        <img src="/assets/images/security_service1.svg">
      </div>

    </div>

    <div class="section">
      <div class="b">
        <img src="/assets/images/security_service2.svg">

        <div class="p">
          <h3>Twenty-four Seven勤務管理中心</h3>
          <p>
            藉由高階主管會議參與、督導及客戶滿意度訪談服務，搭配日夜勤務中心客服專線，建立完整的系統化管控機制，達到24-7的全年無休服務。落實<br>
            <span class="fq"></span><b>現場第一、顧客第一、行動第一</b><span class="rq"></span>的企業標語。
          </p>
        </div>
      </div>
    </div>


  </section>
</template>

<script>
export default {
  layout: 'MainPage',
  data() {
    return {
      pageTitle: '保全服務',
      pageTitleEn: 'Security Service',
      backgroundImage: '/assets/images/service_security_service_banner.webp',
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

.t {
  padding-left: 120px;
  padding-top: 56px;
  padding-bottom: 128px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @include small-screen {
    padding-left: 0;
    padding-bottom: 50px;
    flex-direction: column;
  }

  .slogan {
    width: 380px;
    h2 {
      color: $main-color;
      font-size: 36px;
      margin-bottom: 40px;
    }
    p {
      font-size: 16px;
      font-weight: 100;
    }

    @include small-screen {
      margin-top: 32px;
      h2 {
        font-size: 24px;
        margin-bottom: 24px;
      }
    }
  }
  .photo {
    order: -1;
    padding: 24px;
    img {
      @include small-screen {
        width: 100%;
      }
    }
  }

}

.section {
  background-color: #1a1a1a;
  position: relative;
  left: calc(50% - 50vw);
  width: 100vw;
  margin-bottom: -200px;

  display: flex;
  justify-content: center;

  @include small-screen {
    margin-bottom: -160px;
  }
}
.b {
  width: 100%;
  max-width: 1140px;

  padding-top: 192px;
  padding-bottom: 192px;
  padding-left: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;


  @include small-screen {
    padding: 50px 24px;
    flex-direction: column;
    align-items: center;
  }
  img {
    @include small-screen {
      width: 200px;
    }
  }

  .p {
    width: 536px;
    h3 {
      color: $main-color;
      font-size: 36px;
      margin-bottom: 40px;
    }
    p {
      font-size: 16px;
      font-weight: 100;

      .fq {
        &::after {
          content: url('/assets/images/security_service3.svg');
          display: inline-block;
          vertical-align: 12px;
        }
      }
      .rq {
        &::after {
          content: url('/assets/images/security_service3.svg');
          display: inline-block;
          transform: rotate(180deg);
          vertical-align: -12px;
        }
      }
      b {
        color: $main-color;
        font-size: 20px;
        font-weight: 400;
      }
    }

    @include small-screen {
      width: 100%;
      h3 {
        margin-top: 40px;
        font-size: 24px;
      }
    }
  }
}
</style>
