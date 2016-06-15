<template>
  <div class="headero">
    <a v-link="{path: '/about'}">
      <i class="fa fa-male fa-lg" aria-hidden="true"></i>
    </a>
    <a v-link="{path: '/'}">
        <img class="logo" src="../assets/logo.svg" alt="is Maxi">
    </a>
    <a v-link="{path: '/contact'}">
      <i class="fa fa-volume-control-phone fa-lg" aria-hidden="true"></i>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
.logo{
  fill:#3881cc;
}
.headero{
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 10%;
}
</style>
