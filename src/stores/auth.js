import { defineStore } from "pinia";

export const userAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    id: '',
    name: '',
    token: '',
    isAdmin: false
  }),
  getters: {
    getToken: (state) => { return state.token },
    getName: (state) => { return state.name },
    getId: (state) => { return state.id },
  },
  actions: {
    addStore() {
      const storage = JSON.parse(localStorage.getItem('AUTH_KEY'))
      if (storage !== null) {
        this.id = storage.id
        this.name = storage.name
        this.token = storage.token
        this.isAdmin = true
      }
    },
    resetStore() {
      this.id = ''
      this.name = ''
      this.token = ''
      this.isAdmin = false
    }
  },
});