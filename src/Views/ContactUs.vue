<template>
  <v-container>
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title
          class="title light-blue accent-4 font-weight-bold white--text"
        >
          The mission control received your message!
        </v-card-title>
        <v-card-text class="subheading font-weight-bold"
          >We will get back to you as soon as possible!</v-card-text
        >
      </v-card>
    </v-dialog>
    <v-card class="mx-auto" width="70%">
      <v-card-title class="display-1 font-weight-bold">Contact Us</v-card-title>
      <v-form class="mx-auto" ref="form" v-model="valid" lazy-validation>
        <v-text-field
          class="mx-3"
          v-model="name"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          class="mx-3"
          v-model="lastname"
          :rules="lastnameRules"
          label="Last Name"
          required
        ></v-text-field>

        <v-text-field
          class="mx-3"
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-textarea
          class="mx-3"
          v-model="text"
          :rules="textRules"
          label="Text"
          required
          no-resize
        >
        </v-textarea>

        <v-btn
          class="mx-3"
          :disabled="!valid"
          color="success"
          @click="validate"
        >
          Validate
        </v-btn>

        <v-btn color="error" @click="reset"> Reset Form </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template> 
 
<script>
import Dataservice from "../dataservice";

export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Name is required"],
    lastname: "",
    lastnameRules: [(v) => !!v || "Name is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    text: "",
    textRules: [(v) => !!v || "Text is required"],
    dialog: false,
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate() || true) {
        Dataservice.contactus(this.name, this.lastname, this.email, this.text).then(
          () => {
            this.reset();
            this.dialog = true;
          }
        );
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>