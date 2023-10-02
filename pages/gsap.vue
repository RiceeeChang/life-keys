<template>
  <div class="content">
    <div ref="box" class="box"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.animateOnScroll()
  },

  methods: {
    animateOnScroll() {
      //this.$gsap.to(window, { duration: 2, scrollTo: 1000 })

      this.$gsap.to('.box', {
        x: 500,
        ease: 'Power1.easeInOut',
        scrollTrigger: {
          trigger: '.content',
          pin: true,
          end: 'bottom',
          scrub: true
        }
      })
    }
  }
}
</script>

<style scoped>
.content {
  height: 2000px;
}
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
