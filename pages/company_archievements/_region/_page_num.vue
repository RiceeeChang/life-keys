<template>
  <section class="page-content">
    <ul class="form-tab">
      <li :class="{'active': region=='' }">      <b-link :to="'/company_archievements'">       全部</b-link></li>
      <li :class="{'active': region=='north' }"> <b-link :to="'/company_archievements/north'"> 台北</b-link></li>
      <li :class="{'active': region=='middle' }"><b-link :to="'/company_archievements/middle'">台中</b-link></li>
      <li :class="{'active': region=='south' }"> <b-link :to="'/company_archievements/south'"> 台南</b-link></li>
      <li :class="{'active': region=='kao' }"> <b-link :to="'/company_archievements/kao'">   高雄</b-link></li>
    </ul>

    <div class="case-wrap">
      <div v-for="c in cases" class="case">
        <div class="thumbnail" :style="setbackgroundImage(c.url)"><!--<img :src="c.url">--></div>
        <h6>{{ c.title }}</h6>
      </div>
    </div>

    <b-pagination-nav
      v-model="currentPage"
      :link-gen="linkGen"
      :number-of-pages="totalPages"

      :hide-goto-end-buttons="true"
      :last-number="true"

      :active="true"
      class="my-pagination"
      :use-router="true"
    >
      <template #prev-text>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M24 0H0v24h24z" style="fill:none"/>
          <path d="m15 6 -6 6 6 6" style="stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;fill:none"/>
        </svg>
      </template>
      <template #next-text>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M24 0H0v24h24z" style="fill:none"/>
          <path d="m9 6 6 6-6 6" style="stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;fill:none"/>
        </svg>
      </template>
    </b-pagination-nav>

  </section>
</template>

<script>
export default {
  layout: 'MainPage',
  scrollToTop: false,
  data() {
    return {
      pageTitle: '社區實績',
      pageTitleEn: 'Company Archievements',
      backgroundImage: '/assets/images/company_archievements_banner.webp',
      cases: [],

      currentPage: 1,
      totalPages: 1,
      pageUrl: "/company_archievements/",
    }
  },
  methods: {
    linkGen(pageNum) {
      var url = this.pageUrl;
      var url = pageNum === 1 ? url : url+pageNum;
      return url;
    },
    setbackgroundImage(bk) {
      return "background-image: url('" + encodeURI(bk) + "')";
    },
  },
  components: {},
  validate({ params }) {
    const region = params.region

    if (!isNaN(parseInt(region))) {
      return true;
    }

    var valid_regions = [
      undefined, 'north', 'middle', 'south', 'kao'
    ];

    if (valid_regions.includes(region)) {
      return true
    } else {
      return false
    }
  },
  async asyncData({ params, store }) {
    store.commit('page/setPageTitle', '社區實績')
    store.commit('page/setPageTitleEn', 'Company Archievements')
    store.commit('page/setBackgroundImage', '/assets/images/company_archievements_banner.webp')

    var region = params.region
    var pageNumber = params.page_num

    if (!isNaN(parseInt(region))) {
      pageNumber = region
      region = ""
    } else {
      region = (region == undefined) ? "" : region;
      pageNumber = (pageNumber == undefined) ? 1 : pageNumber;
    }

    return { region, pageNumber }
  },
  async fetch() {
    var apiUrl = process.env.API_URL + 'api/cases?limit=16&page='+this.pageNumber + '&where[show][equals]=show';

    if (this.region != '') {
      apiUrl = apiUrl + '&where[region][equals]='+this.region;
    }

    const response = await fetch(apiUrl);
    const data = await response.json();
    this.cases = data.docs;

    this.totalPages = data.totalPages;
    this.currentPage = data.page;
  },
  mounted() {
    this.pageUrl = (this.region=='') ? this.pageUrl : this.pageUrl+this.region+"/";
  },
  computed: {
    getRegion() {
      return this.region
    }
  }
}
</script>

<style lang="scss" scoped>
.page-content {
  padding-top: 90px;

  @include small-screen {
    padding-top: 60px;
  }
}
.form-tab {
  margin-bottom: 50px;
}
.case-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-around;
  row-gap: 80px;
  column-gap: 12px;

  .case {
    .thumbnail {
      width: 250px;
      max-width: 250px;
      height: 335px;

      background-size: cover;
      background-position: center;

      img {
        width: 100%;
        height: 100%;
      }
      @include small-screen {
        width: 100%;
        max-width: 175px;
        height: 232px;
      }
    }
    h6 {
      font-size: 20px;
      font-weight: 400;
      margin-top: 20px;

      @include small-screen {
        font-size: 16px;
        margin-top: 12px;
      }
    }
  }

  @include small-screen {
    grid-template-columns: 1fr 1fr;
    row-gap: 40px;
  }
}

</style>
