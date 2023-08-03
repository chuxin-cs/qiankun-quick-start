<template>
  <div id="app">
    <nav>
      <router-link to="/vue-app">vue-app 子应用</router-link>
      <router-link to="/vue-app/sun-app">sun-app 子应用</router-link>
    </nav>
    <router-view />
    <!-- vue-app -->
    <div id="VueContainer"></div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
