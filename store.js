import { createStore } from 'vuex';

export const store = createStore({
  state: {
    auth: false,
    data: [
      { password: '11111111', login: 'Danador' }
    ],
    users: [
      {
        id: 1,
        nikname: 'Papapka',
        name: 'fedor',
        email: 'petr@gmail.com',
        site: 'petr.io'
      },
      {
        id: 2,
        nikname: 'Pupa',
        name: 'Taras',
        email: 'tarasozavr@mail.ru',
        site: 'taras.com'
      },
    ]
  },
  mutations: {
    setAuth(state, value) {
      state.auth = value;
    },
    updateUser(state, user) {
      state.users.forEach(u => u.id === user.id && (u === user));
    },
    deleteUser(state, id) {
      state.users = state.users.filter(u => u.id !== id);
    },
    addUser(state, user) {
      state.users.push(user);
    }
  },
  actions: {
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