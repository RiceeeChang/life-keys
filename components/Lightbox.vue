<!-- components/Lightbox.vue -->
<template>
  <div class="lightbox" v-if="show">
    <div class="lightbox-content">
      <div class="title-nav">
        <div class="title">{{ title }}</div>
        <button class="close" @click="close">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <defs>
                  <clipPath>
                      <path data-name="Rectangle 6849" transform="translate(178.218 482)" style="fill:none" d="M0 0h24v24H0z"/>
                  </clipPath>
              </defs>
              <g transform="translate(-178.218 -482)" style="clip-path:url(#t9w24vjvba)">
                  <path d="M-1068.349 36.689V28.93h-7.76a1.009 1.009 0 0 1-.891-1.1 1.009 1.009 0 0 1 .891-1.094h7.76V18.98a1.009 1.009 0 0 1 1.1-.891 1.009 1.009 0 0 1 1.094.891v7.76h7.76a1.009 1.009 0 0 1 .891 1.094 1.008 1.008 0 0 1-.891 1.1h-7.76v7.76a1.009 1.009 0 0 1-1.094.891 1.01 1.01 0 0 1-1.1-.896z" transform="rotate(45 -1001.23 1778.821)" style="fill:#fff;stroke:transparent;stroke-miterlimit:10"/>
              </g>
          </svg>
        </button>
      </div>

      <img :src="currentImage" alt="Image" />
      <!-- 添加前一张和后一张按钮 -->

      <div class="nav">
        <button class="prev" @click="prevImage"><svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M24 0H0v24h24z" style="fill:none"/>
          <path d="m15 6 -6 6 6 6" style="stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;fill:none"/>
        </svg></button>
        <div class="index-number">{{ indexNumber }}</div>
        <button class="next" @click="nextImage"><svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M24 0H0v24h24z" style="fill:none"/>
          <path d="m9 6 6 6-6 6" style="stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;fill:none"/>
        </svg></button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    images: Array,
    index: Number,
  },
  data() {
    return {
    }
  },
  methods: {
    close() {
      this.$store.commit('page/setShowLightbox', false);
      window.onscroll = function () { };
    },
    prevImage() {
      if (this.index > 0) {
        this.index = this.index - 1;
      }
    },
    nextImage() {
      if (this.index < this.images.length - 1) {
        this.index = this.index + 1;
      }
    },
  },
  computed: {
    currentImage() {
      return this.images[this.index];
    },
    indexNumber() {
      return (this.index+1) + '/' + this.images.length;
    },
    show() {
      return this.$store.state.page.showLightboxt;
    }
  }
}
</script>

<style lang="scss" scoped>
/* 添加样式以使lightbox居中 */
.lightbox {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);


  display: flex;
  justify-content: center;

}

.lightbox-content {
  width: 100%;
  padding: 8px 24px;
  margin-top: 100px;
  text-align: center;

  display: flex;
  flex-direction: column;
  height: 80vh;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100%;
  }
}
.close, .prev, .next {
  background: none;
  padding: 0;
  border: 0;

  //font-size:24px;
  line-height: 24px;
}
.title-nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .title {
    font-size: 16px;
    line-height: 30px;
  }
}
.nav {
  width: 168px;
  display: flex;
  justify-content: space-between;

  .index-number {
    font-size: 16px;
    line-height: 30px;
  }
}

</style>
