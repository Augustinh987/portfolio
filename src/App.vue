<template>
  <HomeView></HomeView>
</template>

<script>
import HomeView from './views/HomeView.vue';

export default{
    components: { HomeView }
}

</script>

<style>

* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

</style>
