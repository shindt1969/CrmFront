<template lang="pug">
#nav
  router-link(to='/') 聯繫
  | |
  router-link(to='/about') 關於
  | |
  router-link(to='/pending') 填表
  | |
  router-link(to='/login') login
  | |
  h4(class="movePlace") {{$store.state.Member.douserlist.payLoad.username}} 個人專區
router-view
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
  padding: 6px;

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.movePlace{
 position:absolute;
 top:8px;
 left:810px
}
</style>
