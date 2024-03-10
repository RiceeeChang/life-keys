<template>
  <div v-if="loading" class="index-loading">

    <div class="logo">
      <img src="/BrandLogo.svg">
    </div>

    <div class="progressive-bar"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
    increase(num) {

    }
  }
}
</script>

<style scoped lang="scss">
.index-loading {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100dvh;
  padding-bottom: 100px;

  background-color: #333;

  .logo {
    img {
      width: 335px
    }

    @include small-screen {
      img {
        width: 280px;
      }
    }
  }

  .progressive-bar {
    width: 100px;
    height: 2px;

    background-color: #bab1a3;

    &::after {
      content: "";
      display: block;
      //width: 40px;
      height: 2px;

      background-color: #cca855;

      animation-name: progress-bar-animation;
      animation-duration: 3s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    }
  }
}

@keyframes progress-bar-animation {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}
</style>