import { defineStore } from 'pinia'

export const useStore = defineStore('tabBar', {
  state: () => ({
    selected: 0,
  }),
  actions: {
    setSelected(index) {
      this.selected = index
    },
  },
})
