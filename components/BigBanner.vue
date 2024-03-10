<template>
  <div class="big-banner" :class="[backgroundImageClass]" :style="style">
    <h2>{{ pageTitle }}</h2>
    <h4>{{ pageTitleEn }}</h4>
    <span></span>
    <PageLoading></PageLoading>
  </div>
</template>
<script>
export default {
  props: {
    pageTitle: {
      type: String,
      default: '',
      required: true,
    },
    pageTitleEn: {
      type: String,
      default: '',
      required: true,
    },
    backgroundImage: {
      type: String,
      default: '',
      required: false,
    }
  },
  computed: {
    style() {
      return "background-image: url('" + this.backgroundImage + "')";
    },
    backgroundImageClass() {
      return "banner-background-"+ this.pageTitleEn.replace(" ", "_").toLowerCase();
    }
  }
}
</script>
<style lang="scss" scoped>
.big-banner {
  width: 100vw;
  height: 460px;

  background-size: cover;
  background-position: center center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before {
    content: "";
    width: 100vw;
    height: 200px;
    mix-blend-mode: darken;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 28%, #000 110%);

    position: absolute;
    bottom: -1px;

    @include small-screen {
      height: 120px;
    }
  }


  h2 {
    font-size: 50px;
    text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.7);
    margin-bottom: 20px;

    @include small-screen {
      font-size: 24px;
      margin-bottom: 8px;
    }
  }
  h4 {
    font-size: 16px;
    text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.7);
    margin-bottom: 20px;

    @include small-screen {
      font-size: 12px;
      margin-bottom: 10px;
    }
  }

  span {
    display: block;
    width: 40px;
    height: 2px;
    background-color: white;

    @include small-screen {
      width: 20px;
    }
  }

  @include small-screen {
    height: 168px;
  }
}
</style>
