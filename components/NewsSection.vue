<template>
  <section id="news-section" class="bg-e5e5e5">
    <div class="news-background-color bg-d5b877"></div>
    <div ref="newsBackground" class="news-background"></div>

    <div class="section-content" ref="sectionContent">

      <div v-show="isTitleSlideIn" id="news-title" :class="{'section-title-wrap': true, 'bg-e5e5e5': true, 'animation-slide-in': isTitleSlideIn}">
        <h4 class="section-label font-color-333333">NEWS&EVENTS</h4>
        <h2 class="section-title font-color-333333">最新消息</h2>
        <a class="more font-color-333333" href="/news">More <span class="link_arrow"></span></a>
      </div>

      <div v-show="isTitleSlideIn" :class="{'news-wrap': true, 'bg-e5e5e5': true, 'animation-slide-in': isTitleSlideIn}">
        <div class="more font-color-333333" href="/news">More <span class="link_arrow"></span></div>
        <div>
          <select class="category-select" v-model="newsTab">
            <option value="all">全部</option>
            <option value="lastest">最新消息</option>
            <option value="report">媒體報導</option>
            <option value="event">活動花絮</option>
            <option value="education">教育訓練</option>
            <option value="evaluation">評比佳績</option>
          </select>
        </div>

        <div class="category-tab-wrap">
          <div class="category-tab tab-active font-color-333333 font-weight-b" value="all" @click="changeNewsTab">全部</div>
          <div class="category-tab font-color-333333 font-weight-b" value="lastest" @click="changeNewsTab">最新消息</div>
          <div class="category-tab font-color-333333 font-weight-b" value="report" @click="changeNewsTab">媒體報導</div>
          <div class="category-tab font-color-333333 font-weight-b" value="event" @click="changeNewsTab">活動花絮</div>
          <div class="category-tab font-color-333333 font-weight-b" value="education" @click="changeNewsTab">教育訓練</div>
          <div class="category-tab font-color-333333 font-weight-b" value="evaluation" @click="changeNewsTab">評比佳績</div>
        </div>

        <div v-for="item in news[newsTab]" class="news-item">
          <div class="news-category font-color-333333">{{ item.cat }}</div>
          <a :href="'/news/post/' + item.id" class="news-title font-color-333333">{{ item.title }}</a>
          <div class="news-date font-color-959595">{{ item.dateString }}</div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import { format } from 'date-fns';

export default {
  data() {
    return {
      selectedOption: 'lastest',
      newsTab: "all",
      news: {
        "all"       : [],
        "lastest"   : [],
        "report"    : [],
        "event"     : [],
        "education" : [],
        "evaluation": []
      },

      isTitleSlideIn: false,
    }
  },
  async fetch() {
    var apiUrl = process.env.API_URL + 'api/posts?limit=6' + '&where[show][equals]=show';

    var newsCategories = Object.keys(this.news);
    var categoryList = {
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

    for(var i=0; i<newsCategories.length; i++) {
      var catApiUrl = (newsCategories[i] == 'all') ? apiUrl : apiUrl + '&where[category][equals]='+newsCategories[i];
      var response = await fetch(catApiUrl);
      var data = await response.json();
      var newsList = data.docs;

      if (newsList === undefined) continue;

      for(var j=0; j<newsList.length; j++) {
        var item = newsList[j];

        newsList[j]['cat'] = categoryList[item.category].text;

        var d = new Date(item.createdAt);

        newsList[j]['dateString'] = format(d, 'yyyy/MM/dd');
      }

      this.news[newsCategories[i]] = newsList;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.updateNewsBackground();
    })

    window.addEventListener('resize', this.updateNewsBackground); // 監聽窗口寬度變化
    this.animateOnScroll();
  },
  methods: {
    updateNewsBackground() {
      var bodyWidth = document.body.clientWidth;
      var container = this.$refs.sectionContent;
      var style = window.getComputedStyle(container);
      var left = parseInt(style.marginLeft, 10) + parseInt(style.paddingLeft, 10)+1;
      var element = this.$refs.newsBackground;
      element.style.width = (bodyWidth-left) + 'px';

      console.log(bodyWidth, left);

    },
    changeNewsTab(event) {
      this.newsTab = event.target.getAttribute('value');

      var elements = document.getElementsByClassName("tab-active");
      for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("tab-active");
      }

      event.target.classList.add('tab-active');
    },
    animateOnScroll() {
      this.$gsap.to('#news-section', {
        scrollTrigger: {
          trigger: '#news-section',
          start: 'top 30%',
          end: 'bottom',
          onEnter: ()=> {
            this.isTitleSlideIn = true;
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#news-section {
  position: relative;

  display: flex;
  align-items: flex-end;

  @include small-screen {
    padding-bottom: 50px;
  }
}
#news-section .section-content {
  min-height: 600px;

  display: flex;
  flex-direction: row;

  z-index: 1;
}
@media (max-width: 767px) {
  .section-content {
    padding: 0;
  }
}
#news-section .section-title-wrap {
  padding-top: 40px;
  width: 30%;
  max-width: 250px;
}
.news-wrap {
  width: 70%;
  margin-top: 80px;

  flex-grow: 1;


  @include small-screen {
    margin-top: unset;
  }
}
.news-wrap .more {
  display: none;
}
.category-tab-wrap {
  display: flex;
  flex-direction: row;
}
.category-tab {
  width: 16.66%;
  height: 48px;

  background-color: #cbcbcb;

  font-size: 16px;
  text-align: center;
  line-height: 48px;

  cursor: pointer;
}
.tab-active {
  background-color: #e5e5e5;
}
.news-item {
  width: 100%;
  padding: 24px 20px;

  display: flex;
  flex-direction: row;

  @include small-screen {

    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px #d5b877 solid;

    flex-wrap: wrap;
  }
}
.news-item:last-child {
  border-bottom: none;
}
.news-category {
  padding: 0 8px;
  background-color: #d5b877;

  font-size: 14px;
  font-weight: 500;
  text-align: center;
  line-height: 30px;
  white-space: nowrap;
}
.news-title {
  margin-left: 20px;

  font-size: 16px;
  font-weight: 400;
  line-height: 30px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @include small-screen {
    margin-top: 8px;
    margin-left: 0px;
    line-height: 30px;

    overflow: hidden;

    order:3;
  }
}
.news-title:hover {
  color: #333333cd;
}
.news-date {
  padding-left: 8px;
  margin-left: auto;

  line-height: 30px;

  @include small-screen {
    font-size: 12px;
    line-height: 30px;
  }
}

.news-background {
  height: 500px;
  background-image: url('/assets/images/news_background.png');

  position: absolute;
  z-index: 0;
  right: 0;
  bottom: 200px;
}
.news-background-color {
  width: 50vw;
  height: 600px;
  position: absolute;
  z-index: 0;
  right: 0;
  bottom: 0;

  @include small-screen {
    display: none;
  }
}
.bg-e5e5e5 {
  background-color: #e5e5e5;
}
.bg-d5b877 {
  background-color: #d5b877;
}
.category-select {
  display: none;

  color: #d5b877;
  font-size: 16px;
  font-weight: 500;

  width: 100%;
  height: 40px;
  padding: 4px 16px;
  border-radius: 4px;
  border: 0px;

  position:relative;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #ffffff url('/assets/images/select_arrow.svg') no-repeat center right 20px;

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
.more {
  display: flex;
  align-items: center;
  text-decoration: none;

  @include noto-serif-tc-regular;
  font-weight: 200;
  letter-spacing: 1px;
}
.more:visited {
  color: #333;
}
.link_arrow {
  display: inline-block;
  vertical-align: middle;
  width: 16px;
  height: 16px;
  background: url(/assets/images/link_arrow.svg) no-repeat center center;

  margin-left: 8px;
}

@media (max-width: 767px) {
  #news-section .section-content {
    flex-direction: column;
  }
  #news-section .section-title-wrap {
    width: 45%;
    padding: 20px 24px 8px;
  }
  #news-section .section-title-wrap .section-label {
    margin-bottom: 12px;
  }
  #news-section .section-title-wrap .section-title {
    margin-bottom: 0;
  }
  #news-section .section-title-wrap .more {
    display: none;
  }
  .news-wrap {
    width: 100%;
    padding: 24px;

  }
  .category-tab-wrap {
    display: none;
  }

  .news-item {
    padding-left: 0;
    padding-right: 0;
  }
}

.animation-slide-in {
  animation: slide-in 1.5s ease-in-out forwards;
}

@keyframes slide-in {
  from {
    opacity: 0.7;
    transform: translateX(-100vw);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
