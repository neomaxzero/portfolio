<template>
  <Footer>m4x | {{year}}</Footer>
</template>

<script>
import Footer from "./Footer";

export default {
  name: "zfooter",
  components: {
    Footer
  },
  props: {
    year: {
      type: Number,
      default: new Date().getFullYear()
    }
  }
};
</script>
