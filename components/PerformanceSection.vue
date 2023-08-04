<template>
  <section id="performance-section" class="bg-272727">
    <div class="section-content">

      <div class="title-row">
        <div class="section-title-wrap">
          <h4 class="section-label font-color-main">PERFORMACE</h4>
          <h2 class="section-title font-color-main">社區實績</h2>
        </div>
        <div class="line" style="margin-left: 70px; margin-right: 40px;"></div>
        <div class="slogan">全台灣北中南共有 <span class="big-number">247</span> 處辦公室</div>
        <div class="line" style="margin-left: 24px; margin-right: 80px;"></div>
        <a class="more">More <span class="link_arrow"></span></a>
      </div>

      <div class="performance-content">
        <div class="taiwan">
          <img class="mobile" src="/assets/images/taiwan_mobile.svg">
          <img class="desktop" src="/assets/images/taiwan_desktop.svg">
        </div>
        <div class="region north">
          <div class="title1">北區辦公室 <span class="photo-icon"></span> <span class="dotted-line"></span><span class="regional-point"></span></div>
          <div class="title2">台北辦事室  共有<span class="number">98</span>處</div>
        </div>
        <div class="region middle">
          <div class="title1">中區辦公室 <span class="photo-icon"></span> <span class="dotted-line"></span><span class="regional-point"></span></div>
          <div class="title2">台中辦事室  共有<span class="number">91</span>處</div>
        </div>
        <div class="region south">
          <div class="title1">南區辦公室 <span class="photo-icon"></span> <span class="dotted-line"></span><span class="regional-point"></span></div>
          <div class="title2">台南&高雄辦事室  共有<span class="number">58</span>處</div>
        </div>

        <div class="performance-photo-wrap">
          <div class="performance-photo" style="background-image: url('');"></div>
          <div class="performance-photo" style="background-image: url('/assets/images/performance.webp');"></div>
          <div class="performance-photo" style="background-image: url('/assets/images/performance.webp');"></div>
          <div class="performance-photo" style="background-image: url('/assets/images/performance.webp');"></div>
          <div class="performance-photo" style="background-image: url('/assets/images/performance.webp');"></div>
          <div class="performance-photo" style="background-image: url('/assets/images/performance.webp');"></div>
          <div class="performance-photo" style="background-image: url('');"></div>
          <div class="performance-photo" style="background-image: url('/assets/images/performance.webp');"></div>
          <div class="performance-photo" style="background-image: url('/assets/images/performance.webp');"></div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.performance-content {
  position: relative;

  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
}
.title-row .slogan {
  font-size: 28px;
  color: #d5b877;

  display: flex;
  align-items: center;
}

.title-row .slogan .big-number {
  display: inline-block;
  color: #d5b877;
  font-size: 64px;
  line-height: 64px;
  font-weight: 500;

  margin-left: 8px;
  margin-right: 40px;
  margin-bottom: 10px;
}

.performance-content .region {
  position: absolute;
  left: 0;
}
img.mobile {
  display: none;
}

.region .title1 {
  font-size: 32px;

  display: flex;
  align-items: center;
}
.region .title1 .photo-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-left: 8px;
  visibility: hidden;

  background-image: url('/assets/images/photo_icon.svg');
}
.region .title2 {
  color: #d5b877;
  font-size: 20px;
}
.region .number {
  color: #d5b877;
  font-size: 36px;
  font-weight: 800;
}
.dotted-line {
  display: inline-block;
  height: 1px;
  border-bottom: 1px dashed #fff;
  margin: 0 20px;
}
.regional-point {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #d5b877;

  position: relative;
}
.regional-point::after {
  content: "";
  display: inline-block;
  width: 32px;
  height: 32px;
  border: 2px #d5b877 solid;
  border-radius: 50%;

  position: absolute;
  top: -8px;
  left: -8px;
}
.region.north {
  top: 116px;
}
.region.north .dotted-line {
  width: 295px;
}
.region.middle .dotted-line {
  width: 155px;
}
.region.south .dotted-line {
  width: 160px;
}
.region.middle {
  top: 370px;
}
.region.south {
  top: 550px;
}


.performance-content .performance-photo-wrap {
  position: absolute;
  right: 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  row-gap: 20px;
  width: 430px;
}
.performance-photo {
  width: 130px;
  height: 210px;
  background-position: center center;
  background-size: cover;
}

.more {
  display: flex;
  align-items: center;

  font-size: 20px;
  color: #d5b877;

  text-decoration: none;
}
.link_arrow {
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(/assets/images/yellow_arrow.svg) no-repeat center center;

  margin-left: 8px;
}
#performance-section {
  padding: 170px 0;
}
#performance-section .section-title{
  margin-bottom: 0;
}
.title-row {
  display: flex;
  flex-direction: row;
  position: relative;
}
.line {
  border-left: 1px solid #d5b877;
  height: 84px;
}
.bg-272727 {
  background-color: #272727;
}
.service-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  row-gap: 24px;
}
.service-item {

  width: 250px;
  height: 250px;

  background-color: #999;

  font-size: 36px;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 767px) {
  #performance-section {
    padding-top: 54px;
  }
  .title-row {
    flex-direction: column;
  }
  .title-row .line {
    display: none;
  }
  .title-row .slogan {
    font-size: 18px;
  }
  .title-row .slogan .big-number {
    font-size: 42px;
    margin-right: 8px;
  }
  .title-row .more {
    position: absolute;
    top: 10px;
    right: 0;
  }

  .region .title1 .photo-icon {
    visibility: visible;
  }
  .region.region.north {
    top: 16px;
  }
  .region.region.middle {
    top: 192px;
  }
  .region.region.south {
    top: 369px;
  }
  .title1 .dotted-line,  .title1 .regional-point {
    display: none;
  }


  .performance-content .performance-photo-wrap {
    display: none;
  }
  img.mobile {
    display: block;
  }
  img.desktop{
    display: none;
  }
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
