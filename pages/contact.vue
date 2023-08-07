<template>
  <main>
    <BigBanner :page-title="pageTitle" :page-title-en="pageTitleEn" :background-image="backgroundImage"/>
    <section class="content">
      <Breadcrumb :breadcrumb-item="breadcrumbItem"/>
      <h3>聯絡我們</h3>

      <ul class="form-tab">
        <li class="active">商業諮詢</li>
        <li>公司資訊</li>
      </ul>

      <div class="contact-form">
        <h5>諮詢主題<span>*</span></h5>

        <div class="radio-group">
          <FormRadio v-for="topic in formTopics" :key="topic" :radio-label="topic" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import BigBanner from '@/components/BigBanner.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';
import FormRadio from '@/components/FormRadio.vue';

export default {
  head() {
    return {
      title: this.dynamicTitle,
    }
  },
  data() {
    return {
      pageTitle: '聯絡我們',
      pageTitleEn: 'Contact Us',
      backgroundImage: '/assets/images/contact_banner.webp',
      breadcrumbItem: {
        url: '/contact',
        text: '聯絡我們'
      },

      formTopics: [
        '物業管理服務', '保全服務', '代租代管代管理', '清潔服務', '餐飲服務', '其他', '溫馨服務/家園', '智能服務',
      ],
    }
  },
  components: {
    BigBanner,
    Breadcrumb,
    FormRadio
  },
  computed: {
    dynamicTitle() {
      return this.pageTitle + " - " + process.env.SITE_TITLE;
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  font-size: 24px;
  color: $main-color;

  padding: 8px 16px;
  margin-top: 50px;

  border-left: 2px $main-color solid;

  @include small-screen {
    margin-bottom: 48px;
  }
}

.contact-form {
  background-color: #292929;

  width: 100%;
  padding: 100px 110px;

  h5 {
    margin-bottom: 30px;
  }

  @include small-screen {
    padding: 16px 24px;
  }
}

.radio-group {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 30px;

  @include small-screen {
    grid-template-columns: 1fr;
  }
}
</style>
