<template>
  <section class="page-content">

  </section>
</template>

<script>
export default {
  layout: 'MainPage',
  data() {
    return {
      pageTitle: '清潔服務',
      pageTitleEn: 'Cleaning Service',
      backgroundImage: '/assets/images/service_cleaning_service_banner.webp',
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
