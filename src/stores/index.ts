import { defineStore } from "pinia";

const USER_INFO = {
  userName: 'Bruce',
  id: 0
}

export const useUserStore = defineStore('userInfo', () => {
  const userInfo = reactive(USER_INFO)

  return {
    userInfo
  }
})