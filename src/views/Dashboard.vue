<template>
  <!-- <v-content> -->
    <v-container>
      <v-row>
        <v-col cols="12">
            <v-row>
              <v-flex md3 sm12 xs12 pa-2>
                <v-card elevation="1" style="height: 200px" class="purple lighten-3">
                  <v-card-title>
                    <v-icon class="white--text" large>mdi-account-switch</v-icon>
                  </v-card-title>
                  <v-card-actions class="center-card">
                    <v-btn text style="font-size: 72px; font-style: italic" class="white--text text-center">34</v-btn>
                  </v-card-actions>
                  <v-card-subtitle class="mt-5 white--text">Total Seluruh Pelanggan</v-card-subtitle>
                </v-card>
              </v-flex>
              <v-flex md3 sm12 xs12 pa-2>
                <v-card elevation="1" style="height: 200px" class="pink lighten-3">
                  <v-card-title>
                    <v-icon class="white--text" large>mdi-account-multiple-plus</v-icon>
                  </v-card-title>
                  <v-card-actions class="center-card">
                    <v-btn text style="font-size: 72px; font-style: italic" class="white--text text-center">28</v-btn>
                  </v-card-actions>
                  <v-card-subtitle class="mt-5 white--text">Pelanggan Saat Ini</v-card-subtitle>
                </v-card>
              </v-flex>
              <v-flex md3 sm12 xs12 pa-2>
                <v-card elevation="1" style="height: 200px" class="cyan lighten-3">
                  <v-card-title>
                    <v-icon class="white--text" large>mdi-access-point-network</v-icon>
                  </v-card-title>
                  <v-card-actions class="center-card">
                    <v-btn text style="font-size: 72px; font-style: italic" class="white--text text-center">3</v-btn>
                  </v-card-actions>
                  <v-card-subtitle class="mt-5 white--text">Paket Internet</v-card-subtitle>
                </v-card>
              </v-flex>
              <v-flex md3 sm12 xs12 pa-2>
                <v-card elevation="1" style="height: 200px" class="green lighten-3">
                  <v-card-title>
                    <v-icon class="white--text" large>mdi-cash-usd</v-icon>
                  </v-card-title>
                  <v-card-actions class="center-card">
                    <v-btn text style="font-size: 52px; font-style: italic" class="white--text text-center connected">2700000</v-btn>
                  </v-card-actions>
                  <v-card-subtitle class="mt-5 white--text">Pendapatan Saat Ini</v-card-subtitle>
                </v-card>
              </v-flex>
              <!-- Table -->
              <v-flex md5 sm12 xs12 pa-2>
                <v-card>
                  <v-simple-table
                    :dense="dense"
                    :fixed-header="fixedHeader"
                  >
                    <template v-slot:default>
                      <thead>
                        <tr class="red">
                          <th colspan="2" class="text-center white--text">Pelanggan Tertunggak</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in dataInvoice" :key="item.name">
                          <td>{{ item.name }}</td>
                          <td>{{ item.total }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card>
              </v-flex>
              <!-- End Table -->
              <!-- Router Information -->
              <v-flex md7 sm12 xs12 pa-2>
                <v-card>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr class="red">
                          <th colspan="2" class="white--text text-center">Router Information - CORE-SANDY</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="router in routerInformation" :key="router.name">
                          <td>{{ router.name }}</td>
                          <td v-if="router.keterangan == 'Connected'">
                            <span class="red lighten-2 white--text connected">{{ router.keterangan }}</span>
                          </td>
                          <td v-else>
                            {{ router.keterangan }}
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            <v-btn color="error" small class="float-right">
                              Refresh
                              <v-icon>mdi-refresh</v-icon>
                            </v-btn>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card>
              </v-flex>
              <!-- End Information -->
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
  data: () => ({
    dense: false,
    fixedHeader: false,
    dataInvoice: [
      {
        name: 'Total Perkiraan Pendapatan',
        total: 3100000,
      },
      {
        name: 'Total Pendapatan (Lunas)',
        total: 2700000,
      },
      {
        name: 'Total Tunggakan',
        total: 400000,
      }
    ],
    routerInformation: [
      {
        name: 'IP Router',
        keterangan: '192.168.200.5'
      },
      {
        name: 'Board Name',
        keterangan: 'RB760iGS'
      },
      {
        name: 'Board Model',
        keterangan: '-'
      },
      {
        name: 'Router OS',
        keterangan: '6.45.6 (stable)'
      },
      {
        name: 'CPU Load',
        keterangan: '6'
      },
      {
        name: 'Free Memory',
        keterangan: '212.82 MiB'
      },
      {
        name: 'Free HDD',
        keterangan: '4.7 MiB'
      },
      {
        name: 'Uptime',
        keterangan: '2dh41m47s'
      },
      {
        name: 'Status',
        keterangan: 'Connected'
      }
    ]
  }),
}
</script>

<style scoped>
.center-card {
  justify-content: flex-end;
}
.connected {
  border-radius: 5px;
  padding: 5px;
	animation: blink 1s linear infinite;
}
@keyframes blink {
0%{opacity: 0;}
50%{opacity: .5;}
100%{opacity: 1;}
}
</style>