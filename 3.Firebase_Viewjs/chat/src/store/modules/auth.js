import mutations from '@/store/mutations';
import { firebaseLogin, firebaseLogout } from '@/services/firebase/auth.service';

const {
  IS_LOGGED_IN,
  LOGIN_LOADER,
} = mutations;

const authStore = {
  namespaced: true,
  state: {
    isLoggedIn: false,
    loginInProgress: false,
  },
  getters: {
    isLoggedIn: ({ isLoggedIn }) => isLoggedIn,
    loginInProgress: ({ loginInProgress }) => loginInProgress,
  },
  mutations: {
    [IS_LOGGED_IN](state, bool) {
      state.isLoggedIn = bool;
    },
    [LOGIN_LOADER](state, bool) {
      state.loginInProgress = bool;
    },
  },
  actions: {
    setIsLoggedInState: {
      handler({ commit }, bool) {
        commit(IS_LOGGED_IN, bool);
      },
      root: true,
    },
    async login({ commit, dispatch }, { email, password }) {
      console.log(email, password);
      try {
        commit(LOGIN_LOADER, true);
        const res = await firebaseLogin(email, password);
        console.log(res);
      } catch (e) {
        dispatch(
          'loadMessage',
          { type: 'error', title: 'Error', message: e.message },
          { root: true },
        );
      } finally {
        commit(LOGIN_LOADER, false);
      }
    },
    async logout() {
      try {
        await firebaseLogout();
      } catch (e) {
        console.log(e);
      }
    },
  },
};

export default authStore;
