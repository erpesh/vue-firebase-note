<template>
  <header>
    <nav>
      <div class="nav-side">
        <span><RouterLink to="/">Todos</RouterLink></span>
      </div>
      <div class="nav-side">
        <span @click="logOut">Logout</span>
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
    console.log(currentUser.value);

    const logOut = () => {
      window.location.href = "/auth";
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
  .nav-side > span, .nav-side > span > a {
    cursor: pointer;
    transition: .4s;
    font-size: 20px;
  }
  .nav-side > span > a, .nav-side > span > a:visited  {
    text-decoration: none;
    color: white;
    transition: .4s;
  }
.nav-side > span > a:hover, .nav-side > span:hover {
  color: #00d1b2;
}
</style>