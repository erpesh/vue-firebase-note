<template>
  <header>
    <nav>
      <div class="nav-side">
        <span><router-link to="/">Todos</router-link></span>
      </div>
      <div class="nav-side">
        <template v-if="currentUser === 'No user'">
          <router-link class="login-link" to="/auth">Login</router-link>
        </template>
        <template v-else>
          <span @click="logOut">Logout</span>
        </template>
      </div>
    </nav>
  </header>
</template>

<script>
import { inject, ref } from "vue";
import {signOut} from "firebase/auth";

export default {
  name: "HeaderComponent",
  setup() {
    const auth = inject("auth");
    const currentUser = ref("");

    auth.onAuthStateChanged((user) => {
      currentUser.value = user ? user.email : "No user";
    });

    const logOut = () => {
      window.location.href = "auth";
      signOut(auth);
    };

    return { currentUser, logOut };
  }
};
</script>

<style scoped>
header {
  background: #363636;
  color: white;
}
  nav {
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    padding: 15px 20px;
    margin: 0 auto;
  }
  .nav-side > span, .nav-side > span > a, .login-link {
    cursor: pointer;
    transition: .4s;
    font-size: 20px;
  }
  .nav-side > span > a, .nav-side > span > a:visited, .login-link, .login-link:visited  {
    text-decoration: none;
    color: white;
    transition: .4s;
  }
.nav-side > span > a:hover, .nav-side > span:hover, .login-link:hover {
  color: #00d1b2;
}
</style>