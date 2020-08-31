<template>
  <div id="login">
    <PasswordReset
      v-if="showPasswordReset"
      @close="togglePasswordReset()"
    ></PasswordReset>

    <section>
      <div class="col1"></div>
      <div :class="{ 'signup-form': !showLoginForm }" class="col2">
        <form v-if="showLoginForm" @submit.prevent>
          <h1>MyCity - Healthcare</h1>
          <div class="form-group">
            <label for="email1" class="float-label">Email</label>
            <input
              v-model.trim="loginForm.email"
              type="text"
              placeholder="Email"
              id="email1"
              class="float-input-field"
            />
          </div>
          <div class="form-group">
            <label for="password1" class="float-label">Password</label>
            <input
              v-model.trim="loginForm.password"
              type="password"
              placeholder="Password"
              id="password1"
              class="float-input-field"
            />
          </div>
          <div class="form-group">
            <label for="pincode" class="float-label">Pincode</label>
            <input
              type="text"
              placeholder="123456"
              id="pincode1"
              class="float-input-field"
            />
          </div>
          <button @click="login()" class="button">Log In</button>
          <div class="extras">
            <a @click="togglePasswordReset()">Forgot Password</a>
            <a @click="toggleForm()">Create an Account</a>
          </div>
        </form>

        <form v-else @submit.prevent>
          <h1>MyCity - Healthcare</h1>
          <div class="form-group">
            <label for="name" class="float-label">Name</label>
            <input
              v-model.trim="signupForm.name"
              type="text"
              placeholder="Your name"
              id="name"
              class="float-input-field"
            />
          </div>
          <div class="form-group">
            <label for="title" class="float-label">Title</label>
            <input
              v-model.trim="signupForm.title"
              type="text"
              placeholder="Company"
              id="title"
              class="float-input-field"
            />
          </div>
          <div class="form-group">
            <label for="email2" class="float-label">Email</label>
            <input
              v-model.trim="signupForm.email"
              type="text"
              id="email2"
              class="float-input-field"
            />
          </div>
          <div class="form-group">
            <label for="password2" class="float-label">Password</label>
            <input
              v-model.trim="signupForm.password"
              type="password"
              id="password2"
              class="float-input-field"
            />
          </div>
          <button @click="signup()" class="button">Sign Up</button>
          <div class="extras">
            <a @click="toggleForm()">Back to Log In</a>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import PasswordReset from "@/components/PasswordReset";

export default {
  components: {
    PasswordReset
  },
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      },
      signupForm: {
        name: "",
        title: "",
        email: "",
        password: ""
      },
      showLoginForm: true,
      showPasswordReset: false
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.loginForm.email,
        password: this.loginForm.password
      });
    },
    signup() {
      this.$store.dispatch("signup", {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        title: this.signupForm.title
      });
    },
    toggleForm() {
      this.showLoginForm = !this.showLoginForm;
    },
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset;
    }
  }
};
</script>

<style lang="scss" scoped></style>
