<template>
  <section id="news-section" class="bg-e5e5e5">
    <div class="news-background-color bg-d5b877"></div>
    <div ref="newsBackground" class="news-background"></div>

    <div class="section-content">
      <div id="news-title" class="section-title-wrap bg-e5e5e5">
        <h4 class="section-label font-color-333333">NEWS&EVENTS</h4>
        <h2 class="section-title font-color-333333">最新消息</h2>
        <div class="font-color-333333">More</div>
      </div>
      <div class="news-wrap bg-e5e5e5">
        <div class="category-tab-wrap">
          <div class="category-tab tab-active font-color-333333 font-weight-b">全部</div>
          <div class="category-tab font-color-333333 font-weight-b">最新消息</div>
          <div class="category-tab font-color-333333 font-weight-b">媒體報導</div>
          <div class="category-tab font-color-333333 font-weight-b">活動花絮</div>
          <div class="category-tab font-color-333333 font-weight-b">教育訓練</div>
          <div class="category-tab font-color-333333 font-weight-b">評比佳績</div>
        </div>

        <div class="news-item">
          <div class="news-category font-color-333333 font-weight-r bg-d5b877">最新消息</div>
          <div class="news-title font-color-333333 font-weight-r">2021國家卓越建設獎-上暘天聚社區</div>
          <div class="news-date font-color-959595"> 2022.4.3</div>
        </div>
        <div class="news-item">
          <div class="news-category font-color-333333 font-weight-r bg-d5b877">最新消息</div>
          <div class="news-title font-color-333333 font-weight-r">2021國家卓越建設獎-上暘天聚社區</div>
          <div class="news-date font-color-959595"> 2022.4.3</div>
        </div>
        <div class="news-item">
          <div class="news-category font-color-333333 font-weight-r bg-d5b877">最新消息</div>
          <div class="news-title font-color-333333 font-weight-r">2021國家卓越建設獎-上暘天聚社區</div>
          <div class="news-date" font-color-959595> 2022.4.3</div>
        </div>
        <div class="news-item">
          <div class="news-category font-color-333333 font-weight-r bg-d5b877">最新消息</div>
          <div class="news-title font-color-333333 font-weight-r">2021國家卓越建設獎-上暘天聚社區</div>
          <div class="news-date"> 2022.4.3</div>
        </div>
        <div class="news-item">
          <div class="news-category font-color-333333 font-weight-r bg-d5b877">最新消息</div>
          <div class="news-title font-color-333333 font-weight-r">2021國家卓越建設獎-上暘天聚社區</div>
          <div class="news-date"> 2022.4.3</div>
        </div>
        <div class="news-item">
          <div class="news-category font-color-333333 font-weight-r bg-d5b877">最新消息</div>
          <div class="news-title font-color-333333 font-weight-r">2021國家卓越建設獎-上暘天聚社區</div>
          <div class="news-date font-color-959595"> 2022.4.3</div>
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
  padding: 24px 10px;

  display: flex;
  flex-direction: row;
}
.news-category {
  width: 72px;
  height: 30px;
  background-color: #d5b877;

  font-size: 14px;
  text-align: center;
  line-height: 30px;
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
</style>

<script>
  export default {
    head() {
      return {

      }
    },
    data() {
      return {

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