<template>
  <section id="hero-section">
    <div class="">
      
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        indicators
        background="#ababab"
        img-width="1024"
        img-height="490"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide v-for="slide in slides" :key="slide.id" :img-src="slide.image.url">
          <span>{{ slide.label }}</span>
          <h1>{{ slide.title }}</h1>
          <h3>{{ slide.subtitle }}</h3>
        </b-carousel-slide>
      </b-carousel>
    </div>

  </section>
</template>

<script>
  export default {
    head() {
      return {
        //link: [{ rel: 'stylesheet', href: 'assets/css/custom.css'}]
      }
    },
    data() {
      return {
        slide: 0,
        sliding: null,
        slides: []
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    },
    async fetch() {
      const response = await fetch('http://35.236.181.91:3000/api/slides')
      const data = await response.json()
      console.log(data.docs[0])
      //this.slides = []
      this.slides = data.docs
    }
  }
</script>

<style lang="scss" scoped>
h1 {
  font-family: 'Noto Serif TC', serif;
}
/*.carousel-item {
  height: 800px;

  @include small-screen {
    height: 490px;
  }
}*/
</style>