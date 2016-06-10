<template>
  <div class="about">
    <div class="profilePicture">
      <img src="../assets/me.jpg" alt="Me!" width="40%" />
    </div>
    <div class="bio">
      <h2>{{bioTitle}}</h2>
      <p class="Intro">
        <strong>Developer</strong> with the heart of a <strong>Web Architect</strong> (aspiring).
        Currently living in Buenos Aires. He is very curious about the current trend of technologies
        chosen to build the web of the future. Very into JavaScript for the FrontEnd and the Backend.
      </p>
      <p class="hobbies">
        Maxi loves spending time with his friends and with his girlfriend, also enjoys <a href="https://www.500px.com/neomaxzero">Photography</a>
        , swimming, <a href="https://github.com/neomaxzero">coding</a> and sometimes playing video games. :D
      </p>

    </div>

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
      bioTitle: 'is Maxi!'
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
    width: 400px;
  }

  .bio{
    align-self: center;
    width: 400px;
  }

  .hobbies{
      margin-top: 1.5em;
  }

  img{
    border: 1px solid white;
  }



</style>
