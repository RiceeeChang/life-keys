<template>
  <div>
    <MainHeader v-if="lazyShow" />
    <LazyHeroSection v-if="lazyShow" />
    <LazyServiceSection v-if="lazyShow" />
    <LazyPerformanceSection v-if="lazyShow" />
    <LazyNewsSection v-if="lazyShow" />
    <LazyJoinusSection v-if="lazyShow" />
    <MainFooter v-if="lazyShow" />
  </div>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue';
import ServiceSection from '~/components/ServiceSection.vue';
import PerformanceSection from '~/components/PerformanceSection.vue';
import NewsSection from '~/components/NewsSection.vue';
import JoinusSection from '~/components/JoinusSection.vue';

export default {
  name: 'index',
  layout: "empty",
  components: {
    HeroSection,
    ServiceSection,
    PerformanceSection,
    NewsSection,
    JoinusSection,
  },
  data() {
    return {
      lazyShow: false,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => {
        
        this.lazyShow = true;
      }, 2000)
      setTimeout(() => {
        this.$nuxt.$loading.finish();
      }, 4000)
    })
  }
}
</script>
