<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <Home v-if="route == '/' || !route" msg="Welcome to Your Vue.js App"/>
      <Submit v-if="route == '/submit'" msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue'
import Submit from './components/Submit.vue'

export default {
  name: 'App',
  components: {
    Home,
    Navbar,
    Submit
  },

  data() {
    return {
      route: window.location.pathname
    }
  },
}
</script>

<style>
</style>
