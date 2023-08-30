<template>
  <section class="page-content">
    <div class="slogan">
      <hr>
      <h2>將熟悉的味道融入日常</h2>
      <p>
        忙碌的生活中，回到家的當下只想賴在沙發什麼也不想做，但您飢餓的身子卻逼著您起來煮飯讓他進食。撥通電話吧！社區的吧檯及宴會廳，隨時為您服務！<br>
        行政主廚介紹：為您隆重介紹我們的行政主廚，怕菜單一成不變嗎？放心，我們會不定期更新菜單，滿足您多變的味蕾。
      </p>

      <hr>
    </div>

    <div class="card-wrap">
      <div class="food-card">
        <div class="l">
          <h3>早餐吧</h3>
          <p>太陽高掛，宅在家中也能享受社區網美Brunch的悠閒氛圍，與美食和陽光共度輕松時光，讓你充分感受舒適與美好的結合！</p>
        </div>
        <div class="r">
          <img src="/assets/images/food_service1.webp">
        </div>
      </div>

      <div class="food-card">
        <div class="l">
          <h3>宴會．簡餐</h3>
          <p>朋友來訪，享受著舒適的時刻，您不必為下廚煩惱。別忘了，您可以從行政主廚的菜單中挑選，品味出色的美食，為您和朋友帶來獨一無二的味覺饗宴！</p>
        </div>
        <div class="r">
          <img src="/assets/images/food_service2.webp">
        </div>
      </div>

      <div class="food-card">
        <div class="l">
          <h3>輕食．下午茶</h3>
          <p>文青的您，肚子雖然不餓，但何妨選本書來杯美式咖啡，再搭配一份精緻三明治，讓文字與美食的結合，為您帶來愉悅的閱讀時光和美味的享受！</p>
        </div>
        <div class="r">
          <img src="/assets/images/food_service3.webp">
        </div>
      </div>

      <div class="food-card">
        <div class="l">
          <h3>飲品．調酒</h3>
          <p>想要放鬆身心，享受微醺之夜嗎？讓我為您的愛人點一杯清爽的Mojito，帶來獨特的風味和愉悅的氛圍，讓您倆共同沉浸在愛與悠閒的美好時刻中！</p>
        </div>
        <div class="r">
          <img src="/assets/images/food_service4.webp">
        </div>
      </div>

      <div class="background-circle c1"></div>
      <div class="background-circle c2"></div>
      <div class="background-circle c3"></div>
    </div>

  </section>
</template>

<script>
export default {
  layout: 'MainPage',
  data() {
    return {
      pageTitle: '餐飲服務',
      pageTitleEn: 'Food Service',
      backgroundImage: '/assets/images/service_food_service_banner.webp',
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
.card-wrap {
  margin-top: 88px;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 36px;

  position: relative;
}
.food-card {
  background-color: #4c4c4c;
  width: 735px;
  padding: 24px;
  border-radius: 10px;

  display: flex;
  flex-direction: row;

  @include small-screen {
    width: 100%;
    flex-direction: column;
  }
  .l {
    h3 {
      color: $main-color;
      font-size: 24px;
      font-weight: 400;

      margin-bottom: 10px;
    }
    p {
      font-weight: 400;
      line-height: 1.8;
    }
  }
  .r {
    width: 344px;
    margin-left: 24px;

    @include small-screen {
      order: -1;

      width: 100%;
      margin: 0;
      margin-bottom: 24px;
      img {
        width: 100%;
      }
    }
  }
}

.background-circle {
  $circle-radius: 272px;
  width: $circle-radius;
  height: $circle-radius;
  border: 1px $main-color solid;
  border-radius: calc($circle-radius / 2);

  position: absolute;
  z-index: -1;

  @include small-screen {
    display: none;
  }
}
.background-circle.c1 {
  top: -24px;
  right: -36px;
}
.background-circle.c2 {
  top: 468px;
  left: -12px;
}
.background-circle.c3 {
  bottom: -72px;
  right: -32px;
}
</style>
