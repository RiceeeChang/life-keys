<template>
  <section class="page-content">
    <ul class="form-tab">
      <li class="active">全部</li>
      <li>北部</li>
      <li>中部</li>
      <li>南部</li>
    </ul>


    <div class="case-wrap">
      <div class="case">
        <div class="thumbnail"><img src></div>
        <h6>七月沐樂</h6>
      </div>
    </div>

    <div class="pagination">
      <ol>
        <li><a>1</a></li>
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
    const region = params.region
    return { region }
  }
}
</script>

