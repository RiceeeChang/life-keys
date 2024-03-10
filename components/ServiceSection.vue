<template>
  <section id="service-section" class="bg-333" ref="serviceSection">
    <div class="section-content">

      <div v-show="isTextSlideUp" :class="{'animation-slide-up': isTextSlideUp}">
        <h4 class="section-label font-color-main">SERVICE</h4>
        <h2 class="section-title font-color-main">服務項目</h2>

        <p class="service-text font-weight-r">伯克錸心繫客戶，以熱忱的服務態度、嚴格的自我要求、專業嚴謹的事務管理經驗，為建物、社區及大樓提供客製化管理規劃建議與專業諮詢，並依法令及規約規定，執行區權會與管委會決議事項，充分發揮智慧化、自動化、系統化的大樓事務管理機制，而多元生活服務的提供與開發，更是持續努力的方向。</p>
      </div>


      <div v-show="isWrapSlideUp" :class="{'service-wrap':true, 'animation-slide-up': isWrapSlideUp}">
        <a href="/service/property_management" class="service-item font-weight-b" style="background-image: url('/assets/images/service1.png');">物業管理</a>
        <a href="/service/security_service"    class="service-item font-weight-b" style="background-image: url('/assets/images/service3.png');">保全服務</a>
        <a href="/service/cleaning_service"    class="service-item font-weight-b" style="background-image: url('/assets/images/service4.png');">清潔服務</a>
        <a href="/service/food_service"        class="service-item font-weight-b" style="background-image: url('/assets/images/service5.png');">餐飲服務</a>
        <a href="/service/electrical_device"   class="service-item font-weight-b" style="background-image: url('/assets/images/service2.png');">設備機電</a>
        <a href="/service/rent_service"        class="service-item font-weight-b" style="background-image: url('/assets/images/service6.png');">代租代管</a>
        <a href="/service/life_service"        class="service-item font-weight-b" style="background-image: url('/assets/images/service7.png');">生活服務</a>
        <a href="/service/smart_service"       class="service-item font-weight-b" style="background-image: url('/assets/images/service8.png');">智能服務</a>
        <div class="service-item dummy-item" style=""></div>
      </div>

      <div class="scroll-down sd1">SCROLL DOWN</div>
      <div class="scroll-down sd2">SCROLL DOWN</div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isTextSlideUp: false,
      isWrapSlideUp: false,
    }
  },
  mounted() {
    this.animateOnScroll()
  },

  methods: {
    animateOnScroll() {

      this.$gsap.to('#service-section', {
        scrollTrigger: {
          trigger: '#service-section',
          start: 'top 80%',
          end: 'bottom',
          onEnter: ()=> {
            this.isTextSlideUp = true;
            setTimeout(()=> {
              this.isWrapSlideUp = true;
            }, 500)
          }
        }
      })
    }

  }
}
</script>

<style lang="scss" scoped>
p {
  font-weight: 400;
}
#service-section {
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 170px;
}

.section-content {
  position: relative;
}

.bg-333 {
  background-color: #333;
}
.service-text {
  max-width: 770px;

  margin-bottom: 80px;

  line-height: 2;
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

  background-size: cover;

  font-size: 36px;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
}

.service-item:hover {
  background: #caa460 !important;
  mix-blend-mode: normal;
  color: #333;
}
.dummy-item {
  background-color: unset;
  height: 0;
}


@media (max-width: 767px) {
  #service-section {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .service-wrap {
    gap: 4px;
    row-gap: 12px;
  }
  .service-item {
    font-size: 24px;
    flex-basis: calc((100vw - 52px) / 2);
    height: calc((100vw - 52px) / 2);
  }
  .service-item:last-child {
    display: none;
  }
}
.scroll-down {
  display: none;
  position: absolute;

  transform: rotate(90deg);
  color: #caa460;
  font-size: 16px;
  font-family: $font-noto-serif-tc;
  letter-spacing: 2.3px;

  @include large-screen {
    display: block;
  }

  &.sd1 {
    top: -100px;
    right: -120px;

  }
  &.sd2 {
    bottom: -190px;
    left: -120px;
  }
}

.animation-slide-up {
  animation: slide-up 1s ease-in-out forwards;
}

@keyframes slide-up {
  from {
    opacity: 0.7;
    transform: translateY(100vh);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
