<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" v-bind:key="drawer" app>
      <a href="/" class="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/de/f/ff/Helvetia_%28Versicherung%29_logo.svg"
          alt="Logo"
        />
      </a>
      <v-list-item-content>
        <router-link to="/">Home</router-link>
      </v-list-item-content>
      <v-list-item-content>
        <router-link to="/about">About</router-link>
      </v-list-item-content>
    </v-navigation-drawer>
    <v-app-bar app>
      <div class="left">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <div class="search">
          <input type="text" placeholder="Search..." />
          <button>
            <span class="material-icons">search</span>
          </button>
        </div>
      </div>
      <div class="right">
        <v-badge bordered color="error" icon="mdi-lock" overlap>
          <v-btn class="white--text" color="error" depressed>Lock Account</v-btn>
        </v-badge>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    drawer: null
  })
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
body {
  margin: 0;
  overflow-x: hidden !important;
  font-size: 1rem;
  background-color: #edf0f5;
  color: #303e67;
  letter-spacing: 0.1px;
  line-height: 1.5;
  position: relative;
}
.v-navigation-drawer {
  box-shadow: 0px 2px 4px rgba(31, 30, 47, 0.1);
  .logo {
    display: block;
    padding: 1rem 2rem;
    img {
      width: 100%;
    }
  }
  .v-navigation-drawer__border {
    display: none;
  }
}
.v-content__wrap {
  background-color: #edf0f5;
}
.v-toolbar {
  background: #fff !important;
  box-shadow: 6px 0px 6px rgba(31, 30, 47, 0.06) !important;
  .v-toolbar__content {
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      .search {
        display: flex;
        align-items: center;
        position: relative;
        margin-left: 1.5rem;
        input {
          border: 1px solid #e9ecef;
          font-size: 13px;
          height: 34px;
          color: #696c71;
          padding-left: 20px;
          padding-right: 40px;
          background: #fff;
          box-shadow: none;
          border-radius: 40px;
          width: 300px;
          outline: 0 none;
        }
        button {
          position: absolute;
          right: 0.5rem;
          outline: 0 none;
          top: 50%;
          transform: translateY(-39%);
          opacity: 0.5;
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
    }
  }
}
</style>