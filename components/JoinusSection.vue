<template>
  <section id="joinus-section" class="bg-d5b877">
    <div class="section-content">

      <div class="section-title-wrap color-black">
        <h4 class="section-label font-color-333333">JOIN US</h4>
        <h2 class="section-title font-color-333333">菁英招募</h2>
        <p class="joinus-text color-black">我們重視每一位員工，除了有良好工作環境、也提供學習及成長的空間，歡迎優秀的朋友一起加入伯克錸公寓大廈管理維護。</p>
        <a class="joinus-button">加入我們</a>
      </div>

      <img src="/assets/images/joinus.png">

    </div>
  </section>
</template>

<style scoped>
#joinus-section {
  padding-top: 100px;
  padding-bottom: 100px;
  /*height: 500px;*/
}
#joinus-section .section-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#joinus-section .section-title-wrap {
  
}
.bg-d5b877 {
  background-color: #d5b877;
}
.color-black {
  color: #333;
}
.joinus-text {
  font-size: 16px;
  line-height: 24px;
  /*letter-spacing: 1.5px;*/
  width: 310px;

  margin-bottom: 50px;
}
.joinus-button {
  display: block;

  width: 240px;
  height: 60px;

  text-align: center;
  line-height: 60px;

  font-size: 20px;
  color: #fff;
  text-decoration: none;

  background-color: #333;
}
.joinus-button:visited {
  color: #fff;
}
.joinus-button:hover {
  background-color: rgba(51, 51, 51, 0.9);
}
.joinus-button:active {
  background-color: rgba(51, 51, 51, 0.9);
}
.joinus-button:disabled {
  background-color: #ddd;
}
.section-content img {
  width: 50%;
  max-width: 560px;
}
</style>

<script>
  export default {
    head() {
      return {
        //link: [{ rel: 'stylesheet', href: 'assets/css/custom.css'}]
      }
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>