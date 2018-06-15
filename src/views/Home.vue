<template>
  <AppLayout>
    <Logo />
    <Centerer>
      <Name> Maxi </Name>
      <Divisor />
      <Role> UI/UX</Role>
    </Centerer>
  </AppLayout>
</template>

<script>
// @ is an alias to /src
import AppLayout from '@/components/AppLayout/AppLayout.vue';
import Centerer from '@/Utils/Centerer';

import Logo from '@/components/AppLayout/Logo/Logo.vue';
import { Name, Role, Divisor } from '@/components/AppLayout/Layout';

export default {
  name: 'home',
  components: {
    AppLayout,
    Centerer,
    Logo,
    Name,
    Role,
    Divisor,
  },
};
</script>
