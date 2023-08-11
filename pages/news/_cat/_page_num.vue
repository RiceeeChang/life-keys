<template>
  <section class="page-content">

    <ul class="form-tab">
      <li :class="{'active': cat=='lastest' }"><a href="/news/lastest">最新消息</a></li>
      <li :class="{'active': cat=='report' }"><a href="/news/report">媒體報導</a></li>
      <li :class="{'active': cat=='event' }"><a href="/news/event">活動花絮</a></li>
      <li :class="{'active': cat=='education' }"><a href="/news/education">教育訓練</a></li>
      <li :class="{'active': cat=='evaluation' }"><a href="/news/evaluation">評比佳績</a></li>
    </ul>

    <select class="category-select" v-model="cat">
      <option value="all">全部</option>
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
        <span class="date">{{ news.date }}</span>
      </div>
    </div>

    <div class="pagination">
      <a class="prev"></a>

      <ol>
        <li class="active"><a>1</a></li>
        <li><a>2</a></li>
        <li><a>3</a></li>
        <li><a>4</a></li>
        <li><a>...</a></li>
        <li><a>16</a></li>
      </ol>

      <a class="next"></a>
    </div>

  </section>
</template>

<script>
export default {
  layout: 'MainPage',
  data() {
    return {
      pageTitle: '最新消息',
      pageTitleEn: 'News',
      backgroundImage: '/assets/images/news_banner.webp',
      cat: 'lastest',
      newsList: [
        {
          tag: '最新消息',
          title: '2021國家卓越建設獎-上揚天聚社區',
          url: "",
          date: '2022.4.3',
        },
        {
          tag: '最新消息',
          title: '2021國家卓越建設獎-上揚天聚社區2021國家卓越建設獎-上揚天聚社區2021國家卓越建設獎-上揚天聚社區2021國家卓越建設獎-上揚天聚社區2021國家卓越建設獎-上揚天聚社區',
          url: "",
          date: '2022.4.3',
        },
        {
          tag: '最新消息',
          title: '2021國家卓越建設獎-上揚天聚社區',
          url: "",
          date: '2022.12.25',
        }
      ]
    }
  },
  components: {},
  created() {
    this.$store.commit('page/setPageTitle', this.pageTitle)
    this.$store.commit('page/setPageTitleEn', this.pageTitleEn)
    this.$store.commit('page/setBackgroundImage', this.backgroundImage)
  }
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
      font-weight: 400;
      text-align: center;

    }
    h3 {
      /* 72+20+80+32=204 */
      width: calc(100% - 204px);
      margin: 0;
      font-size: 16px;
      font-weight: 100;

      a {
        font-size: inherit;
        font-weight: inherit;
      }
    }
    .date {
      width: 80px;
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
.pagination {
  margin-top: 56px;
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
