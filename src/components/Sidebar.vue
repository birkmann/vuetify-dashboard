<template>
  <div class="div">
    <v-navigation-drawer v-model="drawer" app>
      <a href class="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/de/f/ff/Helvetia_%28Versicherung%29_logo.svg"
          alt="Logo"
        />
      </a>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Sidebar",

  data: () => ({
    drawer: null
  })
});
</script>

<style lang="scss">
.v-navigation-drawer {
  .logo {
    display: block;
    padding: 1rem;
    img {
      width: 100%;
    }
  }
}
</style>