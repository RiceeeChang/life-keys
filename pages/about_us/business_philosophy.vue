<template>
  <main>
    <BigBanner :page-title="pageTitle" :page-title-en="pageTitleEn" :background-image="backgroundImage"/>
    <section class="content">
      <Breadcrumb :breadcrumb-item="breadcrumbItem"/>

      <section class="page-content">
        <div class="slogan-wrap">
          <div class="slogan">
            <h3>伯克錸物業服務團隊</h3>
            <h2>心則</h2>
          </div>
          <div class="spirit">
            <ul>
              <li>發自內心的服務即是唯美。</li>
              <li>誠信的精神、關懷的心意。</li>
              <li>創新的動力、服務的熱忱。</li>
            </ul>
            <ul>
              <li>親切、尊重、委婉是溝通的良方。</li>
              <li>住戶滿意、我勝任愉快。</li>
              <li>工作勝任愉快是我生活之成就。</li>
            </ul>
          </div>

        </div>

        <div class="photo">
          <div><img src="/assets/images/business_philosophy1.webp"></div>
          <div><img src="/assets/images/business_philosophy2.webp"></div>
          <div><img src="/assets/images/business_philosophy3.webp"></div>
          <div><img src="/assets/images/business_philosophy4.webp"></div>
        </div>

      </section>

    </section>
  </main>
</template>



<script>
export default {
  layout: 'default',
  data() {
    return {
      pageTitle: '經營理念',
      pageTitleEn: 'Business Philosophy',
      //backgroundImage: '/assets/images/about_us_business_philosophy_banner.webp',
      backgroundImage: 'https://i.imgur.com/6gSYMp7.jpeg',
    }
  },
  computed: {
    breadcrumbItem() {
      return {
        text: this.pageTitle
      }
    }
  },
  components: {},
  validate() {
    return true
  },
  asyncData() {},
  beforeCreate() {},
  created() {}
}
</script>

<style lang="scss" scoped>
.slogan-wrap {
  margin-top: 128px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @include small-screen {
    margin-top: 60px;
    flex-direction: column;
  }
  .slogan {
    h3 {
      font-size: 16px;
      font-weight: 500;
      margin: 0;
    }
    h2 {
      color: $main-color;
      font-size: 128px;
      margin: 0;
    }

    @include small-screen {
      text-align: center;
      h2 {
        margin-top: 20px;
        font-size: 72px;
      }
    }
  }
  .spirit {
    width: 70%;
    margin-top: 16px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    row-gap: 20px;

    @include small-screen {
      width: 100%;
      margin-top: 36px;
      flex-direction: column;
    }

    ul {
      list-style-type: none;

      display: flex;
      flex-direction: column;
      row-gap: 36px;

      @include small-screen {
        row-gap: 20px;
      }

      li {
        color: $main-color;
        font-size: 20px;
        font-weight: 400;
        display: flex;
        align-items: center;

        &::before {
          content: "";
          display: inline-block;
          width: 1em;
          height: 1em;
          border-radius: 0.5em;
          margin-right: 8px;
          background-color: $main-color;
        }

        @include small-screen {
          font-size: 16px;
        }
      }

    }
  }
}

.photo {
  margin-top: 128px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 12px;
  row-gap: 12px;

  div {
    width: calc(50% - 6px);

    img {
      width: 100%;
    }

    @include small-screen {
      width: 100%;
    }
  }

  @include small-screen {
    margin-top: 60px;
  }
}
</style>
