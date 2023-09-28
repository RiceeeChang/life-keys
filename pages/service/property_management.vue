<template>
  <section class="page-content">
    <div class="slogan">
      <hr>
      <h2>三階段精準規劃</h2>
      <p>
        以熱忱的服務態度、嚴格的自我要求、專業的管理經驗，秉持「職人精神」，為建築提供客製化的建議與諮詢。並依法規及社區決議，將社區管理機制朝智慧、自動、系統化前進，而生活多元化的提供與開發，更是我們一直努力的方向。
      </p>

      <hr>
    </div>

    <ul class="arrow">
      <li>前期規劃</li>
      <li>顧問管理</li>
      <li>物業管理</li>
    </ul>

    <div class="list-wrap">
      <div class="list">
        <h6>前期規劃</h6>
        <ul>
          <li>前期物業規劃</li>
          <li>公設圖面建議</li>
          <li>協助社區公設點交</li>
          <li>餐飲設備建議</li>
          <li>行政事務生活</li>
          <li>所需設備規劃建議</li>
          <li>社區規約制定</li>
          <li>公設管理辦法制定</li>
        </ul>
      </div>

      <div class="list">
        <h6>物業顧問</h6>
        <ul>
          <li>空間配置</li>
          <li>公共水電</li>
          <li>動線及管理規劃</li>
          <li>設備規格制定</li>
          <li>設備驗收</li>
          <li>消防評估設計</li>
          <li>物業管理規劃</li>
          <li>商業支援</li>
          <li>設備年檢</li>
          <li>消防設備安全檢修申報</li>
          <li>交屋公設驗收</li>
        </ul>
      </div>

      <div class="list">
        <h6>物業服務</h6>
        <ul>
          <li>行政事務財務</li>
          <li>各空間設備清潔維護</li>
          <li>生活服務</li>
          <li>租售代理</li>
          <li>年度預算</li>
          <li>修繕計畫</li>
          <li>財務管理</li>
          <li>年節活動企劃</li>
          <li>檔案建檔管理</li>
          <li>建物生命週期健檢診斷</li>
          <li>代辦工程修繕維護</li>
        </ul>
      </div>



      <div class="last">
        <div class="list">
          <h6>精緻服務</h6>
          <ul>
            <li>酒店式櫃台服務</li>
            <li>飯店模式管理</li>
          </ul>
        </div>
        <div class="list">
          <h6>銷售合作</h6>
          <ul>
            <li>銷售講習</li>
            <li>接待中心服務</li>
          </ul>
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
      pageTitle: '物業管理',
      pageTitleEn: 'Property Management',
      backgroundImage: '/assets/images/service_property_management_banner.webp',
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
.list-wrap {
  padding: 0 100px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @include small-screen {
    padding: 0;

    flex-direction: column;
    row-gap: 24px;
  }

  @include small-screen {
    .last {
      display: flex;
      flex-direction: row;
      column-gap: 24px;

      .list ul {
        display: flex;
        flex-direction: column;
      }
    }
  }

}
.list {
  padding: 0 30px 24px;
  border-left: 1px $main-color solid;

  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 0;
    height: 108px;
    border: 2px $main-color solid;

    position: absolute;
    left: 0;
  }

  h6 {
    color: $main-color;
    font-size: 24px;
    margin-bottom: 32px;
  }
  ul {
    min-height: 160px;

    list-style-type: none;
    display: flex;
    flex-direction: column;
    row-gap: 24px;

    li {
      &::before {
        content: "";
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-right: 6px;
        background-color: #fff;
        vertical-align: -1px;
      }

      font-weight: 400;
    }

    @include small-screen {
      display: grid;
      grid-template-columns: 1fr 1fr;

      min-height: 80px;
    }
  }


  @include small-screen {
    padding-right: 0;
  }
}
.arrow {
  margin: 108px auto 172px;
  display: flex;

  @include small-screen {
    width: 100%;
    margin-bottom: 72px;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 295px;
    height: 136px;
    background-image: url('/assets/images/property_management1.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    color: #292929;
    font-size: 36px;
    font-weight: 500;

    @include small-screen {
      width: 33%;
      height: 56px;

      font-size: 14px;

    }
  }
  li:nth-child(2) {
    color: $main-color;
    background-image: url('/assets/images/property_management2.svg');
  }
}
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


</style>
