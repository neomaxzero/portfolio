<template>
    <Layout>
      <Logo />
      <Centerer>
        <Name> Maxi </Name>
        <Divisor />
        <Role> UI/UX</Role>
      </Centerer>

      <Body />
      <Footer />
    </Layout>
</template>

<script>
import 'normalize.css';

import Centerer from '@/Utils/Centerer';
import '@/components/theme';

import Logo from './Logo/Logo.vue';
import Layout, { Name, Role, Divisor } from './Layout';
import Footer from './Zfooter/Zfooter.vue';
import Body from './Body/Body.vue';

export default {
  name: 'appLayout',
  components: {
    Layout,
    Logo,
    Name,
    Role,
    Divisor,
    Centerer,
    Footer,
    Body,
  },
};
</script>
