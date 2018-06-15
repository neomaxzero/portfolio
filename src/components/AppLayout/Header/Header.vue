<template>
   <Header>
     HARRY POTTER
     <slot></slot>
   </Header>
</template>

<script>
import Header from './Header';

export default {
  name: 'header',
  components: {
    Header,
  },
};
</script>
