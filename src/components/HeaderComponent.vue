<template>
  <header>
    <div class="nav-side">
      <span>Todos</span>
    </div>
    <div class="nav-side">
      <span @click="logOut">Logout</span>
    </div>
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
      console.log(user);
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
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    padding: 5px 20px;
    margin: 0 auto;
  }
  .nav-side > span {
    cursor: pointer;
  }
</style>