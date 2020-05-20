import router from '@/router';

export default function authGuard(store) {
  const isAuth = store.state.auth.isLoggedIn;
  const authRoutes = ['Login', 'SignUp'];

  router.beforeEach((to, from, next) => {
    console.log(to);

    if (authRoutes.includes(to.name) && isAuth) {
      return next({ name: 'Home' });
    }

    if (!authRoutes.includes(to.name) && !isAuth) {
      return next({ name: 'Login' });
    }

    return next();
  });
}
