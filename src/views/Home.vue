<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <sw-characters></sw-characters>
  </div>
</template>

<script>
// @ is an alias to /src
import SwCharactersComponent from "@/components/sw-people/SwCharachters.vue";

export default {
  name: "Home",
  components: {
      'sw-characters': SwCharactersComponent
  }
};
</script>
