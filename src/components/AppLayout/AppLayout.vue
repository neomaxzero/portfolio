<template>
    <Layout>
      <Header />
      <Body>
        <slot></slot>
      </Body>
      <Footer />
    </Layout>
</template>

<script>
import 'normalize.css';

import '@/components/theme';

import Layout from './Layout';
import Footer from './Zfooter/Zfooter.vue';
import Body from './Body/Body.vue';
import Header from './Header/Header.vue';

export default {
  name: 'appLayout',
  components: {
    Layout,
    Footer,
    Header,
    Body,
  },
};
</script>
