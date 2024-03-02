<template>
  <section class="page-content">

    <ul class="form-tab">
      <li v-for="(item, key) in categoryList" :key="key" :class="{'active': category==item.value }"><b-link :to="item.url" :no-prefetch="true">{{ item.text }}</b-link></li>
    </ul>

    <select class="category-select" v-model="category" @change="selectCategory">
      <option value="">全部</option>
      <option value="lastest">最新消息</option>
      <option value="report">媒體報導</option>
      <option value="event">活動花絮</option>
      <option value="education">教育訓練</option>
      <option value="evaluation">評比佳績</option>
    </select>

    <div class="news-list">

      <div v-for="news in newsList" class="news">
        <span class="tag">{{ news.tag }}</span>
        <h3><a :href="news.url">{{ news.title }}</a></h3>
        <span class="date">{{ news.dateString }}</span>
      </div>
    </div>

    <b-pagination-nav
      v-model="currentPage"
      :link-gen="linkGen"
      :number-of-pages="totalPages"

      :hide-goto-end-buttons="true"
      :last-number="true"

      :active="true"
      class="my-pagination"
      :use-router="true"
    >
      <template #prev-text>
        <svg width="24" height="24" viewBox="0 0 24 24" :style="showPrevText">
          <path d="M24 0H0v24h24z" style="fill:none"/>
          <path d="m15 6 -6 6 6 6" style="stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;fill:none"/>
        </svg>
      </template>
      <template #next-text>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M24 0H0v24h24z" style="fill:none"/>
          <path d="m9 6 6 6-6 6" style="stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;fill:none"/>
        </svg>
      </template>
    </b-pagination-nav>

  </section>
</template>

<script>
import { format } from 'date-fns';

export default {
  layout: 'MainPage',
  scrollToTop: false,
  data() {
    return {
      pageTitle: '最新消息',
      pageTitleEn: 'News',
      backgroundImage: '/assets/images/news_banner.webp',
      category: 'all',
      categoryList: {
        all: {
          value: '',
          url: '/news',
          text: '全部'
        },
        lastest: {
          value: 'lastest',
          url: '/news/lastest',
          text: '最新消息'
        },
        report: {
          value: 'report',
          url: '/news/report',
          text: '媒體報導'
        },
        event: {
          value: 'event',
          url: '/news/event',
          text: '活動花絮'
        },
        education: {
          value: 'education',
          url: '/news/education',
          text: '教育訓練'
        },
        evaluation: {
          value: 'evaluation',
          url: '/news/evaluation',
          text: '評比佳績'
        },
      },
      newsList: [],

      currentPage: 1,
      totalPages: 1,

      pageUrl: "/news/",
      pageUrlPrev: "",
      pageUrlNext: "",
    }
  },

  methods: {
    linkGen(pageNum) {
      var url = this.pageUrl;
      var url = pageNum === 1 ? url : url+pageNum;
      return url;
    },
    selectCategory() {
      console.log(this.category)
      this.$router.push('/news/'+this.category);
    }
  },
  components: {},
  computed: {
    showPrevText() {
      if (this.totalPages == 1) {
        return {
          display: 'none'
        };
      } else {
        return '';
      }
    }
  },
  validate({ params }) {
    const category = params.cat;

    // 如果cat是數字表示是頁碼
    if (!isNaN(parseInt(category))) {
      return true;
    }

    var valid_value = [
      undefined, 'lastest', 'report', 'event', 'education', 'evaluation'
    ];

    if (valid_value.includes(category)) {
      return true
    }
    return false
  },
  // 瀏覽器渲染之前的生命週期
  async asyncData({ params, store }) {
    store.commit('page/setPageTitle', '最新消息')
    store.commit('page/setPageTitleEn', 'News')
    store.commit('page/setBackgroundImage', '/assets/images/news_banner.webp')

    var category = params.cat
    var pageNumber = params.page_num

    if (!isNaN(parseInt(category))) {
      pageNumber = category
      category = "";
    } else {
      category = (category == undefined) ? "" : category;
      pageNumber = (pageNumber == undefined) ? 1 : pageNumber;
    }

    return { category, pageNumber }
  },
  created() {},
  async fetch() {
    var limit = 10;
    var apiUrl = process.env.API_URL + 'api/posts?limit=' + limit+'&page=' + this.pageNumber + '&where[show][equals]=show';

    if (this.category != '') {
      apiUrl = apiUrl + '&where[category][equals]='+this.category;
    }

    const response = await fetch(apiUrl);
    const data = await response.json();
    this.newsList = data.docs;

    for(var i=0; i<this.newsList.length; i++) {
      var item = this.newsList[i];
      this.newsList[i]['tag'] = this.categoryList[item.category].text;

      var d = new Date(item.createdAt);
      this.newsList[i]['dateString'] = format(d, 'yyyy/MM/dd');
      this.newsList[i]['url'] = "/news/post/"+item.id;
    }

    this.totalPages = data.totalPages;
    this.currentPage = data.page;
  },
  mounted() {
    this.pageUrl     = (this.category=='') ? this.pageUrl : this.pageUrl+this.category+"/";
    this.pageUrlPrev = this.currentPage>1 ?  this.pageUrl+this.category+"/"+(this.currentPage-1) : '';
    this.pageUrlNext = this.currentPage<this.lastPage ?  this.pageUrl+this.category+"/"+(this.currentPage+1) : '';
  },
}
</script>

<style lang="scss" scoped>
.form-tab {
  margin-top: 50px;

  @include small-screen {
    display: none;
  }
}


.news-list {
  .news {
    padding: 24px 0;
    border-bottom: 1px #959595 solid;

    display: flex;
    flex-direction: row;
    align-items: center;

    .tag {
      background-color: $main-color;

      width: 72px;
      height: 30px;
      margin-right: 20px;

      color: #333;
      font-size: 14px;
      line-height: 30px;
      font-weight: 500;
      text-align: center;

    }
    h3 {
      width: calc(100% - 204px);
      margin: 0;
      font-size: 16px;
      font-weight: 400;

      a {
        font-size: inherit;
        font-weight: inherit;
        line-height: 1.8;
      }
    }
    .date {
      width: 84px;
      margin-left: auto;

      font-size: 16px;
      color: #959595;
      text-align: right;
    }

    @include small-screen {
      flex-wrap: wrap;
      row-gap: 24px;

      .tag {
        order: 1;
      }
      h3 {
        width: 100%;
        order: 3;
      }
      .date {
        order: 2;
      }
    }

  }
}

.category-select {
  display: none;

  color: #d5b877;
  font-size: 16px;
  font-weight: 400;

  width: 100%;
  height: 40px;
  padding: 4px 16px;
  border-radius: 6px;
  border: 1px #959595 solid;
  margin: 48px 0 24px;

  position:relative;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #292929 url('/assets/images/select_arrow.svg') no-repeat center right 20px;

  @include small-screen {
    display: block;
  }
}
.category-select::-ms-expand {
  display: none;
}
.category-select::-webkit-scrollbar {
  display: none;
}
.category-select option {
  color: #d5b877;
  border: none;
}

</style>
