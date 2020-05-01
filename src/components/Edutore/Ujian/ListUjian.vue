<template>
  <div>
    <v-card class="ma-3">
      <v-card-title>
        List Ujian
        <v-spacer></v-spacer>
        <v-text-field
          v-model='search'
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="ujians"
        :search="search"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        @page-count="pageCount = $event"
        :loading="isLoading"
      >
      <!-- Image -->
        <template v-slot:item.ujian_banner="{item}">
          <img v-if="item.ujian_banner" :src="pathImages + item.ujian_banner" :alt="item.ujian_banner" class="contain" style="width: 150px; height: auto">
          <img v-else src="https://storage.googleapis.com/edutore-cdn/edutpre.png" class="img-fluid" style="width: 150px; height: auto">
        </template>
      <!-- End Image -->
      <!-- Berbayar -->
        <template v-slot:item.is_premium="{item}">
          <v-chip v-if="item.is_premium == false" color="orange white--text" dark>Free</v-chip>
          <v-chip v-else color="green white--text" dark>Premium</v-chip>
        </template>
      <!-- End Berbayar -->
      <!-- Waktu -->
        <template v-slot:item.start_date="{ item }">
          <p style="font-size: 13px">{{ _actionViewDate(item.start_date) }} {{ item.times }} s/d
          {{ _actionViewDate(item.end_date) }} {{ item.end_times }}</p>
        </template>
      <!-- End Waktu -->
      <!-- Publish -->
        <template v-slot:item.publish="{item}">
          <v-chip v-if="item.publsih" color="green white--text" dark>Publish</v-chip>
          <v-chip v-else color="red white--text" dark>UnPublish</v-chip>
        </template>
      <!-- End Publish -->
      <!-- Private -->
        <template v-slot:item.is_private="{item}">
          <v-chip v-if="item.is_private" color="blue white--text" dark>Y</v-chip>
          <v-chip v-else color="deep-orange white--text">N</v-chip>
        </template>
    <!-- End Private -->
      </v-data-table>
      <div class="text-center pt-2 ma-3">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
        <v-flex md1>
          <v-text-field
            :value="itemsPerPage"
            label="Items per page"
            type="number"
            min="-1"
            max="15"
            @input="itemsPerPage = parseInt($event, 10)"
          ></v-text-field>
        </v-flex>
      </div>
    </v-card>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'ListUjian',
  data: () => ({
    search: '',
    page: 1,
    pageCount: 0,
    itemsPerPage: 5,
    headers: [
        { text: 'Ujian', value: 'judul_ujian' },
        { text: 'Banner', sortable: false, value: 'ujian_banner' },
        { text: 'Tipe Ujian', value: 'type_ujian' },
        { text: 'Berbayar', value: 'is_premium' },
        { text: 'Kategori Ujian', value: 'category_ujian' },
        { text: 'Penyelenggara', value: 'penyelenggara'},
        { text: 'Tipe Start', value: 'type_start'},
        { text: 'Waktu', value: 'start_date'},
        { text: 'Durasi Soal', value: 'durasi_soal'},
        { text: 'Publish', value: 'publish', align: 'center'},
        { text: 'Private', value: 'is_private'}
    ],
    ujians: [],
    token: null,
    pathImages: "https://storage.googleapis.com/edutore-cdn/tryout/",
    isLoading: true
  }),
  mounted() {
    this.token = sessionStorage.getItem('session_token')
    this._actionGetAll()
  },
  methods: {
    _actionViewDate(tgl) {
      if (tgl) {
        moment().locale("id");
        return moment(tgl).format("DD MMMM YYYY");
      }
      return "";
    },
    _actionGetAll() {
      this.$axios.get('ujian', { headers: {'x-access-token': this.token}})
      .then(response => {
        if (response.data.success === 'true') {
          this.isLoading = false
          this.ujians = response.data.data
          // eslint-disable-next-line no-console
          console.log(this.ujians)
        }
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
    }
  }
}
</script>