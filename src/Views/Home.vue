<template>
  <div>
    <v-container>
      <h1 align="center" class="mt-2 display-2 font-weight-bold">
        WELCOME TO SPACEJAM!
      </h1>
      <v-img
        class="mx-auto"
        src="https://i.ibb.co/hVXgH5h/spacejam.png"
        max-height="475"
        max-width="475"
        contain
      ></v-img>
      <v-divider></v-divider>
      <p align="center" class="mt-2 headline">
        Welcome visitors! If you are here you love the Space at least as much as
        we do!
      </p>
      <p class="title" align="center">
        In this SpaceJam you can find some different things. From the Picture of
        the day to the asteroids orbiting near the Earth.
      </p>
      <v-divider></v-divider>
      <v-card
        max-width="700"
        class="mx-auto mt-5"
        color="rgb(66, 153, 172)"
        outlined
      >
        
        <v-card-title class="display-1 font-weight-bold white--text"
          >Astronomy Picture of the Day ({{ this.today }})</v-card-title
        >
        <p class="mx-3 white--text">
          Each day a different image or photograph of our fascinating universe
          is featured, along with a brief explanation written by a professional
          astronomer.
        </p>
        <div height="" v-if="result.media_type === 'video'">
          <iframe
            width="97%"
            height="500"
            class="mx-2 mb-2"
            :src="result.url"
            loop
          ></iframe>
        </div>
        
        <div v-else>
          <v-img
            max-height="530"
            contain
            class="mx-auto mb-3"
            :src="result.url"
          ></v-img>
        </div>
       
        <div>
          <v-expansion-panel>
            <v-expansion-panel-content class="grey lighten-5">
              <div slot="actions">
                <v-icon large>mdi-chevron-down</v-icon>
              </div>
              <div slot="header" class="title font-weight-bold">
                {{ result.title }}
              </div>

              <v-card class="grey lighten-4">
                <v-card-text>{{ result.explanation }}</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </div>
      </v-card>
    </v-container>
  </div>
</template>



<script>
import axios from "axios";

export default {
  data() {
    return {
      result: [],
    };
  },
 
  created() {
    
    var queryUrl = "https://api.nasa.gov/planetary/apod?";
    
    var queryKey = "api_key=DBGGaFzVosNwYrIIO7rrOPUDs3cUHdvVINAgZ30L";
  
    var queryFull = queryUrl + queryKey;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

   
    this.today = mm + "-" + dd + "-" + yyyy;

  
    axios.get(queryFull).then((data) => {
      
      console.log(data);
      this.result = data.data;
    });
  },
};
</script>

<style>
</style>