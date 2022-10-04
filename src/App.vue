<template>
  <the-navigation></the-navigation>
  <router-view></router-view>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';
export default {
  components:{
        TheNavigation,
    }
}
</script>

<style>
body{
  margin:0;
  background-color: white;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Inter', sans-serif;
}
</style>
