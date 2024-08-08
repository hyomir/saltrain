<template>
  <v-app>
    <v-main>
      hello
      <router-view/>
    </v-main>
  </v-app>
</template>
<style>
@import url('../src/assets/reset.css');
@import url('../src/assets/common.css');
</style>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
