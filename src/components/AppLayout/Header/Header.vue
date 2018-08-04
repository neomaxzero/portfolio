<template>
   <Header>
     <UL>
       <router-link to="/about">
         <item>about</item>
       </router-link>
     </UL>
     <slot></slot>
   </Header>
</template>

<script>
import Header, { item, options as UL } from './Header';

export default {
  name: 'headerZ',
  components: {
    Header,
    item,
    UL,
  },
};
</script>
