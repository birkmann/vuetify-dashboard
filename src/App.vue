<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" v-bind:key="drawer" app>
      <a href="/" class="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/de/f/ff/Helvetia_%28Versicherung%29_logo.svg"
          alt="Logo"
        />
      </a>
      <nav class="main">
        <v-list>
          <v-list-item>
            <router-link to="/">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </router-link>
          </v-list-item>

          <v-list-item>
            <router-link to="/about">
              <v-list-item-icon>
                <v-icon>mdi-information</v-icon>
              </v-list-item-icon>
              <v-list-item-title>About</v-list-item-title>
            </router-link>
          </v-list-item>

          <v-list-group prepend-icon="account_circle">
            <template v-slot:activator>
              <v-list-item-title>Users</v-list-item-title>
            </template>

            <v-list-group no-action sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Admin</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="(admin, i) in admins" :key="i" link>
                <v-list-item-title v-text="admin[0]"></v-list-item-title>
                <v-list-item-icon>
                  <v-icon v-text="admin[1]"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group sub-group no-action>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Actions</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item v-for="(crud, i) in cruds" :key="i">
                <v-list-item-title v-text="crud[0]"></v-list-item-title>
                <v-list-item-action>
                  <v-icon v-text="crud[1]"></v-icon>
                </v-list-item-action>
              </v-list-item>
            </v-list-group>
          </v-list-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cog</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-help</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Help</v-list-item-title>
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
    drawer: null,
    admins: [
      ["Management", "people_outline"],
      ["Settings", "settings"]
    ],
    cruds: [
      ["Create", "add"],
      ["Read", "insert_drive_file"],
      ["Update", "update"],
      ["Delete", "delete"]
    ],
    items: [
      { title: "Profile" },
      { title: "Edit Profile" },
      { title: "Account Settings" },
      { title: "Sign Out" }
    ]
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
  .v-application .primary--text {
    color: #46a9b4 !important;
    caret-color: #46a9b4 !important;
  }
}
nav.main {
  a {
    display: flex;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.87);
    width: 100%;
    //opacity: 0.5;
    &.router-link-exact-active {
      //opacity: 1;
      font-weight: bold;
      color: #46a9b4;
    }
  }
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
  padding: 2rem;
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