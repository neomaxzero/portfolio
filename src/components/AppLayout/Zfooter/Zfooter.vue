<template>
    <Footer>
        Z3rO | {{year}}
    </Footer>
</template>

<script>
import Footer from './Footer';

export default {
  name: 'zfooter',
  components: {
    Footer,
  },
  props: {
    year: {
      type: Number,
      default: new Date().getFullYear(),
    },
  },
};
</script>
