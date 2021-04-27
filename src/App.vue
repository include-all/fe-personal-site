<template>
  <router-view />
</template>

<style lang="less">
html {
  height: 100%;
}
body {
  margin: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 1024px;
  height: 100%;
}
@media screen and (max-width: 500px) {
  #app {
    min-width: 0;
  }
}
</style>
