<template>
    <Centerer>
      <Logo src="/img/nmz-logo-white.png"/>
    </Centerer>
</template>

<script>
import Centerer from '@/Utils/Centerer';
import Logo from './Logo';

export default {
  name: 'logo',
  components: {
    Logo,
    Centerer,
  },
};
</script>
