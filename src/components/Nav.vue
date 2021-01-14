<template>
  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/reports">Reports</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link>
      <!-- Logga ut -->
  </div>
</template>

<script>
export default {
    name: 'Nav',
    props: {}
}
</script>

<style scoped>

#nav {
  padding: 30px;
}

a {
  font-weight: bold;
  color: #2A9C9A;

}

a.router-link-exact-active {
  color: #A83D00;
}
</style>
