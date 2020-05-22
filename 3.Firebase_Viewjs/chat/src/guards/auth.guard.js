import router from '@/router';

export default function authGuard(store) {
  const authRoutes = ['Login', 'SignUp'];

  router.beforeEach((to, from, next) => {
    console.log(to);

    if (authRoutes.includes(to.name) && store.state.auth.isLoggedIn) {
      return next({ name: 'Home' });
    }

    if (!authRoutes.includes(to.name) && !store.state.auth.isLoggedInuth) {
      return next({ name: 'Login' });
    }

    return next();
  });
}
