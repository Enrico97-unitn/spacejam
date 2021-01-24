<template>
  <div class="aboutus">
    <v-container>
      <v-card flat color="grey darken-4">
        <v-card-text
          align="center"
          class="display-2 font-weight-bold white--text"
          >About Us</v-card-text
        >
        <v-card-text align="center" class="title white--text"
          >Hi visitor! We are two friends fascinated by space with our eyes
          always turned towards the stars! <br />Thanks to Nasa that with its
          API allowed the development of this website!
        </v-card-text>
        <v-layout spacer>
          <v-flex xs6>
            <v-card class="blue-grey darken-1" height="100%" flat>
              <v-layout column align-center>
                <v-card-content>
                  <div class="d-flex align-center">
                    <v-avatar class="mt-3" size="50%">
                      <img src="https://i.ibb.co/hfmSJHz/tommaso.png" />
                    </v-avatar>
                  </div>
                </v-card-content>
                <v-card-title class="headline font-weight-bold white--text"
                  >Tommaso</v-card-title
                >
                <v-card-text class="subheading white--text" align="center">
                  When I was a child my dream was to become an astronaut. I
                  dreamed of a future where space travel would be commonplace.
                  Well, they aren't, but working on this project was definitely
                  a blast!
                </v-card-text>
              </v-layout>
            </v-card>
          </v-flex>
          <v-divider vertical></v-divider>

          <v-flex xs6>
            <v-card class="blue-grey darken-1" height="100%" flat>
              <v-layout column align-center>
                <v-card-content>
                  <div class="d-flex align-center">
                    <v-avatar class="mt-3" size="50%">
                      <img src="https://i.ibb.co/vXRRhbM/erry.jpg" />
                    </v-avatar>
                  </div>
                </v-card-content>
                <v-card-title class="headline font-weight-bold white--text"
                  >Enrico</v-card-title
                >
                <v-card-text class="subheading white--text" align="center">
                  My passion for space started at a very young age. First with
                  science fiction movies and then concretized with the dozens of
                  documentaries I watched!
                </v-card-text>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>