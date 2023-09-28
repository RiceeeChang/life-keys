<template>
  <section class="page-content">

    <div class="article">
      <h2>{{ article.title }}</h2>
      <div class="meta">
        <span class="tag">{{ article.tag }}</span>
        <span class="date">{{ article.dateString }}</span>
      </div>
      <div class="article-content" v-html="article.content"></div>
    </div>

    <div class="post-navigation">
      <a :href="prevPostUrl == '' ? null : prevPostUrl"><span class="prev"></span></a>
      <a class="return" href="/news">返回頁面</a>
      <a :href="nextPostUrl == '' ? null : nextPostUrl"><span class="next"></span></a>
    </div>

  </section>
</template>

<script>
import { format } from 'date-fns';
import { slateToHtml, payloadSlateToHtmlConfig } from '@slate-serializers/html'

export default {
  layout: 'MainPage',
  data() {
    return {
      pageTitle: '最新消息',
      pageTitleEn: 'News',
      backgroundImage: '/assets/images/news_banner.webp',
      article: [],
      prevPostUrl: '',
      nextPostUrl: '',
    }
  },
  components: {},
  created() {
    this.$store.commit('page/setPageTitle', this.pageTitle)
    this.$store.commit('page/setPageTitleEn', this.pageTitleEn)
    this.$store.commit('page/setBackgroundImage', this.backgroundImage)

  },
  async asyncData({ params }) {
    var postId = params.id;

    return { postId };
  },
  async fetch() {
    var data;
    var apiUrl = process.env.API_URL + 'api/posts/'+this.postId;
    var response = await fetch(apiUrl);
    this.article = await response.json();

    const htmlOutput = slateToHtml(this.article.content, payloadSlateToHtmlConfig);
    this.article.content = htmlOutput;

    var d = new Date(this.article.createdAt);
    this.article['dateString'] = format(d, 'yyyy/MM/dd');

    const categoryList = {
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
      };

    this.article['tag'] = categoryList[this.article.category].text;

    // prev
    apiUrl = process.env.API_URL + 'api/posts?limit=1&where[createdAt][less_than]='+this.article.createdAt;
    response = await fetch(apiUrl);
    var data = await response.json();
    if (data !== undefined && data.docs.length != 0) {
      this.prevPostUrl = '/news/post/' + data.docs[0].id;
    }

    // next
    apiUrl = process.env.API_URL + 'api/posts?limit=1&where[createdAt][greater_than]='+this.article.createdAt;
    response = await fetch(apiUrl);
    data = await response.json();
    if (data !== undefined && data.docs.length != 0) {
      this.nextPostUrl = '/news/post/' + data.docs[0].id;
    }

  },
  computed: {
    getRegion() {
      return this.region;
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  padding: 65px 56px;
  margin-top: 48px;

  background-color: #292929;

  @include small-screen {
    padding: 32px 24px;
  }

  h2 {
    font-size: 24px;
    font-weight: 300;
    margin: 0;
    margin-bottom: 24px;
  }

  .meta {
    display: flex;
    .tag {
      background-color: $main-color;
      width: 72px;
      height: 30px;

      font-size: 14px;
      line-height: 30px;
      color: #333;
      font-weight: 400;
      text-align: center;
    }
    .date {
      margin-left: 28px;

      font-size: 16px;
      color: #959595;
      text-align: right;
    }
  }


}

.post-navigation {
  margin-top: 70px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .return {
    display: inline-block;

    background-color: $main-color;

    color: #333;
    font-size: 20px;
    line-height: 20px;
    font-weight: 500;

    padding: 20px 72px;

    &:hover, &:active {
      background-color: $button-main-color-hover;
    }
  }

  .prev {
    &::before {
      display: inline-block;
      content: url(/assets/images/breadcrumb_arrow.svg);
      transform: rotate(180deg);
      margin-right: 16px;
    }
    &::after {
      content: "上一則";
      @include small-screen {
        content: "";
      }
    }
  }
  .next {
    &::before{
      content: "下一則";
      @include small-screen {
        content: "";
      }
    }
    &::after {
      display: inline-block;
      content: url(/assets/images/breadcrumb_arrow.svg);
      margin-left: 16px;
      vertical-align: -2px;
    }
  }
}
</style>

<style lang="scss">
.article-content {
  padding: 24px 0;
  p {
    margin: 24px 0;
    line-height: 1.8;
    letter-spacing: 1px;
  }
  img {
    display: block;
    max-width: 100%;
    margin: 24px auto 24px;
  }
}
</style>
