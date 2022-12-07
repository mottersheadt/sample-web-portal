<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="/">Template Project</a>
      <button class="navbar-toggler" type="button" aria-controls="navbarText" aria-expanded="false" aria-label="Template Project">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" :class="{active: route == '/' || !route}" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{active: route == '/submit'}" href="/submit">Submit</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        route: window.location.pathname
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
