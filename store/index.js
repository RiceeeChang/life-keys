// 全部變數都塞到state裡面嗎？
export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++;
  }
}