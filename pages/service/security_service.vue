<template>
  <div>rent</div>
</template>

<script>
export default {
  layout: 'MainPage',
  data() {
    return {
      pageTitle: '保全服務',
      pageTitleEn: 'Security Service',
      backgroundImage: '/assets/images/service_security_service_banner.webp',
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
