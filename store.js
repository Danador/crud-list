import { createStore } from 'vuex';
import axios from 'axios'

export const store = createStore({
  state: {
    auth: false,
    data: [
      { password: '11111111', login: 'Danador' }
    ],
    users: []
  },
  mutations: {
    setAuth(state, value) {
      state.auth = value;
    },
    updateUser(state, user) {
      state.users = state.users.map(u => u.id === user.id ? user : u);
    },
    deleteUser(state, id) {
      state.users = state.users.filter(u => u.id !== id);
    },
    addUser(state, user) {
      state.users.push(user);
    },
    setUsers(state, users) {
      state.users = users;
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        commit('setUsers', response.data);
      } catch (error) {
        console.error(error);
      }
    },
    updateUser({ commit }, user) {
      commit('updateUser', user);
    },
    deleteUser({ commit }, id) {
      commit('deleteUser', id);
    },
    addUser({ commit }, user) {
      commit('addUser', user);
    }
  },
  getters: {
    getAuthorized: state => {
      return state.data;
    },
    getUsers: state => {
      return state.users;
    }
  }
});