<template>
  <nav>
    <v-toolbar color="rgb(66, 153, 172)" app>
      <v-toolbar-side-icon @click="drawer = !drawer">
        <v-icon color="white">mdi-menu</v-icon>
      </v-toolbar-side-icon>

      <v-toolbar-title class="text-uppercase white--text" @click="$router.push('/Home')">
        <span class="font-weight-bold">SPACE</span>
        <span>JAM</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn flat color="white" @click="logout()" v-if="authenticated">
        <span>Logout</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="blue-grey darken-1">
      <v-list>
        <v-list-tile
          v-for="item in arrtab"
          :key="item.name"
          router
          :to="item.path"
          @click="drawer = !drawer"
        >
         
          <v-list-tile-action>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">
              {{ item.name }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>


<script>
import DataService from "../dataservice";

export default {
  data() {
    return {
      authenticated: DataService.isAuthenticated(),
      drawer: false, 
      arrtab: [
        { name: "Home", path: "/Home", icon: "mdi-home" },
        { name: "Picture search", path: "/PictureSearch", icon: "mdi-card-search" },
        { name: "Asteroids near Earth", path: "/Asteroids", icon: "mdi-flare" },
        { name: "Contact Us", path: "/ContactUs", icon: "mdi-card-account-mail" },
        { name: "About Us", path: "/AboutUs", icon: "mdi-account-multiple" },
        
      ],
    };
  },
  watch: {
    $route() {
      this.authenticated = DataService.isAuthenticated();
    },
  },
  methods: {
    logout() {
      DataService.logout();
      this.$router.push({ path: "/main" });
    },
  },
};
</script>