<template>
  <section class="page-content">
    <ul class="form-tab">
      <li :class="{'active': region=='' }"><a href="/company_archievements">全部</a></li>
      <li :class="{'active': region=='north' }"><a href="/company_archievements/north">北部</a></li>
      <li :class="{'active': region=='middle' }"><a href="/company_archievements/middle">中部</a></li>
      <li :class="{'active': region=='south' }"><a href="/company_archievements/south">南部</a></li>
    </ul>


    <div class="case-wrap">
      <div v-for="c in cases" class="case">
        <div class="thumbnail"><img :src="c.url"></div>
        <h6>{{ c.title }}</h6>
      </div>
    </div>

    <div class="pagination">
      <ol>
        <li class="active"><a>1</a></li>
        <li><a>2</a></li>
        <li><a>3</a></li>
        <li><a>4</a></li>
        <li><a>...</a></li>
        <li><a>16</a></li>
      </ol>
    </div>

  </section>
</template>

<script>
export default {
  layout: 'MainPage',
  data() {
    return {
      pageTitle: '社區實踐',
      pageTitleEn: 'Company Archievements',
      backgroundImage: '/assets/images/company_archievements_banner.webp',
      cases: []
    }
  },
  components: {},
  created() {
    this.$store.commit('page/setPageTitle', this.pageTitle)
    this.$store.commit('page/setPageTitleEn', this.pageTitleEn)
    this.$store.commit('page/setBackgroundImage', this.backgroundImage)
  },
  validate({ params }) {
    const region = params.region

    var valid_regions = [
      undefined, 'north', 'middle', 'south'
    ];

    if (valid_regions.includes(region)) {
      return true
    } else {
      return false
    }
  },
  async asyncData({ params }) {
    var region = params.region
    var pageNumber = params.page_num

    region = (region == undefined) ? "" : region;
    pageNumber = (pageNumber == undefined) ? 1 : pageNumber;

    return { region, pageNumber }
  },
  async fetch() {
    var apiUrl = process.env.API_URL + 'api/cases?limit=15&page='+this.pageNumber;

    if (this.region != '') {
      apiUrl = apiUrl + '&where[region][equals]='+this.region;
    }

    const response = await fetch(apiUrl);
    const data = await response.json();
    this.cases = data.docs;
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
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-around;
  row-gap: 80px;

  .case {
    .thumbnail {
      width: 335px;
      height: 250px;

      img {
        width: 100%;
        height: 100%;
      }
      @include small-screen {
        width: 175px;
        height: 133px;
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
