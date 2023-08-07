<template>
  <div></div>
</template>

<script>
export default {
  layout: 'MainPage',
  data() {
    return {
      pageTitle: '最新消息',
      pageTitleEn: 'News',
      backgroundImage: '/assets/images/news_banner.webp',
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

