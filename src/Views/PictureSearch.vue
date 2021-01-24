<template>
  <div class="Background">
    <br />
    <v-card flat class="mx-auto transparent" width="40%">
      <v-card-title class="display-1 font-weight-bold white--text"
        >NASA'S PICTURES
      </v-card-title>
      <v-card-text class="title font-italic white--text"
        >The whole universe in your hands</v-card-text
      >
      <v-form v-on:submit.prevent="GetPicture(query)">
        <v-text-field
          dark
          type="text"
          placeholder="Search Nasa's pics (ex. 'Sun')"
          class="mx-3"
          v-model="query"
          style="float: left"
        ></v-text-field>
        <v-card-actions>
          <v-btn class="mx-2 primary" v-on:click.prevent="GetFoto(query)">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-card-actions>
      </v-form>
      <br />
    </v-card>

    <div class="grey lighten-5" v-if="results">
      <v-container grid-list-md>
        <div v-if="!results.length">
          <v-card max-width="350" class="mx-auto blue-grey darken-1">
            <v-card-text
              class="title font-weight-bold white--text"
              align="center"
              >No Results!</v-card-text
            >
            <v-divider></v-divider>
            <v-card-text class="body-2 white--text">
              Make sure you have entered the correct word</v-card-text
            >
            <v-img src="https://i.ibb.co/qkmFxxc/tommy.jpg"></v-img>
          </v-card>
        </div>
        <v-layout wrap>
          <v-flex
            v-for="result in results"
            :key="result.data[0].nasa_id"
            sm4
            md3
            xs4
            lg3
          >
            <v-card :to="'/VoteImage/' + result.data[0].nasa_id">
              <v-img :src="result.links[0].href" aspect-ratio="1"> </v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>


<script>
import DataService from "../dataservice";

export default {
  name: "PictureSearch",
  data() {
    return {
      query: "",
      results: null,
    };
  },
  methods: {
    GetPicture(query) {
      DataService.getImages(query).then((data) => {
        console.log(data);
        this.results = data.data.collection.items;
      });
    },
  },
};
</script>

<style scoped>
.v-text-field {
  width: 50%;
}
.Background {
  background-image: url("https://i.pinimg.com/originals/58/68/22/586822dc99a3d6b0c7110b4b973b6282.jpg");
}
</style> 