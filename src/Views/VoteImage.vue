<template>
  <div>
    <v-card class="mx-auto mt-5" max-width="800" v-if="result">
      <v-card-text class="title font-weight-bold font-italic">{{
        result.data[0].title
      }}</v-card-text>
      <v-layout>
        <v-avatar size="40%" class="mx-3 mb-3" tile>
          <v-img :src="result.links[0].href" aspect-ratio="1"></v-img>
        </v-avatar>
        <v-flex>
          <v-card-text class="font-weight-bold" v-if="stats && stats.total > 0"
            >Total Vote: {{ stats.total }}. <br />
            Average: {{ stats.average }}.</v-card-text
          >
          <v-card-text
            class="font-weight-bold"
            v-if="!stats || stats.total == 0"
            >No votes so far</v-card-text
          >
          <span class="mx-3">My Vote: </span>
          <span v-for="s in [1, 2, 3, 4, 5]" :key="s" @click="vote(s)">
            <v-icon>{{
              s <= stats.userVote ? "mdi-star" : "mdi-star-outline"
            }}</v-icon>
          </span>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import DataService from "../dataservice";

export default {
  data() {
    return {
      result: null,
      stats: null,
    };
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      DataService.getSingleImage(this.$route.params.nasa_id).then((data) => {
        this.result = data.data.collection.items[0];
        DataService.getVote(this.result.data[0].nasa_id).then((stats) => {
          this.stats = stats;
        });
      });
    },
    vote(i) {
      if (this.stats.userVote !== null) return;
      DataService.setVote(this.result.data[0].nasa_id, i).then(() => {
        this.load();
      });
    },
  },
};
</script>

<style scoped>
</style>