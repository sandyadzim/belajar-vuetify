<template>
  <!-- <v-content> -->
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-flex md6 sm12 xs12 pa-2 class="ml-md-5">
              <v-card elevation="7">
                <apexchart height="238" type="donut" :options="chartOptions2" :series="series2" class="chart-size"></apexchart>
              </v-card>
            </v-flex>
            <v-flex md5 sm12 xs12 pa-2 class="ml-md-5">
              <v-card elevation="7" class="pl-md-5">
                <apexchart height="225" type="bar" :options="chartOptions" :series="series" class="chart-size"></apexchart>
              </v-card>
            </v-flex>
            <v-flex md5 sm12 xs12 pa-2 class="ml-md-5">
              <v-card elevation="7" height="300" class="pl-md-5">
                <apexchart height="250" type="area" :options="chartOptions3" :series="series3" class="pt-5 chart-size"></apexchart>
              </v-card>
            </v-flex>
            <v-flex md6 sm12 xs12 pa-2 class="ml-md-5">
              <v-card elevation="7" height="300">
                <h2 class="text-center indigo--text pt-3">Task</h2>
                <v-list
                  subheader
                  two-line
                  flat
                >
                  <v-list-item-group
                    v-model="settings"
                    multiple
                  >
                    <v-list-item>
                      <template v-slot:default="{ active, toggle }">
                        <v-list-item-action>
                          <v-checkbox
                            v-model="active"
                            color="primary"
                            @click="toggle"
                          ></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                          <v-list-item-title>Update Route Guards</v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </v-list-item>

                    <v-list-item>
                      <template v-slot:default="{ active, toggle }">
                        <v-list-item-action>
                          <v-checkbox
                            v-model="active"
                            color="primary"
                            @click="toggle"
                          ></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                          <v-list-item-title>Update IndexedDb</v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </v-list-item>

                    <v-list-item>
                      <template v-slot:default="{ active, toggle }">
                        <v-list-item-action>
                          <v-checkbox
                            v-model="active"
                            color="primary"
                            @click="toggle"
                          ></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                          <v-list-item-title>Update Quiz Store</v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-flex>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>

export default {
  name: 'team',
  components: {
  },
  data : () => ({
      settings: [],
      chartOptions: {
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['April', 'Mei', 'June', 'July']
        }
      },
      series: [{
        name: 'Ujian',
        data: [30, 60, 50, 80]
      },{
        name: 'Quiz',
        data: [100, 50, 70, 68]
      }],
      chartOptions2: {
        labels: ['Ujian', 'Quiz', 'Live Ujian', 'Live Quiz']
      },
      series2: [11, 32, 45, 32],
      chartOptions3: {
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00",
            "2018-09-19T01:30:00",
            "2018-09-19T02:30:00",
            "2018-09-19T03:30:00",
            "2018-09-19T04:30:00",
            "2018-09-19T05:30:00",
            "2018-09-19T06:30:00"
          ]
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          }
        }
      },
      series3: [
        {
          name: 'Live Ujian Private',
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "Live Quiz Private",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ]
  }),
}
</script>

<style scoped>
  .chart-size {
    max-width: 400px;
    min-width: 380px;
  }
</style>