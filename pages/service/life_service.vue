<template>
  <div>rent</div>
</template>

<script>
export default {
  layout: 'MainPage',
  data() {
    return {
      pageTitle: '溫馨服務',
      pageTitleEn: 'Life Service',
      backgroundImage: '/assets/images/service_life_service_banner.webp',
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
