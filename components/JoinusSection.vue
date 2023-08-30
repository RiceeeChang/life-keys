<template>
  <section id="joinus-section" class="bg-d5b877">
    <div class="section-content">

      <div class="section-title-wrap color-black">
        <h4 class="section-label font-color-333333">JOIN US</h4>
        <h2 class="section-title font-color-333333">菁英招募</h2>
        <p class="joinus-text color-black">我們重視每一位員工，除了有良好工作環境、也提供學習及成長的空間，歡迎優秀的朋友一起加入伯克錸公寓大廈管理維護。</p>
        <a class="joinus-button" href="/joinus">加入我們</a>
      </div>

      <img class="desktop" src="/assets/images/joinus.png">
      <img class="mobile" src="/assets/images/joinus_mobile.jpg">
    </div>
  </section>
</template>

<style lang="scss" scoped>
#joinus-section {
  padding-top: 100px;
  padding-bottom: 100px;

  position: relative;
}
#joinus-section .section-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;


}
#joinus-section .section-title-wrap {
  margin-right: 20px;
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
  font-weight: 400;
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
  width: 66%;
  max-width: 660px;
}
img.mobile {
  display: none;
}

@media (max-width: 767px) {
  #joinus-section {
    padding-top: 20px;
    padding-bottom: 60px;
  }
  #joinus-section .section-content {
    padding-left: 20px;
    padding-right: 20px;
  }

  #joinus-section .section-title {
    margin-bottom: 70px;
  }
  img.desktop {
    display: none;
  }
  img.mobile {
    display: block;
  }
  #joinus-section .section-content img {
    position: absolute;
    right: 0;
    top: -50px;

    width: 55%;
  }

  .section-title-wrap {
    width: 100%;
    margin-right: 0;
  }
  .joinus-button {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
