export const state = () => ({
  pageTitle: '頁面標題',
  pageTitleEn: 'Page Title',
  backgroundImage: '',
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
  }
}

export const actions = {

}

export const getters = {

}
