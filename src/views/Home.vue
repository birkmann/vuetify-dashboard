<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col>
          <h2>Home</h2>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col sm="4">
          <v-progress-linear value="25" color="#7fc241 " height="15" rounded></v-progress-linear>
        </v-col>
        <v-col sm="4">
          <v-progress-linear value="50" color="#7fc241 " height="15" rounded></v-progress-linear>
        </v-col>
        <v-col sm="4">
          <v-progress-linear value="75" color="#7fc241 " height="15" rounded></v-progress-linear>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col sm="6">
          <div id="chart-01" class="chart">
            <apexchart
              width="100%"
              height="auto"
              type="line"
              :options="OptionsChart01"
              :series="SeriesChart01"
            ></apexchart>
          </div>
        </v-col>
        <v-col sm="6">
          <div id="chart-01" class="chart">
            <apexchart
              width="100%"
              height="auto"
              type="line"
              :options="OptionsChart01"
              :series="SeriesChart01"
            ></apexchart>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: function() {
    return {
      skill: 20,
      knowledge: 33,
      power: 78,
      OptionsChart01: {
        theme: {
          mode: "light",
          palette: "palette1",
          monochrome: {
            enabled: true,
            color: "#7fc241",
            shadeTo: "light",
            shadeIntensity: 0.65
          }
        },
        chart: {
          type: "line",
          toolbar: {
            show: false
          }
        },
        stroke: {
          width: 7,
          curve: "smooth"
        },
        xaxis: {
          categories: [
            "31.03",
            "01.04",
            "02.04",
            "03.04",
            "04.04",
            "05.04",
            "06.04"
          ],
          colors: ["#ffffff"]
        },
        markers: {
          size: 4,
          colors: ["#7fc241 "],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 7
          }
        }
      },
      SeriesChart01: [
        {
          name: "VAlues",
          data: [88, 91, 88, 89, 73, 88, 91]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.chart {
  overflow: hidden;
}
</style>