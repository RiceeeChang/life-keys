<template>
  <section id="performance-section" class="bg-272727">
    <div class="section-content">

      <div class="title-row">
        <div class="section-title-wrap">
          <h4 class="section-label font-color-main">PERFORMACE</h4>
          <h2 class="section-title font-color-main">社區實績</h2>
        </div>
        <div class="line"></div>
        <div>全台灣北中南共有 <span>247</span> 處辦公室</div>
        <div class="line"></div>
        <div>More</div>
      </div>
      
    </div>
  </section>
</template>

<style scoped>
#performance-section {
  padding: 170px 0;
}
.title-row {
  display: flex;
  flex-direction: row;
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