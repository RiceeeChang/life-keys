<template>
  <div>rent</div>
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
