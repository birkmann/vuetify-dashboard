<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" v-bind:key="drawer" app>
      <a href class="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/de/f/ff/Helvetia_%28Versicherung%29_logo.svg"
          alt="Logo"
        />
      </a>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark>
      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-btn color="black" dark @click.stop="drawer = !drawer">Toggle</v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default Vue.extend({
  name: "App",

  components: {
    HelloWorld
  },

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