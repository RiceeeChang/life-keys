<template>
  <section class="page-content">
    <ul class="careers-tab">
      <li :class="{'active': careerTab=='all' }"><a href="">全部</a></li>
      <li :class="{'active': careerTab=='full-time' }"><a href="">全職</a></li>
      <li :class="{'active': careerTab=='part-time' }"><a href="">兼職</a></li>
    </ul>


    <h3>全職</h3>

    <div class="careers-wrap">
      <div class="career">
        <b-button class="career-title" v-b-toggle="'performance-menu'">總幹事<span class="cross"></span></b-button>
        <b-collapse id="performance-menu">
          <div class="career-content">
            <div>工作內容</div>
            <div><p>1. 召開會議並執行會議決議事項 <br>2. 指揮監督所屬員工推行會務與業務 <br>3. 規畫財務、安全、環境、設備等管理事項</p></div>
            <a class="readmore">查看更多</a>
          </div>
        </b-collapse>
      </div>

      <div class="career">
        <b-button class="career-title" v-b-toggle="''">保全人員/警衛<span class="cross"></span></b-button>
        <b-collapse id="">
          <div class="career-content">
            <div>工作內容</div>
            <div><p>1. 召開會議並執行會議決議事項 <br>2. 指揮監督所屬員工推行會務與業務 <br>3. 規畫財務、安全、環境、設備等管理事項</p></div>
            <a class="readmore">查看更多</a>
          </div>
        </b-collapse>
      </div>

    </div>

    <h3>兼職</h3>

    <div class="careers-wrap">
      <div class="career">
        <b-button class="career-title" v-b-toggle="''">櫃台接待人員<span class="cross"></span></b-button>
        <b-collapse id="">
          <div class="career-content">
            <div>工作內容</div>
            <div><p>1. 召開會議並執行會議決議事項 <br>2. 指揮監督所屬員工推行會務與業務 <br>3. 規畫財務、安全、環境、設備等管理事項</p></div>
            <a class="readmore">查看更多</a>
          </div>
        </b-collapse>
      </div>

      <div class="career">
        <b-button class="career-title" v-b-toggle="''">秘書<span class="cross"></span></b-button>
        <b-collapse id="">
          <div class="career-content">
            <div>工作內容</div>
            <div><p>1. 召開會議並執行會議決議事項 <br>2. 指揮監督所屬員工推行會務與業務 <br>3. 規畫財務、安全、環境、設備等管理事項</p></div>
            <a class="readmore">查看更多</a>
          </div>
        </b-collapse>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  layout: 'MainPage',
  data() {
    return {
      pageTitle: '菁英召募',
      pageTitleEn: 'Careers',
      backgroundImage: '/assets/images/careers_banner.webp',

      careerTab: 'all',
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
.careers-tab {
  list-style-type: none;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;

  width: 100%;
  max-width: 480px;
  margin: 120px auto 16px;

  @include small-screen {

    margin-top: 50px;
  }

  li {
    display: block;
    text-align: center;
  }
  li a {
    display: block;
    font-size: 20px;
    font-weight: 300;
    color: $main-color;
    padding: 16px 0;
    border: 1px $main-color solid;

    @include small-screen {
      font-size: 16px;
      padding: 10px 0;
    }
  }

  .active a {
    font-weight: 400;
    color: #333;
    background-color: $main-color;
  }
}

h3 {
  color: $main-color;
  font-size: 24px;
  font-weight: 400;

  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  margin-top: 48px;
  margin-bottom: 24px;

  border-left: 2px $main-color solid;

  @include small-screen {

  }
}


span.cross {
  $cross-color: #fff;

  position: relative;
  display: inline-block;
  vertical-align: 0%;
  box-sizing: border-box;
  width: 16px;
  height: 16px;

  &::before, &::after {
    content: "";
    position: absolute;

    background-color: $cross-color;
    box-sizing: border-box;
    border-radius: 1px;
    transition: transform 0.25s ease-out;
  }
  &::before {
    top: 0;
    left: calc(50% - 1px);
    width: 2px;
    height: 100%;
  }
  &::after {
    top: calc(50% - 1px);
    left: 0;
    width: 100%;
    height: 2px;
  }
}
.not-collapsed .cross {
  &::before {
    transform: rotate(-90deg);
  }
}
.career {
  background-color: #292929;
  margin-bottom: 16px;
  /*padding: 24px;*/
}
.career-title {
  width: 100%;
  padding: 24px;
  border: none;
  border-radius: 0;
  box-shadow: none;

  background-color: transparent;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 24px;
  font-weight: 300;

  @include small-screen {
    font-size: 16px;
  }
}

.career-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 48px;

  padding: 48px 0;
  margin: 0 24px;
  border-top: 1px #707070 solid;

  div:first-child {
    font-weight: 100;
    width: 15%;
  }
  div:nth-child(2) {

    width: 85%;
    p {
      font-weight: 100;
    }
  }

  @include small-screen {
    flex-direction: column;
    row-gap: 12px;

    padding-top: 16px;
    padding-bottom: 40px;

    div:first-child {
      width: 100%;
    }
    div:nth-child(2) {
      width: 100%;
    }
  }
}

.readmore {
  display: inline-block;

  padding: 20px 76px;
  margin: 0 auto;

  font-size: 20px;
  font-weight: 400;
  color: #333;
  background-color: $main-color;

  @include small-screen {
    margin-top: 20px;
  }
}
</style>
