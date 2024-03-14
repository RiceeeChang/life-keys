<template>
  <section id="hero-section">
    <div class="">

      <b-carousel id="carousel-1" v-model="slide" :interval="5000" indicators img-width="1024" img-height="490"
        style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
        <!-- Text slides with image -->
        <b-carousel-slide v-for="slide in slides" :key="slide.id"
          :style="'background-image: url(' + slide.imageSrc + ')'"><!---->
          <span>{{ slide.label }}</span>
          <h1 v-html="slide.title"></h1>
          <h3>{{ slide.subtitle }}</h3>
        </b-carousel-slide>
      </b-carousel>
    </div>



  </section>
</template>

<script>
export default {
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

    const response = await fetch(process.env.API_URL + 'api/slides?sort=createdAt')
    const data = await response.json()

    for (var i = 0; i < data.docs.length; i++) {
      data.docs[i].title = data.docs[i].title.replace(" ", "<br>");
      data.docs[i].imageSrc = data.docs[i].sizes.full.url;

      if (process.client) {
        const img = new Image();
        img.onload = () => {
          console.log('Image loaded');
        };
        img.src = data.docs[i].imageSrc;
      }
    }

    this.slides = data.docs
  },
  mounted() {
    console.log('herosection');
    for (var i = 0; i < this.slides.length; i++) {
      const img = new Image();
      img.onload = () => {
        console.log('Image loaded');
      };
      img.src = this.slides[i].imageSrc;
    }
  }
}
</script>

<style lang="scss" scoped>
#hero-section {
  height: 800px;

  @include small-screen {
    height: 490px;
  }
}
</style>
