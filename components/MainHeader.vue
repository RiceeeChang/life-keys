<template>
  <header class="bg-333">
    <div class="section-content padding-left-0">
      
      <nav class="navbar">
        <div class="navbar-logo">
          <a href="/"><img src="/BrandLogo.svg" alt="伯克錸物業管理"></a>
        </div>
        <ul class="navbar-menu">
          <li>
            <a class="menu-item" href="#">公司簡介</a>
            <div class="dropdown-menu">
              <div class="dropdown-menu-content">
                <div class="dropdown-menu-title">
                  <div class="zh">公司簡介</div>
                  <div class="en">About Us</div>
                </div>
                <div class="dropdown-menu-divider"></div>
                <ul class="dropdown-menu-list">
                  <li><a href="#">- 社區規劃</a></li>
                  <li><a href="#">- 經營理念</a></li>
                  <li><a href="#">- 管理品質</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a class="menu-item" href="#">服務項目</a>
            <div class="dropdown-menu">
              <div class="dropdown-menu-content">
                <div class="dropdown-menu-title">
                  <div class="zh">服務項目</div>
                  <div class="en">Service Items</div>
                </div>
                <div class="dropdown-menu-divider"></div>
                <ul class="dropdown-menu-list">
                  <li><a href="#">- 物業管理</a></li>
                  <li><a href="#">- 保全服務</a></li>
                  <li><a href="#">- 清潔服務</a></li>
                  <li><a href="#">- 餐飲服務</a></li>
                  <li><a href="#">- 設備機電</a></li>
                  <li><a href="#">- 代租代管</a></li>
                  <li><a href="#">- 生活服務</a></li>
                  <li><a href="#">- 智能服務</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a class="menu-item" href="#">最新消息</a>
            <div class="dropdown-menu">
              <div class="dropdown-menu-content">
                <div class="dropdown-menu-title">
                  <div class="zh">最新消息</div>
                  <div class="en">News</div>
                </div>
                <div class="dropdown-menu-divider"></div>
                <ul class="dropdown-menu-list">
                  <li><a href="#">- 最新消息</a></li>
                  <li><a href="#">- 活動花絮</a></li>
                  <li><a href="#">- 評比佳績</a></li>
                  <li><a href="#">- 媒體報導</a></li>
                  <li><a href="#">- 教育訓練</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a class="menu-item" href="#">社區實踐</a>
            <div class="dropdown-menu">
              <div class="dropdown-menu-content">
                <div class="dropdown-menu-title">
                  <div class="zh">社區實績</div>
                  <div class="en">Company Archievements</div>
                </div>
                <div class="dropdown-menu-divider"></div>
                <ul class="dropdown-menu-list">
                  <li><a href="#">- 台北</a></li>
                  <li><a href="#">- 台中</a></li>
                  <li><a href="#">- 高雄</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="menu-item"><a href="#">菁英召募</a></li>
          <li class="menu-item"><a href="#">聯絡我們</a></li>
        </ul>
        <div class="navbar-toggle">
          <img src="/assets/images/hamburger.svg">
        </div>
      </nav>

    </div>
  </header>
</template>


<style scoped>
.bg-333 {
  background-color: #333;
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
}
.navbar-menu > li {
  box-sizing: border-box;
  border-bottom: 4px solid #ffffff00;
}
.navbar-menu > li:hover {
  border-bottom: 4px solid #d5b877;
}
.navbar-menu > li a:visited {
  color: #fff;
}
.navbar-menu > li:hover > a {
  color: #d5b877;
}
.navbar-menu li a {
  text-decoration: none;
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
  font-weight: 100;
}
.navbar-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}
@media (max-width: 768px) {
  .navbar-menu {
    display: none;
  }
  .navbar-toggle {
    display: flex;
  }
}
</style>