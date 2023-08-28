<template>
  <div class="pagination">
    <a class="prev" :href="pageUrl + (currentPage-1)">
      <svg data-name="Group 12881" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M24 0H0v24h24z" style="fill:none"/>
        <path d="m15 6 -6 6 6 6" style="stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;fill:none"/>
      </svg>
    </a>

    <ol>
      <li class="active"><a>1</a></li>
      <li><a>2</a></li>
      <li><a>3</a></li>
      <li><a>4</a></li>
      <li><a>...</a></li>
      <li><a>16</a></li>
    </ol>

    <a class="next">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path data-name="Path 11940" d="M24 0H0v24h24z" style="fill:none"/>
        <path data-name="Path 11941" d="m9 6 6 6-6 6" style="stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;fill:none"/>
      </svg>
    </a>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.pagination {
  margin: 0 auto;
  margin-top: 100px;

  @include small-screen {
    margin-top: 40px;
  }
  ol {
    list-style-type: none;
    display: flex;
    column-gap: 8px;
    padding: 0;
    margin: 0 20px;

    li {

      width: 32px;
      height: 32px;
      line-height: 28px;
      text-align: center;
      vertical-align: middle;
      border: 1px #fff solid;

      a {
        font-size: 16px;
        font-weight: 300;
      }
    }
    .active {
      color: #333;
      background-color: $main-color;
      border-color: $main-color;
      a {
        font-weight: 500;
      }
    }
  }
}
</style>
