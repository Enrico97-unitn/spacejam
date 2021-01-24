<template>
  <div>
    <v-container>
      <v-card class="mx-auto" max-width="650">
        <v-card-title class="display-1 font-weight-bold">Login</v-card-title>
        <v-form v-on:submit.prevent="signIn()">
          <v-text-field
            class="mx-3"
            type="text"
            label="Username"
            v-model="username"
          />
          <v-card-actions>
            <v-btn class="primary mx-1" :disabled="!username" @click="signIn()"
              >Sign In</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import DataService from "../dataservice";

export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    signIn() {
      DataService.login(this.username);
      this.$router.push({ path: "/Home" });
    },
  },
};
</script>

