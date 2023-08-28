<template>
  <section class="page-content">
    <div class="slogan">
      <h3>精緻的社區規劃 迎來尊榮新生活</h3>
      <p>每棟建物有不同特質文化所以形成了每種類型的社區型態如果把它“人性化”也就是所謂人有 高、矮、胖、瘦等不同體態。一位優秀的裁縫師或鞋匠，要滿足美化各種體態的人走得更美更遠， 則一定要量製而訂，並不是一般成衣或便鞋可替代的、因此一家優秀的管理公司要讓每一棟建物穩 健永續成長走的更遠，就必須用心做好整合後的建築物管理維護，也就是針對社區不同特性予以整 合規劃，如此才能使社區相得益彰。</p>
    </div>

    <div class="concept-image">
      <img src="/assets/images/community_planning_concept.svg">
    </div>

    <div class="position">
      <div class="circle">社區<br>定位</div>
    </div>

    <div class="concept-list">
      <div class="line"></div>
      <div class="item"><img src="/assets/images/concept1.svg">對「人」作服務性的管理</div>
      <div class="line"></div>
      <div class="item"><img src="/assets/images/concept2.svg">對「事」作效率性的管理</div>
      <div class="line"></div>
      <div class="item"><img src="/assets/images/concept3.svg">對「物」作維護性的管理</div>
      <div class="line"></div>
      <div class="item"><img src="/assets/images/concept4.svg">對「地」作週期性的管理</div>
      <div class="line"></div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'MainPage',
  data() {
    return {
      pageTitle: '社區規劃',
      pageTitleEn: 'Community Planning',
      backgroundImage: '/assets/images/about_us_community_planning_banner.webp',
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
  padding-top: 248px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-between;
  row-gap: 200px;

  @include small-screen {
    padding-top: 60px;
    row-gap: 100px;
  }


  .slogan {
    width: 50%;
    h3 {
      color: $main-color;
      font-size: 36px;
      margin-bottom: 48px;
    }
    p {
      font-size: 16px;
      font-weight: 300;
      line-height: 2;
      padding-right: 24px;
    }

    @include small-screen {
      width: 100%;
      h3 {
        font-size: 20px;
        margin-bottom: 24px;
      }
      p {
        padding: 0;
      }
    }
  }

  .concept-image {
    @include small-screen {
      order: -1;
      img {
        width: 100%;
      }
    }
  }

  .position {
    width: 50%;

    display:  flex;
    justify-content: center;
    align-items: center;

    @include small-screen {
      width: 100%;
    }
    .circle {
      width: 200px;
      height: 200px;
      border-radius: 100px;
      margin-left: auto;
      margin-right: auto;
      background-color: $main-color;
      color: $main-background-color;
      font-size: 32px;
      font-weight: 500;
      line-height: 50px;

      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;
      &::after {
        content: "";
        width: 116px;
        border-top: 2px $main-color dashed;

        position: absolute;
        right: -148px;
      }

      @include small-screen {
        width: 128px;
        height: 128px;
        font-size: 20px;
        line-height: 24px;

        &::after {
          width: 0;
          height: 40px;
          right: unset;
          border: unset;
          border-left: 2px $main-color dashed;
          bottom: -52px;
        }
      }
    }
  }

  .concept-list {

    margin: 0 auto;
    .line {

      display: flex;
      align-items: center;

      &::before {
        content: "";
        display: inline-block;
        width: 20px;
        border: 2px $main-color solid;
      }
      &::after {
        content: "";
        display: inline-block;
        width: calc(100% - 20px);
        border-top: 1px #707070 solid;
        padding-top: 1px;
      }
    }
    .item {
      padding-right: 24px;
      margin: 40px 0;
      font-size: 20px;
      font-weight: 500;
      vertical-align: 2px;
      img {
        margin-right: 32px;
      }
    }
  }
}
</style>
