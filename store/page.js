export const state = () => ({
  pageTitle: '頁面標題',
  pageTitleEn: 'Page Title',
  backgroundImage: '',


  showLightboxt: false,
})

export const mutations = {
  setPageTitle(state, pageTitle) {
    state.pageTitle = pageTitle
  },
  setPageTitleEn(state, pageTitleEn) {
    state.pageTitleEn = pageTitleEn
  },
  setBackgroundImage(state, backgroundImage) {
    state.backgroundImage = backgroundImage
  },
  setShowLightbox(state, b) {
    state.showLightboxt = b
  }
}
