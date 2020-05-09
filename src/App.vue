<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" v-bind:key="drawer" app>
      <a href="/" class="logo">
        <img src="https://www.capillarytech.com/img/CapillaryTech.svg" alt="Logo" />
      </a>
      <nav class="main">
        <v-list>
          <v-list-item>
            <router-link to="/">
              <v-list-item-icon>
                <i class="fi flaticon-home"></i>
              </v-list-item-icon>
              <v-list-item-title>Dashboard</v-list-item-title>
            </router-link>
          </v-list-item>

          <v-list-item>
            <router-link to="/builder">
              <v-list-item-icon>
                <i class="fi flaticon-layout"></i>
              </v-list-item-icon>
              <v-list-item-title>Layout Builder</v-list-item-title>
            </router-link>
          </v-list-item>

          <v-list-item>
            <router-link to="/user">
              <v-list-item-icon>
                <i class="fi flaticon-user"></i>
              </v-list-item-icon>
              <v-list-item-title>User</v-list-item-title>
            </router-link>
          </v-list-item>

          <v-list-item>
            <router-link to="/settings">
              <v-list-item-icon>
                <i class="fi flaticon-settings"></i>
              </v-list-item-icon>
              <v-list-item-title>Settings</v-list-item-title>
            </router-link>
          </v-list-item>

          <v-list-item>
            <router-link to="/help">
              <v-list-item-icon>
                <i class="fi flaticon-help"></i>
              </v-list-item-icon>
              <v-list-item-title>Help</v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list>
      </nav>
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
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <div class="user-dropdown" v-on="on">
              <v-list-item>
                <v-list-item-avatar>
                  <v-img src="https://randomuser.me/api/portraits/men/20.jpg"></v-img>
                </v-list-item-avatar>
              </v-list-item>
            </div>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
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
@import "./assets/scss/_flaticon.scss";

body {
  margin: 0;
  overflow-x: hidden !important;
  font-size: 1rem;
  background-color: #edf0f5;
  color: #303e67;
  letter-spacing: 0.1px;
  line-height: 1.5;
  position: relative;
  .v-application .primary--text {
    color: #46a9b4 !important;
    caret-color: #46a9b4 !important;
  }
}
nav.main {
  .v-list-item {
    padding: 0 !important;
  }
  a {
    display: flex;
    text-decoration: none;
    color: #666;
    width: 100%;
    padding: 0.75rem 1.5rem;
    &.router-link-exact-active {
      font-weight: bold;
      color: #000;
    }
  }
}
.v-navigation-drawer {
  box-shadow: 0px 2px 4px rgba(31, 30, 47, 0.1);
  .logo {
    display: block;
    padding: 0.75rem 2rem;
    img {
      width: 100%;
      max-height: 50px;
    }
  }
  .v-navigation-drawer__border {
    display: none;
  }
  .v-list-item__icon {
    margin-right: 1rem !important;
    margin-top: 0;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
  }
}
.v-content__wrap {
  background-color: #edf0f5;
  padding: 2rem;
  .container {
    max-width: 85rem;
  }
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
      .user-dropdown {
        cursor: pointer;
        padding: 0 0.5rem;
        border-radius: 3px;
        transition: all 0.15s ease-in-out;
        .v-list-item {
          padding: 0;
          .v-list-item__avatar {
            padding: 0;
          }
        }
      }
    }
  }
}
</style>