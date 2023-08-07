<template>
  <section class="page-content">
    <ul class="form-tab">
      <li class="active"><a>全部</a></li>
      <li><a>北部</a></li>
      <li><a>中部</a></li>
      <li><a>南部</a></li>
    </ul>


    <div class="case-wrap">
      <div v-for="c in cases" class="case">
        <div class="thumbnail"><img :src="c.image"></div>
        <h6>{{ c.name }}</h6>
      </div>
    </div>

    <div class="pagination">
      <ol>
        <li class="active"><a>1</a></li>
        <li><a>2</a></li>
        <li><a>3</a></li>
        <li><a>4</a></li>
        <li><a>...</a></li>
        <li><a>16</a></li>
      </ol>
    </div>

  </section>
</template>

<script>
export default {
  layout: 'MainPage',
  data() {
    return {
      pageTitle: '社區實踐',
      pageTitleEn: 'Company Archievements',
      backgroundImage: '/assets/images/company_archievements_banner.webp',
      cases: []
    }
  },
  components: {},
  created() {
    this.$store.commit('page/setPageTitle', this.pageTitle)
    this.$store.commit('page/setPageTitleEn', this.pageTitleEn)
    this.$store.commit('page/setBackgroundImage', this.backgroundImage)
  },
  validate({ params }) {
    const region = params.region

    var valid_regions = [
      undefined, 'north', 'middle', 'south'
    ];

    if (valid_regions.includes(region)) {
      return true
    } else {
      return false
    }
  },
  async asyncData({ params }) {
    const region = params.region
    return { region }
  },
  async fetch() {
    //const response = await fetch(process.env.API_URL + 'api/slides')
    //const data = await response.json()

    this.cases = [
      {
        id: 1,
        image: "/assets/images/case.webp",
        name: "七月沐樂",
        region: "北部"
      },
      {
        id: 1,
        image: "/assets/images/case.webp",
        name: "七月沐樂",
        region: "北部"
      },
      {
        id: 1,
        image: "/assets/images/case.webp",
        name: "七月沐樂",
        region: "北部"
      },
      {
        id: 1,
        image: "/assets/images/case.webp",
        name: "七月沐樂",
        region: "北部"
      },
      {
        id: 1,
        image: "/assets/images/case.webp",
        name: "七月沐樂",
        region: "北部"
      },
      {
        id: 1,
        image: "/assets/images/case.webp",
        name: "七月沐樂",
        region: "北部"
      },
      {
        id: 1,
        image: "/assets/images/case.webp",
        name: "七月沐樂",
        region: "北部"
      },
      {
        id: 1,
        image: "/assets/images/case.webp",
        name: "七月沐樂",
        region: "北部"
      },
      {
        id: 1,
        image: "/assets/images/case.webp",
        name: "七月沐樂",
        region: "北部"
      },
      {
        id: 1,
        image: "/assets/images/case.webp",
        name: "七月沐樂",
        region: "北部"
      },
      {
        id: 1,
        image: "/assets/images/case.webp",
        name: "七月沐樂",
        region: "北部"
      },
      {
        id: 1,
        image: "/assets/images/case.webp",
        name: "七月沐樂",
        region: "北部"
      },
      {
        id: 1,
        image: "/assets/images/case.webp",
        name: "七月沐樂",
        region: "北部"
      },
      {
        id: 1,
        image: "/assets/images/case.webp",
        name: "七月沐樂",
        region: "北部"
      },
      {
        id: 1,
        image: "/assets/images/case.webp",
        name: "七月沐樂",
        region: "北部"
      },
    ]
  }
}
</script>

<style lang="scss" scoped>
.page-content {
  padding-top: 90px;

  @include small-screen {
    padding-top: 60px;
  }
}
.form-tab {
  margin-bottom: 50px;
}
.case-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-around;
  row-gap: 80px;

  .case {
    .thumbnail {
      width: 335px;
      height: 250px;

      img {
        width: 100%;
        height: 100%;
      }
      @include small-screen {
        width: 175px;
        height: 133px;
      }
    }
    h6 {
      font-size: 20px;
      margin-top: 20px;

      @include small-screen {
        font-size: 16px;
        margin-top: 12px;
      }
    }
  }

  @include small-screen {
    grid-template-columns: 1fr 1fr;
    row-gap: 40px;
  }
}
.pagination {
  margin: 0 auto;
  margin-top: 100px;

  @include small-screen {
    margin-top: 40px;
  }
  ol {
    list-style-type: none;
    display: flex;
    column-gap: 8px;

    li {

      width: 32px;
      height: 32px;
      line-height: 28px;
      text-align: center;
      vertical-align: middle;
      border: 1px #fff solid;

      a {
        font-size: 16px;
      }
    }
    .active {
      color: #333;
      background-color: $main-color;
      border-color: $main-color;
    }
  }
}
</style>
