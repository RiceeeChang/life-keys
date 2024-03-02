<template>
  <main>
    <HeroSection />
    <ServiceSection />
    <PerformanceSection />
    <NewsSection />
    <JoinusSection />
  </main>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue';
import ServiceSection from '~/components/ServiceSection.vue';
import PerformanceSection from '~/components/PerformanceSection.vue';
import NewsSection from '~/components/NewsSection.vue';
import JoinusSection from '~/components/JoinusSection.vue';

export default {
  name: 'IndexPage',
  components: {
    HeroSection,
    ServiceSection,
    PerformanceSection,
    NewsSection,
    JoinusSection,
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>
