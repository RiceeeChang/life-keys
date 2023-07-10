<template>
  <section id="service-section" class="bg-333">
    <div class="section-content">

      <h4 class="section-label font-color-main">SERVICE</h4>
      <h2 class="section-title font-color-main">服務項目</h2>

      <p class="service-text font-weight-r">伯克錸心繫客戶，以熱忱的服務態度、嚴格的自我要求、專業嚴謹的事務管理經驗，為建物、社區及大樓提供客製化管理規劃建議與專業諮詢，並依法令及規約規定，執行區權會與管委會決議事項，充分發揮智慧化、自動化、系統化的大樓事務管理機制，而多元生活服務的提供與開發，更是持續努力的方向。</p>

      <div class="service-wrap">
        <div class="service-item font-weight-b" style="background-image: url('/assets/images/service1.png');">物業管理</div>
        <div class="service-item font-weight-b" style="background-image: url('/assets/images/service2.png');">設備機電</div>
        <div class="service-item font-weight-b" style="background-image: url('/assets/images/service3.png');">保全服務</div>
        <div class="service-item font-weight-b" style="background-image: url('/assets/images/service4.png');">清潔服務</div>
        <div class="service-item font-weight-b" style="background-image: url('/assets/images/service5.png');">餐飲服務</div>
        <div class="service-item font-weight-b" style="background-image: url('/assets/images/service6.png');">代租代管</div>
        <div class="service-item font-weight-b" style="background-image: url('/assets/images/service7.png');">生活服務</div>
        <div class="service-item font-weight-b" style="background-image: url('/assets/images/service8.png');">智能服務</div>
        <div class="service-item dummy-item" style=""></div>
      </div>
    </div>
    
  </section>
</template>

<style scoped>
#service-section {
  padding-top: 100px;
  padding-bottom: 170px;
}

.bg-333 {
  background-color: #333;
}
.service-text {
  width: 770px;

  margin-bottom: 80px;
}
.service-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  gap: 4px;
  row-gap: 24px;
}
.service-item {

  width: 250px;
  height: 250px;

  background-color: #000;
  mix-blend-mode: luminosity;

  font-size: 36px;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
}
.dummy-item {
  background-color: unset;
  height: 0;
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