<template>
  <div>
    <Centerer>
      <Logo alt="Logo Z3rO" src="/img/nmz-logo-white.png"/>
    </Centerer>
    <Centerer>
      <Logo2 alt="Logo Z3rO" src="/img/nmz-logo-white.png" />
    </Centerer>
    <Centerer>
      <Logo3 alt="Logo Z3rO" src="/img/nmz-logo-white.png" />
    </Centerer>
  </div>
</template>

<script>
import Centerer from '@/Utils/Centerer';
import Logo, { Logo2nd, Logo3rd } from './Logo';

export default {
  name: 'logo',
  components: {
    Logo,
    Logo2: Logo2nd,
    Logo3: Logo3rd,
    Centerer,
  },
};
</script>
