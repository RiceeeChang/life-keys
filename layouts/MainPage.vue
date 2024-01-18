<template>
  <div>
    <MainHeader />
    <main>
      <BigBanner :page-title="pageTitle" :page-title-en="pageTitleEn" :background-image="backgroundImage"/>
      <section class="content">
        <Breadcrumb :breadcrumb-item="breadcrumbItem"/>
        <nuxt />
      </section>
    </main>
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader';
import MainFooter from '~/components/MainFooter';
import BigBanner from '@/components/BigBanner.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';

export default {
  head() {
    return {
      title: this.headTitle,

    }
  },
  data() {
    return {}
  },
  components: {
    MainHeader,
    MainFooter,
    BigBanner,
    Breadcrumb,
  },
  computed: {
    pageTitle() {
      return this.$store.state.page.pageTitle;
    },
    pageTitleEn() {
      return this.$store.state.page.pageTitleEn;
    },
    backgroundImage() {
      return this.$store.state.page.backgroundImage;
    },
    headTitle() {
      return this.pageTitle + " - " + process.env.SITE_TITLE;
    },
    breadcrumbItem() {
      return {
        text: this.pageTitle
      }
    }
  },
  created() {}
}
</script>
