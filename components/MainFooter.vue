<template>
  <footer class="bg-1a1a1a font-color-fff">

    <div class="section-content">
      <img class="margin-right-50 footer-logo-large" src="/assets/images/footer_logo.png"/>
      <img class="margin-right-50 footer-logo-small" src="/assets/images/footer_logo_207x53.png"/>

      <div class="main-phone">
        <p class="margin-bottom-16">伯克錸物業管理顧問有限公司</p>
        <p>04-2472-8880 | max@life-keys.com.tw</p>
      </div>

      <div class="margin-left-auto part-phone">
        <div class="phone-wrap margin-bottom-16">
          <div>臺中 04-2472-8880</div>
          <div>臺南 06-297-1878</div>
          <div>臺北 02-8522-9229</div>
          <div>高雄 07-225-7999</div>
        </div>

        <div class="font-color-d5b877 ">服務時間 09：00 - 18：00  歡迎與我們聯繫</div>
      </div>

    </div>
    <!-- <p class="bg-000 text-align-center">&copy; 2023 伯克錸物業管理顧問有限公司</p> -->

    <BackToTop></BackToTop>
  </footer>
</template>

<script>
import BackToTop from '~/components/BackToTop';

export default {
  components: {
    BackToTop,
  },
}
</script>

<style scoped>
footer .section-content {
  /*padding-left: 0;*/
  padding-top: 100px;
  padding-bottom: 100px;

  display: flex;
  align-items: flex-end;
}
.phone-wrap {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  row-gap: 10px;
  column-gap: 32px;
}
.bg-1a1a1a {
  background-color: #1a1a1a;
}
.font-color-fff {
  color: #fff;
}
.font-color-d5b877 {
  color: #d5b877;
}
.margin-right-50 {
  margin-right: 50px;
}
.margin-left-auto {
  margin-left: auto;
}
.margin-bottom-16 {
  margin-bottom: 16px;
}
.text-align-center {
  text-align: center;
}
.bg-000 {
  background-color: #000;
}

.footer-logo-small {
  display: none;
}

@media (max-width: 767px) {
  footer .section-content {
    flex-direction: column;
    align-items: flex-start;

    padding: 50px 24px;
  }

  .footer-logo-large {
    display: none;
  }
  .footer-logo-small {
    display: block;
  }

  .margin-left-auto {
    margin-left: 0;
  }


  .main-phone {
    margin-top: 16px;
    margin-bottom: 60px;
  }
  .phone-wrap {
    margin-bottom: 54px;
  }
}

.main-phone p {
  font-weight: 400;
}
.phone-wrap div {
  font-weight: 400;
}
</style>
