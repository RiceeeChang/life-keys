<template>
  <div>rent</div>
</template>

<script>
export default {
  layout: 'MainPage',
  data() {
    return {
      pageTitle: '機電設備',
      pageTitleEn: 'Electrical Device',
      backgroundImage: '/assets/images/service_electrical_device_banner.webp',
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
