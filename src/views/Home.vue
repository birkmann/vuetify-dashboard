<template>
  <div class="home">
    <h2>Home</h2>
    <div id="chart-contacts" class="chart">
      <apexchart
        width="100%"
        height="250"
        type="line"
        :options="optionsContacts"
        :series="seriesContacts"
      ></apexchart>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: function() {
    return {
      optionsContacts: {
        theme: {
          mode: "light",
          palette: "palette1",
          monochrome: {
            enabled: true,
            color: "#df5d19",
            shadeTo: "light",
            shadeIntensity: 0.65
          }
        },
        chart: {
          height: 200,
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
          colors: ["#FFA41B"],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 7
          }
        }
      },
      seriesContacts: [
        {
          name: "Kontakte",
          data: [88, 91, 88, 89, 73, 88, 91]
        }
      ],
      optionsLeads: {
        theme: {
          mode: "light",
          palette: "palette1",
          monochrome: {
            enabled: true,
            color: "#df5d19",
            shadeTo: "light",
            shadeIntensity: 0.65
          }
        },
        chart: {
          height: 200,
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
          colors: ["#FFA41B"],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 7
          }
        }
      },
      seriesLeads: [
        {
          name: "Leads",
          data: [51, 60, 48, 55, 44, 59, 62]
        }
      ],
      optionsBudget: {
        theme: {
          mode: "light",
          palette: "palette1",
          monochrome: {
            enabled: true,
            color: "#df5d19",
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
          width: [0, 4]
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [1]
        },
        labels: [
          "31 Mar 2020",
          "01 Apr 2020",
          "02 Apr 2020",
          "03 Apr 2020",
          "04 Apr 2020",
          "05 Apr 2020",
          "06 Apr 2020"
        ],
        xaxis: {
          type: "datetime"
        },
        yaxis: [
          {},
          {
            opposite: true
          }
        ]
      },
      seriesBudget: [
        {
          name: "Media Budget",
          type: "column",
          data: [3529.68, 4426.24, 4224.0, 4385.92, 5765.54, 3853.52, 3870.23]
        },
        {
          name: "Kosten pro Kontakt",
          type: "line",
          data: [40.11, 48.11, 48.0, 48.28, 79.98, 43.79, 42.53]
        }
      ],
      optionsClicks: {
        theme: {
          mode: "light",
          palette: "palette1",
          monochrome: {
            enabled: true,
            color: "#df5d19",
            shadeTo: "light",
            shadeIntensity: 0.65
          }
        },
        chart: {
          height: 300,
          type: "line",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
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
          colors: ["#FFA41B"],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 7
          }
        }
      },
      seriesClicks: [
        {
          name: "Impressionen",
          data: [16326, 16791, 15411, 10636, 17819, 20362, 20712]
        },
        {
          name: "Klicks",
          data: [1105, 1193, 1218, 785, 1285, 1347, 1296]
        }
      ]
    };
  }
};
</script>
