<template>
  <div class="about">
    <div class="profilePicture">
      <img src="../assets/me.jpg" alt="Me!" width="40%" />
    </div>
      <p>{{msg}}</p>
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
      msg: 'Hi! Call me Maxi!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .about{
      display: flex;
      height: 80%;
      justify-content: center;
      align-items: center;
  }
  .profilePicture{
    margin: 1em;

    border-radius: 10px;

  }

  img{
    border: 1px solid white;
  }
</style>
