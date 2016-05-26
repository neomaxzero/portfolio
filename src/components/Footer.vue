<template>
  <div class="footer">
    <p>isMaxi ©{{year}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer{
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 10%;
    width: 100%;
    color: #5B5D7D  ;
  }

</style>
