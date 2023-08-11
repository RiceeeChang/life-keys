<template>
  <section class="page-content">

    <div class="article">
      <h2>2021國家卓越建設獎2021國家卓越建設獎2021國家卓越建設獎</h2>
      <div class="meta">
        <span class="tag">最新消息</span>
        <span class="date">2022.4.3</span>
      </div>
      <div class="article-content">

        <p>日本 GOOD SMILE COMPANY 發行，旗下種類超過千款的人氣商品「黏土人」系列，在出自 VTUBER 團體 hololive production 的「<a target="_blank" href="https://www.toy-people.com/?p=62989">湊阿庫婭</a>」後，隸屬 hololive EN 的「<strong>黏土人 噶嗚·古拉</strong>」也將登場！參考售價為 5,900 日圓，預計將於 2022 年 07 月發售。</p>
        <p><img src="https://img.toy-people.com/member/162918621459.jpg"></p>
        <p>VTuber團體hololive English（hololive EN）的一期生成員<strong>噶嗚·古拉</strong>（Gawr Gura），於 2020 年 9 月出道，特色的名字可能起源於海底怪聲。人物形象由甘城なつき所設計，角色設定為亞特蘭蒂斯後裔，具有能和海洋生物聊天的能力，身上穿著鯊魚造型的頭套與服裝，身旁的吉祥物夥伴小鯊魚名為Bloop，在緊急時刻可能會成為古拉的緊急糧食。</p>
        <p><img src="https://img.toy-people.com/member/162918623810.jpg"></p>

        <p>「<strong>黏土人 噶嗚·古拉</strong>」可動人偶，尺寸全高約100mm，還原鯊皇超可愛的鯊魚服裝，特色的白藍色挑染髮和如小鯊魚般的鋸齒牙等特徵也 Q 版呈現，兜帽可自由脫戴，呈現不一樣的造型，身後還有會發出謎樣拍打聲的尾鰭！附有可替換的招牌「普通笑臉」、閉起眼的「開心笑臉」以及調皮的「笑嘻嘻臉」三種生動的表情零件，搭配好朋友「Bloop」及藍色「三叉戟」，盡情賞玩各種姿態的鯊鯊！</p>
        <p><img src="https://img.toy-people.com/member/162918621385.jpg"></p>
        <p><img src="https://img.toy-people.com/member/162918621354.jpg"></p>
        <p><img src="https://img.toy-people.com/member/162918621395.jpg"></p>

        <p>當我們談論填充內容時，通常會涉及到在設計、排版和開發中使用佔位文字的重要性。填充內容是一種臨時的文字，用於模擬最終內容的外觀和佈局。無論是在網頁設計、應用開發還是印刷設計中，填充內容都扮演著不可或缺的角色。</p>

        <p>在網頁設計中，填充內容有助於設計師預覽網頁佈局的外觀。當開發人員等待實際文本內容準備好之前，填充內容可以確保設計不受影響，從而提前做好排版和佈局。這有助於設計團隊更好地展示設計構思，同時為客戶提供直觀的外觀感受。</p>

      </div>
    </div>

    <div class="post-navigation">
      <a href="/"><span class="prev"></span></a>
      <a class="return">返回頁面</a>
      <a href="/"><span class="next"></span></a>
    </div>

  </section>
</template>

<script>
export default {
  layout: 'MainPage',
  data() {
    return {
      pageTitle: '最新消息',
      pageTitleEn: 'Company Archievements',
      backgroundImage: '/assets/images/company_archievements_banner.webp',
      article: [],
    }
  },
  components: {},
  created() {
    this.$store.commit('page/setPageTitle', this.pageTitle)
    this.$store.commit('page/setPageTitleEn', this.pageTitleEn)
    this.$store.commit('page/setBackgroundImage', this.backgroundImage)

  },
  validate({ params }) {
    return true;
  },
  async asyncData({ params }) {
    var postId = params.id

    return { postId }
  },
  async fetch() {
    //const response = await fetch(process.env.API_URL + 'api/slides')
    //const data = await response.json()

    this.article = []
  },
  computed: {
    getRegion() {
      return this.region
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
