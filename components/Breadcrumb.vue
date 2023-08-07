<template>
  <ol class="breadcrumb">
    <li><span class="icon-home"></span><a href="/">首頁</a></li>
    <li class="item">{{ breadcrumbItem.text }}</li>
  </ol>
</template>

<script>
export default {
  props: {
    breadcrumbItem: {
      type: Object,
      default: () => {
        return {
          url: '',
          text: '',
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-home {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-top: 2px;
  margin-right: 8px;

  background-image: url('/assets/images/icon-home.svg');
  background-size: cover;
  background-repeat: no-repeat;
}
.breadcrumb {
  list-style-type: none;

  padding: 0;
  margin: 8px 4px;

  display: flex;

  background: transparent;


  li {
    display: inline-flex;
    align-items: center;
  }
  li:first-child {
    text-decoration: underline;
    text-underline-offset: 4px;
  }


  .item {
    margin: 0 8px;
  }
  .item::before {
    content: url("/assets/images/icon-arrow.svg");

    display: inline-block;
    width: 24px;
    height: 24px;
    padding-top: 1px;
    margin-right: 8px;

    text-align: center;

  }
}
</style>
