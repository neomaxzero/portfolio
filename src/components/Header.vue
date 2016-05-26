<template>
  <div class="headero">
    <a href="#">About</a>
    <a href="#">
        <img class="logo" src="../assets/logo.svg" alt="is Maxi">
    </a>
    <a href="#">Contact</a>
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
