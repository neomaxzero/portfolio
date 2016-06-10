<template>
  <div class="home">
    <h2>
      <p class="owner">
        Maxi Céspedes
      </p>
      <p class="prof">
        Web Engineer
      </p>
      <p class="email">
        <a href="mailto:maxicespedes7@hotmail.com">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          Email me
        </a>
      </p>
    </h2>
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

.home{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  text-align: center;
}
.owner{
  color: #e86440;
  font-size: 1.3em;
  margin: 5px;
}
.prof{
  margin: 5px;
  font-weight: normal;
  color:white;
}

.email{
    font-size: 0.7em;
    font-weight: 100;
}
</style>
