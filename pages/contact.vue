<template>
  <main>
    <BigBanner :page-title="pageTitle" :page-title-en="pageTitleEn" :background-image="backgroundImage"/>
    <section class="content">
      <Breadcrumb :breadcrumb-item="breadcrumbItem"/>
      <h3>聯絡我們</h3>

      <ul class="form-tab">
        <li :class="{active: contactTab=='form'}" @click="changeTab('form')">商業諮詢</li>
        <li :class="{active: contactTab=='info'}" @click="changeTab('info')">公司資訊</li>
      </ul>

      <div v-if="contactTab=='form'" class="contact-form">
        <h5>諮詢主題<span>*</span></h5>

        <form>
          <div class="radio-group">
            <FormRadio v-for="topic in formTopics" :key="topic.value" :radio-label="topic.label" :radio-value="topic.value"/>
          </div>

          <div class="fillment-wrap">
            <div class="fillment-group">
              <label>姓名<span>*</span></label>
              <input type="text" name="name" placeholder="請輸入姓名" v-model="contactFormData.name" autocomplete="off" required>
            </div>
            <div class="fillment-group">
              <label>信箱<span>*</span></label>
              <input type="text" name="mail" placeholder="請輸入信箱" v-model="contactFormData.mail" autocomplete="off" required>
            </div>
            <div class="fillment-group">
              <label>電話<span>*</span></label>
              <input type="text" name="phone" placeholder="請輸入電話" v-model="contactFormData.phone" autocomplete="off" required>
            </div>
            <div class="fillment-group">
              <label>方便聯絡時段<span>*</span></label>
              <input type="text" name="time" placeholder="請輸入時段" v-model="contactFormData.period" autocomplete="off" required>
            </div>
            <div class="fillment-group">
              <label>社區/公司名稱<span>*</span></label>
              <input type="text" name="unit-name" placeholder="請輸入社區公司名稱" v-model="contactFormData.unit" autocomplete="off" required>
            </div>
            <div class="fillment-group">
              <label>社區/公司地址<span>*</span></label>
              <input type="text" name="unit-address" placeholder="請輸入社區公司地址" v-model="contactFormData.address" autocomplete="off" required>
            </div>

            <div class="fillment-group">
              <label>諮詢內容<span>*</span></label>
              <textarea id="require-content" placeholder="請輸入諮詢內容" v-model="contactFormData.content" autocomplete="off" required></textarea>
            </div>
          </div>

          <button class="form-submit" type="submit" @click="submitForm">送出</button>

        </form>

      </div>

      <div v-if="contactTab=='info'" class="contact-form">
        <div class="info-table">
          <div class="col">
            <div class="dr">
              <div class="dt">產業類別</div>
              <div class="dd">保全樓管相關業</div>
            </div>

            <div class="dr">
              <div class="dt">產業敘述</div>
              <div class="dd">大樓物業管理維護保全相關業</div>
            </div>

            <div class="dr">
              <div class="dt">資本額</div>
              <div class="dd">1000萬元 <a>經濟部商業司查詢</a></div>
            </div>

            <div class="dr">
              <div class="dt">員工人數</div>
              <div class="dd">800人</div>
            </div>
          </div>

          <div class="col">
            <div class="dr">
              <div class="dt">聯絡人</div>
              <div class="dd">林小姐</div>
            </div>

            <div class="dr">
              <div class="dt">電話</div>
              <div class="dd">04-2472-8880</div>
            </div>

            <div class="dr">
              <div class="dt">傳真</div>
              <div class="dd">04-2472-8801</div>
            </div>

            <div class="dr">
              <div class="dt">地址</div>
              <div class="dd">台中市南屯區五權西路二段131號5樓之1</div>
            </div>
          </div>
        </div>

        <hr />

        <div class="address-wrap">
          <div class="address">
            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d910.2272410074938!2d120.65052852852884!3d24.139834998644776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693dba512b205d%3A0x737aef7f95e0ea71!2zNDA45Y-w5Lit5biC5Y2X5bGv5Y2A5LqU5qyK6KW_6Lev5LqM5q61MTMx6Jmf!5e0!3m2!1szh-TW!2stw!4v1691508802401!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <h5>臺中總公司地址</h5>
            <div><span class="address-point-icon"></span>台中市南屯區五權西路二段131號5樓之1</div>
            <div><span class="phone-icon"></span>04-2472-8880</div>
            <div><span class="fax-icon"></span>04-2472-8801</div>
          </div>

          <div class="address">
            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.3955643432573!2d121.4426174753772!3d25.05457867780304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a62aac660ead%3A0xdcb04453e9e608a8!2zMjQy5Y-w54Gj5paw5YyX5biC5paw6I6K5Y2A5Lit5Y6f6LevNTUy6JmfMTA!5e0!3m2!1szh-TW!2suk!4v1702079960334!5m2!1szh-TW!2suk" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <h5>臺北辦事處地址</h5>
            <div><span class="address-point-icon"></span>台北市新莊區中原路552號10樓</div>
            <div><span class="phone-icon"></span>02-8522-9229</div>
            <div><span class="fax-icon"></span>02-8522-9221</div>
          </div>

          <div class="address">
            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.71107718022!2d120.16731001195559!3d22.997649579104415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e761aacdf0d59%3A0x209c446de0d2300!2zNzA45Y-w5Y2X5biC5a6J5bmz5Y2A5oW25bmz6LevNTcx6Jmf!5e0!3m2!1szh-TW!2stw!4v1691511509919!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <h5>臺南辦事處地址</h5>
            <div><span class="address-point-icon"></span>台南市安平區慶平路571號11樓</div>
            <div><span class="phone-icon"></span>06-297-1878</div>
            <div><span class="fax-icon"></span>06-297-1877</div>
          </div>

          <div class="address">
            <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.7148197405627!2d120.30767841194735!3d22.627122179367216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e05edb55c81bd%3A0xe258b8a38ac5114!2zODAw6auY6ZuE5biC5paw6IiI5Y2A5rCR5qyK5LiA6LevMjUx6Jmf!5e0!3m2!1szh-TW!2stw!4v1691511722499!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <h5>高雄辦事處地址</h5>
            <div><span class="address-point-icon"></span>高雄市新興區民權一路251號4樓之2</div>
            <div><span class="phone-icon"></span>07-225-7999</div>
            <div><span class="fax-icon"></span>02-224-3388</div>
          </div>

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
        {
          label: '物業管理服務',
          value: 'property_management_service',
        },
        {
          label: '保全服務',
          value: 'security_service',
        },
        {
          label: '代租代管代管理',
          value: 'rent_service',
        },
        {
          label: '清潔服務',
          value: 'cleaning_service',
        },
        {
          label: '餐飲服務',
          value: 'food_service',
        },
        {
          label: '溫馨服務/家園',
          value: 'life_service',
        },
        {
          label: '其他',
          value: 'other',
        },
        {
          label: '智能服務',
          value: 'smart_service',
        },
      ],

      contactTab: 'form',
      contactFormData: {
        name: '',
        mail: '',
        phone: '',
        period: '',
        unit: '',
        address: '',
        content: '',
      }
    }
  },
  components: {
    BigBanner,
    Breadcrumb,
    FormRadio
  },
  created() {
    this.$store.commit('page/setPageTitle', this.pageTitle)
    this.$store.commit('page/setPageTitleEn', this.pageTitleEn)
    this.$store.commit('page/setBackgroundImage', this.backgroundImage)
  },
  mounted() {},
  computed: {
    dynamicTitle() {
      return this.pageTitle + " - " + process.env.SITE_TITLE;
    }
  },
  methods: {
    changeTab(val) {
      this.contactTab = val;
    },
    async submitForm(event) {
      event.preventDefault();
      console.log(this.contactFormData)
      var apiUrl = process.env.API_URL + 'api/contact';

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.contactFormData),
        });

        const result = await response.json();
        alert('發送成功！');
      } catch (error) {
        console.error("Error:", error);
      }
    },
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

    font-size: 16px;
    font-weight: 400;
    span {
      color: $main-color;

    }
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
.fillment-wrap {
  margin-top: 100px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 50px;
  row-gap: 50px;

  @include small-screen {
    margin-top: 36px;
  }
}
.fillment-group {
  display: flex;
  flex-direction: column;

  width: calc((100% - 50px) / 2);

  @include small-screen {
    width: 100%;
  }

  label {
    margin-bottom: 16px;

    font-size: 16px;
    font-weight: 400;

    span {
      color: $main-color;
    }
  }

  input, textarea {
    background-color: #ddd;

    padding: 24px 20px;
    border: 2px #959595 solid;
    border-radius: 6px;

    color: #333;
    font-size: 16px;
  }

  textarea {
    height: 200px;
  }


  &:last-child {
    flex-basis: 100%;
  }
}

.form-submit {
  display: block;

  background-color: $main-color;

  color: #333;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;

  padding: 20px 100px;
  border: 1px #ddd solid;
  margin: 75px auto 0;

  @include small-screen {
    margin-top: 48px;
    margin-bottom: 48px;
  }
}

.info-table {
  display: flex;
  flex-direction: row;
  column-gap: 72px;
  row-gap: 36px;

  @include small-screen {
    flex-direction: column;
  }

  .col {
    display: flex;
    flex-direction: column;
    row-gap: 36px;

    padding: 0;

    .dr {
      display: flex;
      flex-direction: row;
      column-gap: 32px;

      .dt, .dd {
        font-weight: 100;
      }
      .dt {
        width: calc((100% - 32px) * 0.2);
        min-width: 64px;
      }
    }
  }
}

hr {
  margin: 70px 0;
  border-color: #707070;
}

.address-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  column-gap: 72px;
  row-gap: 80px;

  margin-bottom: 64px;

  .address {
    width: calc((100% - 72px) / 2);

    @include small-screen {
      width: 100%;
    }

    .map {
      width: 100%;
      height: 280px;
    }

    h5 {
      font-size: 24px;
      font-weight: 400;
      margin: 32px 0 24px;
    }
    div {
      font-size: 16px;

      span {
        margin-right: 8px;
      }
    }

    div:nth-child(4), div:nth-child(5) {
      display: inline-block;
    }
    div:last-child {
      margin-left: 24px;
    }
  }
}
span.address-point-icon {
  &::before {
    content: url(/assets/images/address_point_icon.svg);
    vertical-align: middle;
  }
}
span.phone-icon {
  &::before {
    content: url(/assets/images/phone_icon.svg);
    vertical-align: middle;
  }
}
span.fax-icon {
  &::before {
    content: url(/assets/images/fax_icon.svg);
    vertical-align: middle;
  }
}
</style>
