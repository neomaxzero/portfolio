<template>
  <AppLayout>
    <Centerer>
      <Quote>
        {{text}}
      </Quote>
      <div>
      <Mail href="mailto:maxicespedes7@hotmail.com">contact</Mail>
      </div>
    </Centerer>
  </AppLayout>
</template>

<script>
// @ is an alias to /src
import AppLayout from '@/components/AppLayout/AppLayout.vue';
import Centerer from '@/Utils/Centerer';
import Quote from '@/components/DesignUnits/quote';
import Mail from '@/components/DesignUnits/mail';

export default {
  name: 'home',
  components: {
    AppLayout,
    Centerer,
    Quote,
    Mail,
  },
  data() {
    return {
      text: 'your curiosity leads you here...theres no way back',
    };
  },
};
</script>
