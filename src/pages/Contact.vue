<template>
  <div class="contact">
    <h1>{{ msg }}</h1>
    <p>
      <div class="icons">
        <a href="https://github.com/neomaxzero">
          <i class="fa fa-github fa-lg" aria-hidden="true"></i>
        </a>
      </div>
    </p>

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
      msg: 'You can find me on...'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  text-align: center;
}

</style>
