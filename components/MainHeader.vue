<template>
  <header class="header bg-333">
    <div class="section-content padding-left-0">
      <nav class="navbar">
        <div class="navbar-logo">
          <b-link :to="'/'"><img src="/BrandLogo.svg" alt="伯克錸物業管理"></b-link>
        </div>
        <ul class="navbar-menu">
          <li :class="{on: tabIsActive('about_us')}">
            <a class="menu-item" >公司簡介</a>
            <div class="dropdown-menu">
              <div class="dropdown-menu-content">
                <div class="dropdown-menu-title">
                  <div class="zh">公司簡介</div>
                  <div class="en">About Us</div>
                </div>
                <div class="dropdown-menu-divider"></div>
                <ul class="dropdown-menu-list">
                  <li><b-link :to="'/about_us/community_planning'"> - 社區規劃</b-link></li>
                  <li><b-link :to="'/about_us/business_philosophy'">- 經營理念</b-link></li>
                  <li><b-link :to="'/about_us/management_quality'"> - 管理品質</b-link></li>
                </ul>
              </div>
            </div>
          </li>
          <li :class="{on: tabIsActive('service')}">
            <a class="menu-item">服務項目</a>
            <div class="dropdown-menu">
              <div class="dropdown-menu-content">
                <div class="dropdown-menu-title">
                  <div class="zh">服務項目</div>
                  <div class="en">Service Items</div>
                </div>
                <div class="dropdown-menu-divider"></div>
                <ul class="dropdown-menu-list">
                  <li><b-link :to="'/service/property_management'">- 物業管理</b-link></li>
                  <li><b-link :to="'/service/security_service'">   - 保全服務</b-link></li>
                  <li><b-link :to="'/service/cleaning_service'">   - 清潔服務</b-link></li>
                  <li><b-link :to="'/service/food_service'">       - 餐飲服務</b-link></li>
                  <li><b-link :to="'/service/electrical_device'">  - 設備機電</b-link></li>
                  <li><b-link :to="'/service/rent_service'">       - 代租代管</b-link></li>
                  <li><b-link :to="'/service/life_service'">       - 生活服務</b-link></li>
                  <li><b-link :to="'/service/smart_service'">      - 智能服務</b-link></li>
                </ul>
              </div>
            </div>
          </li>
          <li :class="{on: tabIsActive('news')}">
            <b-link class="menu-item" :to="'/news'">最新消息</b-link>
            <div class="dropdown-menu">
              <div class="dropdown-menu-content">
                <div class="dropdown-menu-title">
                  <div class="zh">最新消息</div>
                  <div class="en">News</div>
                </div>
                <div class="dropdown-menu-divider"></div>
                <ul class="dropdown-menu-list">
                  <li><b-link :to="'/news/lastest'">   - 最新消息</b-link></li>
                  <li><b-link :to="'/news/event'">     - 活動花絮</b-link></li>
                  <li><b-link :to="'/news/evaluation'">- 評比佳績</b-link></li>
                  <li><b-link :to="'/news/report'">    - 媒體報導</b-link></li>
                  <li><b-link :to="'/news/education'"> - 教育訓練</b-link></li>
                </ul>
              </div>
            </div>
          </li>
          <li :class="{on: tabIsActive('company_archievements')}">
            <b-link class="menu-item" :to="'/company_archievements'">社區實績</b-link>
            <div class="dropdown-menu">
              <div class="dropdown-menu-content">
                <div class="dropdown-menu-title">
                  <div class="zh">社區實績</div>
                  <div class="en">Company Archievements</div>
                </div>
                <div class="dropdown-menu-divider"></div>
                <ul class="dropdown-menu-list">
                  <li><b-link :to="'/company_archievements/north'"> - 北區</b-link></li>
                  <li><b-link :to="'/company_archievements/middle'">- 中區</b-link></li>
                  <li><b-link :to="'/company_archievements/south'"> - 南區</b-link></li>
                </ul>
              </div>
            </div>
          </li>
          <li :class="{on: tabIsActive('careers')}"><b-link class="menu-item" :to="'/careers'">菁英召募</b-link></li>
          <li :class="{on: tabIsActive('contact')}"><b-link class="menu-item" :to="'/contact'">聯絡我們</b-link></li>
        </ul>
        <div class="navbar-toggle on">

          <input type="checkbox" v-model="isMenuOpen"/>

          <span class="hamburger"></span>
          <span class="hamburger"></span>
          <span class="hamburger"></span>

          <ul class="mobile-menu" @click="closeMobileMenuOutside">
            <li>
              <b-button class="menu-collapse-button" v-b-toggle="'introduce-menu'">公司簡介<span class="cross"></span></b-button>
            </li>
            <b-collapse id="introduce-menu">
              <ul class="mobile-submenu">
                <li @click="closeMobileMenuOutside"><b-link :to="'/about_us/community_planning'"> - 社區規劃</b-link></li>
                <li><b-link :to="'/about_us/business_philosophy'">- 經營理念</b-link></li>
                <li><b-link :to="'/about_us/management_quality'"> - 管理品質</b-link></li>
              </ul>
            </b-collapse>
            <li>
              <b-button class="menu-collapse-button" v-b-toggle="'service-menu'">服務項目<span class="cross"></span></b-button>
            </li>
            <b-collapse id="service-menu">
              <ul class="mobile-submenu">
                <li><b-link :to="'/service/property_management'">- 物業管理</b-link></li>
                <li><b-link :to="'/service/security_service'">   - 保全服務</b-link></li>
                <li><b-link :to="'/service/cleaning_service'">   - 清潔服務</b-link></li>
                <li><b-link :to="'/service/food_service'">       - 餐飲服務</b-link></li>
                <li><b-link :to="'/service/electrical_device'">  - 設備機電</b-link></li>
                <li><b-link :to="'/service/rent_service'">       - 代租代管</b-link></li>
                <li><b-link :to="'/service/life_service'">       - 生活服務</b-link></li>
                <li><b-link :to="'/service/smart_service'">      - 智能服務</b-link></li>
              </ul>
            </b-collapse>
            <li>
              <b-button class="menu-collapse-button" v-b-toggle="'news-menu'">最新消息<span class="cross"></span></b-button>
            </li>
            <b-collapse id="news-menu">
              <ul class="mobile-submenu">
                <li><b-link :to="'/news/lastest'">   - 最新消息</b-link></li>
                <li><b-link :to="'/news/event'">     - 活動花絮</b-link></li>
                <li><b-link :to="'/news/evaluation'">- 評比佳績</b-link></li>
                <li><b-link :to="'/news/report'">    - 媒體報導</b-link></li>
                <li><b-link :to="'/news/education'"> - 教育訓練</b-link></li>
              </ul>
            </b-collapse>
            <li>
              <b-button class="menu-collapse-button" v-b-toggle="'performance-menu'">社區實績<span class="cross"></span></b-button>
            </li>
            <b-collapse id="performance-menu">
              <ul class="mobile-submenu">
                <li><b-link :to="'/company_archievements'">      全部</b-link></li>
                <li><b-link :to="'/company_archievements/north'"> - 北區</b-link></li>
                <li><b-link :to="'/company_archievements/middle'">- 中區</b-link></li>
                <li><b-link :to="'/company_archievements/south'"> - 南區</b-link></li>
              </ul>
            </b-collapse>
            <li><b-link :to="'/careers'">菁英召募</b-link></li>
            <li><b-link :to="'/contact'">聯絡我們</b-link></li>
          </ul>

        </div>

      </nav>

    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    closeMobileMenuOutside(event) {
      if (event.target.classList.contains('mobile-menu') || event.target.tagName.toLowerCase() === 'a') {
        this.isMenuOpen = false;
      }
    },
    tabIsActive(tabName) {
      var pageName = this.$route.name;
      pageName = pageName.split('-')[0];

      if (pageName == tabName) {
        return true;
      }
      return false;
    }
  },
  mounted() {
    this.pageTitleEn = this.$store.state.page.pageTitleEn;
  },
}
</script>

<style lang="scss" scoped>
.bg-333 {
  background-color: $main-background-color;
}
.padding-left-right-0 {
  padding-left: 0;
  padding-right: 0;
}
.navbar {
  position: unset;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;

  font-size: 16px;
  font-weight: 300;
  color: #fff;
}

.navbar-logo {
  padding: 10px 0;
}
.navbar-logo a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
.navbar-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
.navbar-menu  .menu-item {
  margin: 0 16px;
  height: 96px;
  line-height: 96px;

  box-sizing: border-box;

  cursor: pointer;
}
.navbar-menu > li {
  box-sizing: border-box;
  border-bottom: 4px solid #ffffff00;

  font-weight: 400;
  a {
    font-weight: inherit;
  }
}

.navbar-menu > li {
  &:hover, &.on {
    border-bottom: 4px solid #d5b877;
    > a, > a:visited {
      color: #d5b877;
    }
  }
}
.navbar-menu > li a:visited {
  color: #fff;
}

.navbar-menu li a {
  text-decoration: none;

  &:hover, &:active {
    color: $main-color;
  }
}
.navbar-menu li .dropdown-menu {
  display: none;
  width: 100%;
  background-color: #292929;


  position: absolute;
  top: 100px;

  padding: 0;
  border: 0;
  margin: 0;
}
.dropdown-menu-content {
  display: flex;
  flex-direction: row;

  width: 100%;
  max-width: 1230px;

  margin: 50px auto;
  padding: 0 100px;
}
.navbar-menu li:hover .dropdown-menu {
  display: flex;
}
.dropdown-menu-title  {
  line-height: 1;
  text-align: center;

  margin-left: 13%;
  width: 128px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-between;
}
.dropdown-menu-title .zh {
  font-size: 32px;
}
.dropdown-menu-title .en {
  font-size: 16px;
  white-space: nowrap;
}
.dropdown-menu-divider {
  height: 70px;
  border-right: 1px solid #fff;
  margin-left: 80px;
  margin-right: 80px;
}
.dropdown-menu-list {
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  list-style-type: none;
}
.dropdown-menu-list li {
  margin: 0 32px;

  display: flex;
  align-items: center;

  font-weight: 400;
}
.navbar-toggle {
  width: 50px;
  height: 50px;

  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  z-index: 1;

  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
}
.navbar-toggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;

  cursor: pointer;

  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */

  -webkit-touch-callout: none;
}
/*
 * Mobile Hamburger
 */
.navbar-toggle .hamburger {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: #fff;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

.navbar-toggle span:first-child {
  transform-origin: 0% 0%;
}

.navbar-toggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

/*
 * Transform all the slices of hamburger
 * into a crossmark.
 */
.navbar-toggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  /*background: #232323;*/
}

/*
 * But let's hide the middle one.
 */
.navbar-toggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
.navbar-toggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
.mobile-menu {
  position: absolute;
  top: 75px;
  left: 75px;
  z-index: 99;

  width: 100vw;
  height: calc(100vh - 100px);
  padding-left: 24px;
  padding-right: 24px;

  background-color: #292929;

  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */

  transform-origin: 0% 0%;
  /*transform: translate(75%, 0);*/

  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);

  overflow-y: scroll;
}

.mobile-menu li {
  padding: 20px 0;
  font-size: 16px;
  border-bottom: 1px #333 solid;

  &:active {
    background-color: $black-button-hover-color;
  }
}



/*
 * And let's slide it in from the left
 */
.navbar-toggle input:checked ~ ul {
  transform: translate(-100vw, 0);;
}

.menu-collapse-button {
  width: 100%;
  padding: 0;

  background-color: transparent;
  border: none;
  border-radius: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: none !important;

  &:active {
    background-color: inherit !important;
  }
}

span.cross {
  $cross-color: #959595;

  position: relative;
  display: inline-block;
  vertical-align: 0%;
  box-sizing: border-box;
  width: 16px;
  height: 16px;

  &::before, &::after {
    content: "";
    position: absolute;

    background-color: $cross-color;
    box-sizing: border-box;
    border-radius: 1px;
    transition: transform 0.25s ease-out;
  }
  &::before {
    top: 0;
    left: calc(50% - 1px);
    width: 2px;
    height: 100%;
  }
  &::after {
    top: calc(50% - 1px);
    left: 0;
    width: 100%;
    height: 2px;
  }
}
.not-collapsed .cross {
  &::before {
    transform: rotate(-90deg);
  }
}


.mobile-submenu {
  list-style-type: none;


  li {
    padding-left: 24px;
    padding-right: 24px;
    background-color: #333;
    border-bottom: 1px solid #292929;
  }
}

@media (max-width: 768px) {
  .header {
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100vw;
  }

  .navbar-menu {
    display: none;
  }
  .navbar-toggle {
    display: flex;
  }
}
</style>
