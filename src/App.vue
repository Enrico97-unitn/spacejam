<template>
  <v-app id="app">
    <v-content>
      <router-view />
      <Navbar />
    
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {};
  },
};
</script>


