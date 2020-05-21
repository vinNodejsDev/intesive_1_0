import Vue from 'vue';
import Vuex from 'vuex';
import authGuard from '@/guards/auth.guard';
import firebase from '@/plugins/firebase';
import auth from './modules/auth';
import notify from './modules/notify';
import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    notify,
    user,
  },
});

firebase.auth().onAuthStateChanged((userData) => {
  store.dispatch('setIsLoggedInState', Boolean(userData));
  store.dispatch('setUserState', userData);
  // if (userData) {

  // }
});

authGuard(store);

export default store;
