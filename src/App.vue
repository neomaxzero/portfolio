<template>
  <div class="wraper">
    <headero></headero>
    <home></home>
    <footero class="foo"></footero>
  </div>

</template>

<script>
import Headero from './components/Header'
import Footero from './components/Footer'
import Home from './pages/Home'

export default {
  components: {
    Headero,
    Footero,
    Home
  }
}
</script>

<style>
html{
  margin:0;
  height: 98%;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  background-color: #191C3A;
  color:#fff;
}
body {
  height: 100%;
}
a {
  text-decoration: none;
  color:#FFA992;
}
.logo {
  width: 50px;
  height: 100px
}

.wraper{
  display: flex;
  flex-direction: column;
  height: 100%;
}


.foo{
  align-self: flex-end;
}

</style>
