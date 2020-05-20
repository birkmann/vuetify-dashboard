<template>
  <div id="app">
    <HereMap :center="center" />
  </div>
</template>

<script>
import HereMap from '../components/HereMap'
export default {
  name: 'app',
  components: {
    HereMap,
  },
  data() {
    return {
      center: {
        lat: 52.520008,
        lng: 13.404954,
      },
    }
  },
}
</script>
