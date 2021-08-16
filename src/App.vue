<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/session">Start a Session</router-link> |
      <router-link to="/log">Log a Previous Session</router-link> |
      <amplify-signout v-if="signedIn"></amplify-signout>
      <router-link v-else to="/auth">Sign in</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import { Auth, Hub } from "aws-amplify";

export default {
  name: "Wordtracker",
  data() {
    return {
      signedIn: false,
    };
  },
  beforeCreate() {
    // Listen for auth events from Amplify
    // Note: use of arrow functions for callbacks means `this` will be
    // inherited from current scope, i.e. this == the App component.
    Hub.listen("auth", (data) => {
      console.log("data:", data);
      const { payload } = data;
      if (payload.event === "signIn") {
        this.signedIn = true;
        this.$router.push("/");
      }
      if (payload.event === "signOut") {
        this.signedIn = false;
        this.$router.push("/");
      }
    });
    Auth.currentAuthenticatedUser()
      .then(() => {
        this.signedIn = true;
      })
      .catch(() => (this.signedIn = false));
  },
};
</script>
