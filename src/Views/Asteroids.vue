<template>
  <div>
    <h1  class="mt-3 mx-4">Asteroids near Earth</h1>
   
    <v-data-table
      :headers="headers"
      :items="Asteroids"
      class="elevation-1 mx-4 mt-4"
    >
      <template v-slot:items="props" hide-actions>
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">
          {{ props.item.close_approach_data[0].close_approach_date_full }}
        </td>
        <td class="text-xs-right">
          {{
            props.item.close_approach_data[
              props.item.close_approach_data.length - 1
            ].close_approach_date_full
          }}
        </td>
        <td class="text-xs-right">
          {{ props.item.estimated_diameter.kilometers.estimated_diameter_max }}
        </td>
        <td class="text-xs-right">
          {{
            props.item.close_approach_data[0].relative_velocity
              .kilometers_per_second
          }}
        </td>
        <td class="text-xs-right">
          {{
            props.item.close_approach_data[
              props.item.close_approach_data.length - 1
            ].relative_velocity.kilometers_per_second
          }}
        </td>
        <td class="text-xs-right">
          {{ props.item.is_potentially_hazardous_asteroid }}
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import DataService from "../dataservice";
export default {
  data() {
    return {
      headers: [
        { text: "Asteroids", sortable: false, value: "asteroidsname" },
        {
          text: "First Approach date",
          sortable: false,
          value: "firstapproachdate",
        },
        {
          text: "Last Approach date",
          sortable: false,
          value: "lastapproachdate",
        },
        { text: "Diameter (km)", sortable: false, value: "diameter" },
        {
          text: "F.A. Relative velocity (km/s)",
          sortable: false,
          value: "FArelativevelocity",
        },
        {
          text: "L.A. Relative velocity (km/s)",
          sortable: false,
          value: "LArelativevelocity",
        },
        {
          text: "Hazardous Asteroid",
          sortable: false,
          value: "hazardousasteroid",
        },
      ],
      Asteroids: [],
      page: [],
    };
  },
  created() {
    this.page += 0;
    DataService.getAsteroids(this.page).then((data) => {
      console.log(data.data);
      this.Asteroids = data.data.near_earth_objects;
    });
  },
};
</script>