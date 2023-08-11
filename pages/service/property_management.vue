<template>
  <section class="page-content">
    <div class="slogan">
      <hr>
      <h2>三階段精準規劃</h2>
      <p>
        以熱忱的服務態度、嚴格的自我要求、專業的管理經驗，秉持「職人精神」，為建築提供客製化的建議與諮詢。並依法規及社區決議，將社區管理機制朝智慧、自動、系統化前進，而生活多元化的提供與開發，更是我們一直努力的方向。
      </p>

      <hr>
    </div>

    <ul class="arrow">
      <li>前期規劃</li>
      <li>顧問管理</li>
      <li>物業管理</li>
    </ul>

    <div class="list-wrap">
      <ul class="list">
        <h6>前期規劃</h6>
        <li>前期物業規劃</li>
        <li>公設圖面建議</li>
        <li>協助社區公設點交</li>
        <li>餐飲設備建議</li>
        <li>行政事務生活</li>
        <li>所需設備規劃建議</li>
        <li>社區規約制定</li>
        <li>公設管理辦法制定</li>
      </ul>

      <ul class="list">
        <h6>物業顧問</h6>

        <li>空間配置</li>
        <li>公共水電</li>
        <li>動線及管理規劃</li>
        <li>設備規格制定</li>
        <li>設備驗收</li>
        <li>消防評估設計</li>
        <li>物業管理規劃</li>
        <li>商業支援</li>
        <li>設備年檢</li>
        <li>消防設備安全檢修申報</li>
        <li>交屋公設驗收</li>
      </ul>

      <ul class="list">
        <h6>物業服務</h6>

        <li>行政事務財務</li>
        <li>各空間設備清潔維護</li>
        <li>生活服務</li>
        <li>租售代理</li>
        <li>年度預算</li>
        <li>修繕計畫</li>
        <li>財務管理</li>
        <li>年節活動企劃</li>
        <li>檔案建檔管理</li>
        <li>建物生命週期健檢診斷</li>
        <li>代辦工程修繕維護</li>
      </ul>
      <div>
        <ul class="list">
          <h6>精緻服務</h6>
          <li>酒店式櫃台服務</li>
          <li>飯店模式管理</li>
        </ul>

        <ul class="list">
          <h6>銷售合作</h6>
          <li>酒店式櫃台服務</li>
          <li>飯店模式管理</li>
        </ul>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  layout: 'MainPage',
  data() {
    return {
      pageTitle: '物業管理',
      pageTitleEn: 'Property Management',
      backgroundImage: '/assets/images/service_property_management_banner.webp',
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
.list {
  list-style-type: none;
  li {

  }
}

</style>
