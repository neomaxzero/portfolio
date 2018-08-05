<template>
  <AppLayout>
    <Centerer column>
      <P>
        {{text}}
      </P>
      <UL horizontal>
        <li><A href="https://github.com/neomaxzero" alt="github" target="_blank" >github</A></li>
        <li><A href="https://www.linkedin.com/in/neomaxzero/" alt="github" target="_blank" >linkedin</A></li>
        <li><A href="https://500px.com/neomaxzero" alt="github" target="_blank" >500px</A></li>
        <li><A href="mailto:maxicespedes7@hotmail.com" alt="email">email</A></li>
      </UL>
    </Centerer>
  </AppLayout>
</template>

<script>
import AppLayout from '@/components/AppLayout/AppLayout.vue';
import Centerer from '@/Utils/Centerer';
import DU from '@/components/DesignUnits';

console.log(DU);
export default {
  name: 'home',
  components: {
    AppLayout,
    Centerer,
    ...DU,
  },
  data() {
    return {
      text: 'your curiosity leads you here...theres no way back',
    };
  },
};
</script>
