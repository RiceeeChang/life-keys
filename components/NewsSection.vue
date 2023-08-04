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
          <select class="category-select" v-model="selectedOption">
            <option value="lastest">最新消息</option>
            <option value="report">媒體報導</option>
            <option value="event">活動花絮</option>
            <option value="education">教育訓練</option>
            <option value="evaluation">評比佳績</option>
          </select>
        </div>

        <div class="category-tab-wrap">
          <div class="category-tab tab-active font-color-333333 font-weight-b">全部</div>
          <div class="category-tab font-color-333333 font-weight-b">最新消息</div>
          <div class="category-tab font-color-333333 font-weight-b">媒體報導</div>
          <div class="category-tab font-color-333333 font-weight-b">活動花絮</div>
          <div class="category-tab font-color-333333 font-weight-b">教育訓練</div>
          <div class="category-tab font-color-333333 font-wwight-b">評比佳績</div>
        </div>

        <div class="news-item">
          <div class="news-category font-color-333333 font-weight-r">最新消息</div>
          <div class="news-title font-color-333333 font-weight-r">2021國家卓越建設獎-上暘天聚社區</div>
          <div class="news-date font-color-959595"> 2022.4.3</div>
        </div>
        <div class="news-item">
          <div class="news-category font-color-333333 font-weight-r">最新消息</div>
          <div class="news-title font-color-333333 font-weight-r">2021國家卓越建設獎-上暘天聚社區</div>
          <div class="news-date font-color-959595"> 2022.4.3</div>
        </div>
        <div class="news-item">
          <div class="news-category font-color-333333 font-weight-r">最新消息</div>
          <div class="news-title font-color-333333 font-weight-r">2021國家卓越建設獎-上暘天聚社區</div>
          <div class="news-date" font-color-959595> 2022.4.3</div>
        </div>
        <div class="news-item">
          <div class="news-category font-color-333333 font-weight-r">最新消息</div>
          <div class="news-title font-color-333333 font-weight-r">2021國家卓越建設獎-上暘天聚社區</div>
          <div class="news-date"> 2022.4.3</div>
        </div>
        <div class="news-item">
          <div class="news-category font-color-333333 font-weight-r">最新消息</div>
          <div class="news-title font-color-333333 font-weight-r">2021國家卓越建設獎-上暘天聚社區</div>
          <div class="news-date"> 2022.4.3</div>
        </div>
        <div class="news-item">
          <div class="news-category font-color-333333 font-weight-r">最新消息</div>
          <div class="news-title font-color-333333 font-weight-r">2021國家卓越建設獎-上暘天聚社區</div>
          <div class="news-date"> 2022.4.3</div>
        </div>
      </div>  
    </div>

  </section>
</template>

<style scoped>
#news-section {
  display: flex;
  align-items: flex-end;

  position: relative;
}
#news-section .section-content {
  height: 600px;

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
  .category-select {
    display: none;
  }
}
</style>

<script>
  export default {
    head() {
      return {

      }
    },
    data() {
      return {
        selectedOption: 'lastest'
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
      }
    }
  }
</script>