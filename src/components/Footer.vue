<template>
  <div>
    <v-container class="conatiner" fluid>
      <v-footer absolute inset>
        <v-card height="52" width="100%" color="blue-grey darken-1">
          <v-card-text class="white--text" align="center">
            {{ new Date().getFullYear() }} — <strong>Copyright SpaceJam</strong>
            <v-icon small class="white--text">mdi-copyright</v-icon>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>