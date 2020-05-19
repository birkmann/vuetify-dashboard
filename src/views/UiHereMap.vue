<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <h2>Here Map</h2>
          <HereMap
            appId="T4vUi5MG8XH3ZbDOouDH"
            appCode="bBchAe3QiyJEsnKnn1kT2FzROZusoVDnCkJMUja6VZ4"
            lat="37.7397"
            lng="-121.4252"
            width="100%"
            height="835px"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HereMap from '../components/HereMap'

export default {
  name: 'app',
  components: {
    HereMap,
  },
}
</script>
