<template>
  <section id="performance-section" class="bg-272727" ref="elementToObserve">
    <div class="section-content">

      <div v-show="isTitleRowSlideUp" :class="{'title-row': true, 'animation-slide-up': isTitleRowSlideUp}">
        <div class="section-title-wrap">
          <h4 class="section-label font-color-main">PERFORMACE</h4>
          <h2 class="section-title font-color-main">社區實績</h2>
        </div>
        <div class="line" style="margin-left: 70px; margin-right: 40px;"></div>
        <div class="slogan">全台灣北中南共有 <span :class="{'big-number': true, 'number-total-counter-animation': isNumberAnimation}" :style="inlineVarNumber('total')"></span> 個服務社區</div>
        <div class="line" style="margin-left: 24px; margin-right: 80px;"></div>
        <b-link class="more" href="/company_archievements">More <span class="link_arrow"></span></b-link>
      </div>

      <div v-show="isPerformanceContentSlideUp" :class="{'performance-content': true, 'animation-slide-up': isPerformanceContentSlideUp}">
        <div class="taiwan">
          <img class="mobile" src="/assets/images/taiwan_mobile.svg">
          <img class="desktop" src="/assets/images/taiwan_desktop.svg">
        </div>
        <div class="region north">
          <div class="title1">
            台北辦公室
            <span class="photo-icon" @click="openLightbox('north', '台北辦公室')"></span>
            <span class="dotted-line"></span>
            <svg class="regional-point" v-show="!isShowNorth" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" @mouseenter="enterRegion('north')" @mouseleave="leaveRegion('north')">
              <circle cx="25" cy="25" r="8" fill="#d5b877" />
              <circle cx="25" cy="25" r="16" stroke="#d5b877" stroke-width="2" fill="none" >
              </circle>
            </svg>
            <a href="/company_archievements/north"><svg v-show="isShowNorth" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" @mouseenter="enterRegion('north')" @mouseleave="leaveRegion('north')">
              <circle cx="25" cy="25" r="8" fill="#d5b877" />
              <circle cx="25" cy="25" r="16" stroke="#d5b877" stroke-width="4" fill="none" >
                <animate attributeName="r" from="8" to="24" dur="2s"  repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.7" to="0.0" dur="2s"  repeatCount="indefinite" />
              </circle>
            </svg></a>
          </div>
          <div class="title2">服務社區  共有<span :class="{'number': true, 'number-north-counter-animation': isNumberAnimation}" :style="inlineVarNumber('north')"></span>個</div>
        </div>
        <div class="region middle">
          <div class="title1">
            台中辦公室
            <span class="photo-icon" @click="openLightbox('middle', '中區辦公室')"></span>
            <span class="dotted-line"></span>
            <svg class="regional-point" v-show="!isShowMiddle" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" @mouseenter="enterRegion('middle')" @mouseleave="leaveRegion('middle')">
              <circle cx="25" cy="25" r="8" fill="#d5b877" />
              <circle cx="25" cy="25" r="16" stroke="#d5b877" stroke-width="2" fill="none" >
              </circle>
            </svg>
            <a href="/company_archievements/middle"><svg v-show="isShowMiddle" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" @mouseenter="enterRegion('middle')" @mouseleave="leaveRegion('middle')">
              <circle cx="25" cy="25" r="8" fill="#d5b877" />
              <circle cx="25" cy="25" r="16" stroke="#d5b877" stroke-width="4" fill="none" >
                <animate attributeName="r" from="8" to="24" dur="2s"  repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.7" to="0.0" dur="2s"  repeatCount="indefinite" />
              </circle>
            </svg></a>
          </div>
          <div class="title2">服務社區  共有<span :class="{'number': true, 'number-middle-counter-animation': isNumberAnimation}" :style="inlineVarNumber('middle')"></span>個</div>
        </div>
        <div class="region south">
          <div class="title1">
            台南辦公室 <span class="photo-icon" @click="openLightbox('south', '南區辦公室')"></span>
            <span class="dotted-line"></span>
            <svg class="regional-point" v-show="!isShowSouth" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" @mouseenter="enterRegion('south')" @mouseleave="leaveRegion('south')">
              <circle cx="25" cy="25" r="8" fill="#d5b877" />
              <circle cx="25" cy="25" r="16" stroke="#d5b877" stroke-width="2" fill="none" >
              </circle>
            </svg>
            <a href="/company_archievements/south"><svg v-show="isShowSouth" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" @mouseenter="enterRegion('south')" @mouseleave="leaveRegion('south')">
              <circle cx="25" cy="25" r="8" fill="#d5b877" />
              <circle cx="25" cy="25" r="16" stroke="#d5b877" stroke-width="4" fill="none" >
                <animate attributeName="r" from="8" to="24" dur="2s"  repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.7" to="0.0" dur="2s"  repeatCount="indefinite" />
              </circle>
            </svg></a>
          </div>
          <div class="title2">服務社區  共有<span :class="{'number': true, 'number-south-counter-animation': isNumberAnimation}" :style="inlineVarNumber('south')"></span>個</div>
        </div>
        <div class="region kao">
          <div class="title1">
            高雄辦公室 <span class="photo-icon" @click="openLightbox('kao', '高雄辦公室')"></span>
            <span class="dotted-line"></span>
            <svg class="regional-point" v-show="!isShowKao" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" @mouseenter="enterRegion('kao')" @mouseleave="leaveRegion('kao')">
              <circle cx="25" cy="25" r="8" fill="#d5b877" />
              <circle cx="25" cy="25" r="16" stroke="#d5b877" stroke-width="2" fill="none" >
              </circle>
            </svg>
            <a href="/company_archievements/kao"><svg v-show="isShowKao" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" @mouseenter="enterRegion('kao')" @mouseleave="leaveRegion('kao')">
              <circle cx="25" cy="25" r="8" fill="#d5b877" />
              <circle cx="25" cy="25" r="16" stroke="#d5b877" stroke-width="4" fill="none" >
                <animate attributeName="r" from="8" to="24" dur="2s"  repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.7" to="0.0" dur="2s"  repeatCount="indefinite" />
              </circle>
            </svg></a>
          </div>
          <div class="title2">服務社區  共有<span :class="{'number': true, 'number-kao-counter-animation': isNumberAnimation}" :style="inlineVarNumber('kao')"></span>個</div>
        </div>

        <div v-show="isShowNorth" class="performance-photo-wrap north">
          <div v-for="p in photos.north" class="performance-photo" :style="setbackgroundImage(p)"></div>
        </div>
        <div v-show="isShowMiddle" class="performance-photo-wrap middle">
          <div v-for="p in photos.middle" class="performance-photo" :style="setbackgroundImage(p)"></div>
        </div>
        <div v-show="isShowSouth" class="performance-photo-wrap south">
          <div v-for="p in photos.south" class="performance-photo" :style="setbackgroundImage(p)"></div>
        </div>
        <div v-show="isShowKao" class="performance-photo-wrap kao">
          <div v-for="p in photos.kao" class="performance-photo" :style="setbackgroundImage(p)"></div>
        </div>
        
      </div>

    </div>

    <lightbox :title="lightboxTitle" :images="lightboxPhotes" :index="lightboxIndex"/>
  </section>
</template>

<script>
import Lightbox from '~/components/Lightbox.vue';
export default {
  data() {
    return {
      isNumberShow: false,
      isNumberAnimation: false,
      isTitleRowSlideUp: false,
      isPerformanceContentSlideUp: false,

      showPhotoRegion: 'north',
      isShowNorth: false,
      isShowMiddle: false,
      isShowSouth: false,
      isShowKao: false,

      photos: {
        north: [],
        middle: [],
        south: [],
        kao: [],
      },

      lightboxTitle: '',
      lightboxIndex: 0,
      isShowLightbox: false,
      lightboxPhotes: [],

      numbers: {
        total: 0,
        north: 0,
        middle: 0,
        south: 0,
        kao: 0,
      }
    }
  },
  methods: {
    inlineVarNumber(region) {
      return "--number-" + region + ": " + this.numbers[region];
    },
    changeShowPhotoRegion(region) {
      this.showPhotoRegion = region;
    },
    enterRegion(region) {
      if (region == 'north') {
        this.isShowNorth = true;
      } else if (region == 'middle') {
        this.isShowMiddle = true;
      } else if (region == 'south') {
        this.isShowSouth = true;
      } else if (region == 'kao') {
        this.isShowKao = true;
      }
    },
    leaveRegion(region) {
      if (region == 'north') {
        this.isShowNorth = false;
      } else if (region == 'middle') {
        this.isShowMiddle = false;
      } else if (region == 'south') {
        this.isShowSouth = false;
      } else if (region == 'kao') {
        this.isShowKao = false;
      }
    },
    setbackgroundImage(bk) {
      return {
        "background-image": "url('" + bk + "')",

      }
    },
    openLightbox(region, title) {
      this.$store.commit('page/setShowLightbox', true)
      this.lightboxIndex = 0
      this.lightboxTitle = title
      this.lightboxPhotes = this.photos[region]

      console.log('open lightbox');
    },
    animateOnScroll() {

      this.$gsap.to('#performance-section', {
        scrollTrigger: {
          trigger: '#performance-section',
          start: 'top 50%',
          end: 'bottom',
          onEnter: ()=> {
            this.isNumberAnimation = true;

            this.isTitleRowSlideUp = true;

            setTimeout(()=> {
              this.isPerformanceContentSlideUp = true;
            }, 500)
          }
        }
      })
    }
  },

  components: {
    Lightbox
  },
  async fetch() {
    var apiUrl = process.env.API_URL + 'api/cases?limit=7' + '&where[show][equals]=show';

    var regions = ['north', 'middle', 'south', 'kao'];

    var catApiUrl = apiUrl
    var response = await fetch(catApiUrl);
    var data = await response.json();
    this.numbers['total'] = data.totalDocs;


    for(var i=0; i<regions.length; i++) {
      var catApiUrl = apiUrl + '&where[region][equals]='+regions[i];
      var response = await fetch(catApiUrl);
      var data = await response.json();
      var newsList = data.docs;

      this.numbers[regions[i]] = data.totalDocs;

      //if (newsList === undefined) continue;

      for(var j=0; j<7; j++) {
        if (newsList[j] != undefined) {
          this.photos[regions[i]].push(newsList[j].url);
        } else {
          this.photos[regions[i]].push('/assets/images/performance.webp');
        }
      }
    }
  },
  mounted() {
    this.animateOnScroll()
  },
  computed: {

  }
};
</script>

<style lang="scss" scoped>


.performance-content {
  position: relative;

  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
}
.title-row .slogan {
  font-size: 28px;
  font-weight: 400;
  color: #d5b877;

  display: flex;
  align-items: center;
}

.title-row .slogan .big-number {

  display: inline-block;
  color: #d5b877;
  font-size: 64px;
  line-height: 64px;
  font-weight: 500;

  width: 110px;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 10px;

  text-align: end;
}

@property --num-total {
  syntax: '<integer>';
  inherits: true;
  initial-value: 0;
}
@property --num-north {
  syntax: '<integer>';
  inherits: true;
  initial-value: 0;
}
@property --num-middle {
  syntax: '<integer>';
  inherits: true;
  initial-value: 0;
}
@property --num-south {
  syntax: '<integer>';
  inherits: true;
  initial-value: 0;
}
@property --num-kao {
  syntax: '<integer>';
  inherits: true;
  initial-value: 0;
}
.number-total-counter-animation::before {
  counter-reset: my-counter var(--num-total);
  content: counter(my-counter);
  animation: count-total 5s ease-in-out forwards;
}
.number-north-counter-animation::before {
  counter-reset: my-counter var(--num-north);
  content: counter(my-counter);
  animation: count-north 5s ease-in-out forwards;
}
.number-middle-counter-animation::before {
  counter-reset: my-counter var(--num-middle);
  content: counter(my-counter);
  animation: count-middle 5s ease-in-out forwards;
}
.number-south-counter-animation::before {
  counter-reset: my-counter var(--num-south);
  content: counter(my-counter);
  animation: count-south 5s ease-in-out forwards;
}
.number-kao-counter-animation::before {
  counter-reset: my-counter var(--num-kao);
  content: counter(my-counter);
  animation: count-kao 5s ease-in-out forwards;
}
@keyframes count-total {
  //to { --num-total: v-bind(numbers['total']); }
  to { --num-total: var(--number-total); }
}
@keyframes count-north {
  to { --num-north: var(--number-north); }
}
@keyframes count-middle {
  to { --num-middle: var(--number-middle); }
}
@keyframes count-south {
  to { --num-south: var(--number-south); }
}
@keyframes count-kao {
  to { --num-kao: var(--number-kao); }
}


.performance-content .region {
  position: absolute;
  left: 0;
  div {
    font-weight: 400;
  }
}
img.mobile {
  display: none;
}

.region .title1 {
  font-size: 32px;

  display: flex;
  align-items: center;

  a {
    display: flex;
  }
}
.region .title1 .photo-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-left: 8px;
  visibility: hidden;

  background-image: url('/assets/images/photo_icon.svg');
}
.region .title2 {
  color: #d5b877;
  font-size: 20px;
}
.region .number {
  color: #d5b877;
  font-size: 36px;
  line-height: 36px;
  font-weight: 500;

  margin-left: 20px;
  margin-right: 16px;
}
.dotted-line {
  display: inline-block;
  height: 1px;
  border-bottom: 1px dashed #fff;
  margin-left: 20px;
}

.region.north {
  top: 116px;
}
.region.north .dotted-line {
  width: 295px;
}
.region.middle .dotted-line {
  width: 155px;
}
.region.south .dotted-line {
  width: 160px;
}
.region.kao .dotted-line {
  width: 115px;
}
.region.middle {
  top: 370px;
}
.region.south {
  top: 550px;
}

.region.kao {
  top: 660px;
}


.performance-content .performance-photo-wrap {
  position: absolute;
  right: 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  row-gap: 20px;
  width: 430px;
}
.performance-content .performance-photo-wrap.north {
  .performance-photo:first-child {
    margin-left: 150px;
  }
  .performance-photo:nth-child(6) {
    margin-left: 150px;
  }
}
.performance-content .performance-photo-wrap.middle {
  width: 580px;
  top: 350px;
}
.performance-content .performance-photo-wrap.south {
  width: 580px;
  top: 540px;
}
.performance-content .performance-photo-wrap.kao {
  width: 580px;
  top: 540px;
}
.performance-photo {
  width: 130px;
  height: 210px;
  background-position: center center;
  background-size: cover;
}

.more {
  display: flex;
  align-items: center;

  @include noto-serif-tc-regular;
  font-weight: 200;
  letter-spacing: 1px;
  font-size: 20px;

  color: #d5b877;

  text-decoration: none;
}
.link_arrow {
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(/assets/images/yellow_arrow.svg) no-repeat center center;

  margin-left: 8px;
}
#performance-section {
  padding: 170px 0;
  min-height: 100vh;
}
#performance-section .section-title{
  margin-bottom: 0;
}
.title-row {
  display: flex;
  flex-direction: row;
  position: relative;
}
.line {
  border-left: 1px solid #d5b877;
  height: 84px;
}
.bg-272727 {
  background-color: #272727;
}
.service-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  row-gap: 24px;
}
.service-item {

  width: 250px;
  height: 250px;

  background-color: #999;

  font-size: 36px;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 767px) {
  #performance-section {
    padding-top: 54px;
  }
  .title-row {
    flex-direction: column;
  }
  .title-row .line {
    display: none;
  }
  .title-row .slogan {
    font-size: 18px;
  }
  .title-row .slogan .big-number {
    font-size: 42px;
    margin-right: 8px;
  }
  .title-row .more {
    position: absolute;
    top: 10px;
    right: 0;
  }

  .region .title1 .photo-icon {
    visibility: visible;
  }
  .region.region.north {
    top: 16px;
  }
  .region.region.middle {
    top: 192px;
  }
  .region.region.south {
    top: 369px;
  }
  .region.region.kao {
    top: 475px;
  }
  .title1 .dotted-line,  .title1 .regional-point {
    display: none;
  }
  .performance-content .performance-photo-wrap {
    display: none;
  }
  img.mobile {
    display: block;
  }
  img.desktop{
    display: none;
  }
}


.animation-slide-up {
  animation: slide-up 1s ease-in-out forwards;
}

@keyframes slide-up {
  from {
    opacity: 0.7;
    transform: translateY(100vh);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
