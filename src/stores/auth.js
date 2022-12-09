import { defineStore } from "pinia";

export const userAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    id: '',
    username: '',
    token: '',
    isAdmin: false
  }),
  getters: {
    getToken: (state) => { return state.token },
    getUsername: (state) => { return state.username },
    getId: (state) => { return state.id },
  },
  actions: {
    addStore() {
      const storage = JSON.parse(localStorage.getItem('AUTH_KEY'))
      if (storage !== null) {
        this.id = storage.id
        this.username = storage.username
        this.token = storage.token
        this.isAdmin = true
      }
    },
    resetStore() {
      this.id = ''
      this.username = ''
      this.token = ''
      this.isAdmin = false
    },
    getAuthToken() {
      return this.token
    }
  },
});