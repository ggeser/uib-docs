import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchUsers(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/apps/depart/departslist/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
      // fetchUsers(ctx, queryParams) {
      //     return new Promise((resolve, reject) => {
      //         axios
      //             .get('/apps/depart/departslist', { params: queryParams })
      //             .then(response => resolve(response))
      //             .catch(error => reject(error))
      //     })
      // },


    fetchUser(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/apps/depart/departs/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    addUser(ctx, params) {
        console.log(params)
      return new Promise((resolve, reject) => {
        axios
          .post('/apps/depart/departs', {params: params })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

  },
}
