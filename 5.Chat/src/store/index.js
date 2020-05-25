import Vue from 'vue';
import Vuex from 'vuex';
import authGuard from '@/guards/auth.guard';
import firebase from '@/plugins/firebase';
import { getUserIdToken } from '@/services/firebase/auth.service';
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

firebase.auth().onAuthStateChanged(async (userData) => {
  store.dispatch('setIsLoggedInState', Boolean(userData));
  store.dispatch('setUserState', userData);

  if (userData) {
    const token = await getUserIdToken();
    localStorage.setItem('vue_app_token', token);
  } else {
    localStorage.removeItem('vue_app_token');
  }
});

authGuard(store);

export default store;
