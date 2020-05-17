import Vue from 'vue';
import Vuex from 'vuex';
import firebase from '@/plugins/firebase';
import router from '@/router';
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
  },
});

firebase.auth().onAuthStateChanged((userData) => {
  console.log('onAuthStateChanged', user);

  store.dispatch('setIsLoggedInState', Boolean(userData));
  store.dispatch('setUserState', Boolean(userData));
  if (user) {
    router.push({ name: 'Home' });
  }
});

export default store;
