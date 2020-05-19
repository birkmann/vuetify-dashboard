<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <h2>Here Map</h2>
          <HereMap apiKey="2CtEaLJvvCF4Dd1LooKV2Wq9Tw3Ji3ZSeKzQiLRBRH0">
          </HereMap>
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
