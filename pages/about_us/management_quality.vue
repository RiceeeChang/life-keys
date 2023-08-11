<template>
  <section class="page-content">
    <div class="slogan">
      <hr>
      <h2>為您打造優質社區</h2>
      <p>
        或許，您在擔心我們不熟悉社區狀況，進駐後如何承接、如何運作？您放心！我們也正視這個問題。<br>所以，為了讓您放心，我們有以下計畫，由你我一起帶領社區，發揮彼此共同的力量，串起社區每一段故事，為社區的生活、品質與安全努力，與您共同分享另外一種生活的方式。
      </p>

      <hr>
    </div>

    <div class="card-wrap">
      <div class="card">
        <img src="/assets/images/management_quality1.webp">
        <h3>讓社區放心而家人安心</h3>
        <p>因此我們會─持續落實管理機制、安全機制、環境整潔計畫及社區規劃，提高生活品質，家人住得更安心。</p>
      </div>
      <div class="card">
        <img src="/assets/images/management_quality2.webp">
        <h3>讓社區活絡而住戶和睦</h3>
        <p>因此我們會─定期舉辦節慶活動，必推動社區文化、手作烘焙、親子體驗、體適能檢定等活動，增進社區及家庭的和樂。</p>
      </div>
      <div class="card">
        <img src="/assets/images/management_quality3.webp">
        <h3>讓社區維護而家園永續</h3>
        <p>因此我們會─訂立社區重大工程修繕計畫，依據短中長期目標定期保養、維護，並檢視財務規劃及可行性評估，以達社區永續且開源節流。</p>
      </div>
      <div class="card">
        <img src="/assets/images/management_quality4.webp">
        <h3>讓社區Ｅ化而生活科技</h3>
        <p>因此我們會─將事務執行電腦化，並開發社區資訊公用平台，藉由即時互動的溝通環境，達到掌握社區動態、住戶需求的立即性，提供全方位的優質社區服務，開創管理業全新的經營模式。</p>
      </div>
      <div class="card">
        <img src="/assets/images/management_quality5.webp">
        <h3>讓社區累積而故事永存</h3>
        <p>因此我們會─在日常生活中定期保存社區資料、照片及各項足跡，隨時掌握政府相關政策與各項補助，為社區參賽及經費申請做準備，維持社區永久價值。</p>
      </div>
      <div class="card"></div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'MainPage',
  data() {
    return {
      pageTitle: '品質管理',
      pageTitleEn: 'Management Quality',
      backgroundImage: '/assets/images/about_us_management_quality_banner.webp',
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
.card-wrap {
  margin-top: 180px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 80px;


  @include small-screen {
    margin-top: 80px;

    justify-content: center;
    row-gap: 50px;
  }
  .card {
    background: transparent;
    border: unset;

    width: 335px;
    img {
      width: 100%;
    }
    h3 {
      margin-top: 24px;
      margin-bottom: 18px;

      font-size: 20px;
      font-weight: 500;
    }
    p {
      font-size: 16px;
      font-weight: 100;
      line-height: 1.5;
    }
  }
}
</style>
