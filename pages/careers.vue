<template>

</template>

<template>
  <main>
    <BigBanner :page-title="pageTitle" :page-title-en="pageTitleEn" :background-image="backgroundImage"/>
    <section class="content">
      <Breadcrumb :breadcrumb-item="breadcrumbItem"/>

      <section class="page-content">
        <ul class="careers-tab">
          <li :class="{'active': careerTab=='all' }"><a>全部</a></li>
          <li :class="{'active': careerTab=='full-time' }"><a @click="scrollToFulltime">全職</a></li>
          <li :class="{'active': careerTab=='part-time' }"><a @click="scrollToParttime">兼職</a></li>
        </ul>


        <h3 ref="fulltime">全職</h3>

        <div class="careers-wrap">

          <div v-for="c in careers.fullTime" class="career">
            <b-button class="career-title" v-b-toggle="c.id">{{ c.title }}<span class="cross"></span></b-button>
            <b-collapse :id="c.id">
              <div class="career-content">
                <div>工作內容</div>
                <div><p v-html="c.content"></p></div>
                <a class="readmore" target="_blank" :href="c.detail_url">查看更多</a>
              </div>
            </b-collapse>
          </div>

        </div>

        <h3 ref="parttime">兼職</h3>

        <div class="careers-wrap">

          <div v-for="c in careers.partTime" class="career">
            <b-button class="career-title" v-b-toggle="c.id">{{ c.title }}<span class="cross"></span></b-button>
            <b-collapse :id="c.id">
              <div class="career-content">
                <div>工作內容</div>
                <div><p v-html="c.content"></p></div>
                <a class="readmore" target="_blank" :href="c.detail_url">查看更多</a>
              </div>
            </b-collapse>
          </div>

        </div>


        <div class="join104">
          <h4>加入我們</h4>
          <p>我們重視每一位員工，除了有良好工作環境、也提供學習及成長的空間，歡迎優秀的朋友一起加入伯克錸公寓大廈管理維護</p>
          <a target="_blank" href="https://www.104.com.tw/company/b7bk9e8">前往<img src="/assets/images/104logo_200x200.webp">查看更多</a>
        </div>

      </section>

    </section>
  </main>
</template>


<script>
export default {
  layout: 'default',
  data() {
    return {
      pageTitle: '菁英召募',
      pageTitleEn: 'Careers',
      backgroundImage: '/assets/images/careers_banner.webp',
      careerTab: 'all',
      careers: {
        fullTime: [],
        partTime: [],
      }
    }
  },
  computed: {
    breadcrumbItem() {
      return {
        text: this.pageTitle
      }
    }
  },
  components: {},
  methods: {
    scrollToFulltime() {
      this.$refs.fulltime.scrollIntoView({ behavior: 'smooth' });
    },
    scrollToParttime() {
      this.$refs.parttime.scrollIntoView({ behavior: 'smooth' });
    }
  },
  asyncData({store}) {
    store.commit('page/setPageTitle', '菁英招募')
    store.commit('page/setPageTitleEn', 'Careers')
    store.commit('page/setBackgroundImage', '/assets/images/careers_banner.webp')
  },
  created() {},
  async fetch() {
    console.log('page fetch');
    var apiUrl = process.env.API_URL + 'api/offers?limit=30&sort=order&where[offer_type][equals]=full-time';
    var response = await fetch(apiUrl);
    var data = await response.json();

    for(var i=0 ; i< data.docs.length; i++) {
      let content = data.docs[i].content;
      if (content != undefined)
        data.docs[i].content = content.replace(/(?:\r\n|\r|\n)/g, '<br>');
    }
    this.careers.fullTime = data.docs;


    apiUrl = process.env.API_URL + 'api/offers?limit=30&sort=order&where[offer_type][equals]=part-time';
    response = await fetch(apiUrl);
    data = await response.json();

    for(var i=0 ; i< data.docs.length; i++) {
      let content = data.docs[i].content;
      if (content != undefined)
        data.docs[i].content = content.replace(/(?:\r\n|\r|\n)/g, '<br>');
    }
    this.careers.partTime = data.docs;
  },
}
</script>
<style lang="scss">
.banner-background-careers {
  background-image: url('/assets/images/careers_banner.webp')!important;
  @include small-screen {
    background-image: url('/assets/images/careers_banner_mobile.webp')!important;
  }
}
</style>
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
    font-weight: 400;
    color: $main-color;
    padding: 16px 0;
    border: 1px $main-color solid;
    cursor: pointer;

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
    font-weight: 400;
    width: 15%;
  }
  div:nth-child(2) {

    width: 85%;
    p {
      font-weight: 400;
      line-height: 1.8;
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

.join104 {
  margin-top: 160px;
  margin-bottom: -200px;

  position: relative;
  left: calc(50% - 50vw);

  width: 100vw;
  height: 530px;

  &::before {
    content: "";
    background-color: #f2f2f2;
    background-image: url('/assets/images/join104_background.webp');
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    opacity: 1;
    z-index: -2;
  }


  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 100px;

  h4 {
    color: #333;
    font-size: 32px;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 32px;

    &::after {
      content: "";
      display: block;
      width: 72px;
      border-bottom: 1px $main-color solid;
      margin-top: 12px;
    }
  }
  p {
    max-width: 640px;

    color: #333;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.8;

    margin-bottom: 48px;
  }
  a {
    background-color: #fff;

    width: 336px;
    height: 80px;
    border: 0;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #333;
    font-size: 24px;
    font-weight: 500;
    display: flex;
    align-items: center;

    &:hover, &:visited {
      color: #333;
    }
  }

  @include small-screen {
    margin-top: 40px;
    margin-bottom: -62px;

    padding: 80px 40px;
    a {
      font-size: 20px;
    }
  }
}
</style>
