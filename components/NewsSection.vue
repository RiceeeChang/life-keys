<template>
  <section id="news-section" class="bg-e5e5e5">
    <div class="news-background-color bg-d5b877"></div>
    <div ref="newsBackground" class="news-background"></div>

    <div class="section-content">
      <div id="news-title" class="section-title-wrap bg-e5e5e5">
        <h4 class="section-label font-color-333333">NEWS&EVENTS</h4>
        <h2 class="section-title font-color-333333">最新消息</h2>
        <a class="more font-color-333333">More <span class="link_arrow"></span></a>
      </div>
      <div class="news-wrap bg-e5e5e5">
        <div class="more font-color-333333">More <span class="link_arrow"></span></div>
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
          <div class="category-tab font-color-333333 font-wwight-b" value="evaluation" @click="changeNewsTab">評比佳績</div>
        </div>

        <div v-for="item in news[newsTab]" class="news-item">
          <div class="news-category font-color-333333 font-weight-r">{{ item.cat }}</div>
          <div class="news-title font-color-333333 font-weight-r">{{ item.title }}</div>
          <div class="news-date font-color-959595">{{ item.date }}</div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    head() {
      return {

      }
    },
    data() {
      return {
        selectedOption: 'lastest',
        newsTab: "all",
        news: {
          'all': [
            {
              "cat": "最新消息",
              "title": "2021國家卓越建設獎-上暘天聚社區",
              "date": "2022.4.3"
            },
            {
              "cat": "最新消息",
              "title": "2021國家卓越建設獎-上暘天聚社區",
              "date": "2022.4.3"
            },
            {
              "cat": "最新消息",
              "title": "2021國家卓越建設獎-上暘天聚社區",
              "date": "2022.4.3"
            },
            {
              "cat": "最新消息",
              "title": "2021國家卓越建設獎-上暘天聚社區",
              "date": "2022.4.3"
            },
            {
              "cat": "最新消息",
              "title": "2021國家卓越建設獎-上暘天聚社區",
              "date": "2022.4.3"
            },
          ],
          "lastest": [
            {
              "cat": "最新消息",
              "title": "2021國家卓越建設獎-上暘天聚社區",
              "date": "2022.4.3"
            },
          ],
          "report": [
          {
              "cat": "媒體報導",
              "title": "2021國家卓越建設獎-上暘天聚社區",
              "date": "2022.4.3"
            },
          ],
          "event": [
          {
              "cat": "活動花絮",
              "title": "2021國家卓越建設獎-上暘天聚社區",
              "date": "2022.4.3"
            },
          ],
          "education": [
          {
              "cat": "教育訓練",
              "title": "2021國家卓越建設獎-上暘天聚社區",
              "date": "2022.4.3"
            },
          ],
          "evaluation": [
          {
              "cat": "評比佳績",
              "title": "2021國家卓越建設獎-上暘天聚社區",
              "date": "2022.4.3"
            },
          ]
        }
      }
    },
    mounted() {
      this.updateNewsBackground(); // 初始化時設定元素寬度
      window.addEventListener('resize', this.updateNewsBackground); // 監聽窗口寬度變化
    },
    methods: {
      updateNewsBackground() {
        var bodyWidth = document.body.clientWidth;
        var element = document.getElementById('news-title');
        if (element) {
          var left = element.offsetLeft;
          console.log('left:', left, ' body width: ', bodyWidth);
          var element = this.$refs.newsBackground;
          element.style.width = (bodyWidth-left) + 'px';
        }
      },
      changeNewsTab(event) {
        this.newsTab = event.target.getAttribute('value');

        var elements = document.getElementsByClassName("tab-active");
        for (var i = 0; i < elements.length; i++) {
          elements[i].classList.remove("tab-active");
        }

        event.target.classList.add('tab-active');
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
  height: 78px;
  padding: 24px 20px;

  display: flex;
  flex-direction: row;
}
.news-category {
  /*width: 72px;*/
  /*height: 30px;*/
  padding: 8px;
  background-color: #d5b877;

  font-size: 14px;
  text-align: center;
  line-height: 1.2;
  white-space: nowrap;
}
.news-title {
  font-size: 16px;
  line-height: 30px;
  margin-left: 20px;
}
.news-date {
  margin-left: auto;
}

.news-background {
  /*width: calc(504px + 50vw);*/
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
</style>
