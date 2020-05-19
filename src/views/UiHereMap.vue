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
    // Remove the HelloWorld.vue
  },
  data() {
    return {
      // we are this as prop to the HereMap component
      center: {
        lat: 52.520008,
        lng: 13.404954,
      },
    }
  },
}
</script>
