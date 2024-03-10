<template>
  <div v-if="show" class="index-loading">

    <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

    <dotlottie-player src="https://lottie.host/b9892b03-f94f-44bb-a378-8aa8d1716392/SYyP3XmbHR.lottie" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player>

  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  },
  mounted() {
    setTimeout(()=> this.show=false, 2000)
  }
}
</script>

<style scoped lang="scss">
.index-loading {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
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