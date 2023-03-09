<template>
  <div class="auth-page">
    <h1 class="title">{{ authMode }}</h1>
    <form @submit.prevent="submitForm">
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            class="input"
            type="email"
            placeholder="Enter your email"
            v-model.trim="email"
            required
          >
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input
            class="input"
            type="password"
            placeholder="Enter your password"
            v-model.trim="password"
            required
          >
        </div>
      </div>
      <div v-if="authMode === 'Register'" class="field">
        <label class="label">Confirm Password</label>
        <div class="control">
          <input
            class="input"
            type="password"
            placeholder="Confirm your password"
            v-model.trim="confirmPassword"
            required
          >
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button type="submit" class="button is-primary">{{ authMode }}</button>
        </div>
        <div class="control">
          <button type="button" class="button is-text" @click="toggleAuthMode">
            {{ authMode === "Login" ? "Create an account" : "Sign in to your account" }}
          </button>
        </div>
      </div>
    </form>
    <div class="divider">Or</div>
    <div class="google-auth">
      <button class="button is-link" @click="signInWithGoogle">Sign in with Google</button>
    </div>
  </div>

</template>

<script>
import { ref } from "vue";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export default {
  name: "AuthPage",
  setup() {
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const authMode = ref("Login");

    const toggleAuthMode = () => {
      authMode.value = authMode.value === "Login" ? "Register" : "Login";
    };

    const submitForm = async () => {
      try {
        const auth = getAuth();
        if (authMode.value === "Login") {
          await signInWithEmailAndPassword(auth, email.value, password.value);
        } else {
          if (password.value !== confirmPassword.value) {
            // throw new Error("Passwords do not match");
          }
          await createUserWithEmailAndPassword(auth, email.value, password.value);
        }
        window.location.href = "/";
      } catch (err) {
        // toast.error(err.message);
      }
    };

    const signInWithGoogle = async () => {
      try {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        window.location.href = "/";
      } catch (err) {
        // toast.error(err.message);
      }
    };

    return {
      email,
      password,
      confirmPassword,
      authMode,
      toggleAuthMode,
      submitForm,
      signInWithGoogle
    };
  }
};
</script>
<style>
.auth-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 15px;
}
.title {
  display: flex;
  justify-content: center;
}
</style>
