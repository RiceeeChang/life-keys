<template>
  <section class="page-content">
    <div class="slogan">
      <hr>
      <h2>七大項維養服務</h2>
      <p>
        我們擁有專業的設備維護經驗和卓越的管理能力，致力於確保設備的順利運作，加強其安全性和延長使用年限，讓您的社區經久不衰，繼續為居民提供卓越的服務和便利。
      </p>
      <hr>
    </div>
    <div class="mandala">
      <img src="/assets/images/electrical_device1.svg">
    </div>
  </section>
</template>

<script>
export default {
  layout: 'MainPage',
  data() {
    return {
      pageTitle: '設備機電',
      pageTitleEn: 'Electrical Device',
      backgroundImage: '/assets/images/service_electrical_device_banner.webp',
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
    font-weight: 100;
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
.mandala {
  margin: 144px auto 150px;

  @include small-screen {
    margin-top: 60px;
    margin-bottom: 0;

    img {
      width: 100%;
    }
  }
}
</style>
