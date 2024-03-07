<template>
  <div id="back-top-button" class="back-top-button" @click="backToTop()">
    <svg xmlns="http://www.w3.org/2000/svg" width="28.952" height="28.951" viewBox="0 0 28.952 28.951">
      <g data-name="Icon / Preview / Default">
        <path data-name="Rectangle 6848" transform="rotate(-90 14.507 14.444)" style="fill:none"
          d="M0 0h28.889v28.889H0z" />
        <g data-name="Group 12880">
          <path data-name="Path 11940" d="M28.951 0H0v28.951h28.951z" transform="rotate(-90 14.476 14.476)"
            style="fill:none" />
          <path data-name="Path 11941" d="m0 0 6.779 6.779L0 13.558" transform="rotate(-90 12.666 5.066)"
            style="stroke:#333;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;fill:none" />
        </g>
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // 可选的，使滚动平滑进行
      });
    }
  }
}
</script>
<style scoped lang="scss">
.back-top-button {
  position: fixed;
  z-index: 90;

  right: 36px;
  bottom: 36px;
  
  width: 40px;
  height: 40px;
  border-radius: 20px;

  background-color: $main-color;

  display: none;
  align-items: center;
  justify-content: center;

  @include small-screen {
    display: flex;
  }

}
</style>