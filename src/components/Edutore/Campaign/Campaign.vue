<template>
  <div>
    <v-alert type="success" v-model="showAlert" :value="showAlert">
        Add Campaign Success
    </v-alert>
    <v-card class="ma-3">
      <v-card-title>
        Campaign
        <v-spacer></v-spacer>
        <v-text-field
          v-model='search'
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="indigo" dark class="mt-2 ml-5" v-on="on">New Campaign</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">New Campaign</span>
              </v-card-title>  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                        <v-form ref="formField">
                            <v-text-field
                                v-model="form.campaign_title"
                                label="Campaign Title"
                                :rules="[v => !!v || 'Title is required']"
                                type="text"
                                color="blue accent-3"
                                required
                            />
                            <v-select
                                v-model="form.position"
                                :items="itemsPosition"
                                :rules="[v => !!v || 'Position is required']"
                                label="Postiton"
                                required
                            ></v-select>
                            <v-row>
                                <p class="mt-5 mr-5 ml-3" style="font-size: 16px">Publish: </p>
                                <v-switch v-model="form.publish"></v-switch>
                            </v-row>
                            <v-text-field
                                v-model="form.link"
                                label="Link"
                                :rules="[v => !!v || 'Link is required']"
                                type="text"
                                color="blue accent-3"
                                required
                            />
                        </v-form>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="_actionAddCampaign">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="campaigns"
        :search="search"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        @page-count="pageCount = $event"
        :loading="isLoading"
      >
      <!-- Publish -->
        <template v-slot:item.publish="{item}">
          <v-chip v-if="item.publish" color="green white--text" dark>Publish</v-chip>
          <v-chip v-else color="red white--text" dark>UnPublish</v-chip>
        </template>
      <!-- End Publish -->
        <template v-slot:item.link="{item}">
            <a href="#">{{item.link}}</a>
        </template>
      </v-data-table>
      <div class="text-center pt-2 ma-3">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
        <v-text-field
          :value="itemsPerPage"
          label="Items per page"
          type="number"
          min="-1"
          max="15"
          @input="itemsPerPage = parseInt($event, 10)"
        ></v-text-field>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Campaign',
  data: () => ({
    search: '',
    dialog: false,
    showAlert: false,
    form: {
        campaign_title: '',
        position: '',
        publish: false,
        link: ''
    },
    page: 1,
    pageCount: 0,
    itemsPerPage: 7,
    headers: [
        { text: 'Campaign Title', value: 'campaign_title' },
        { text: 'Position', value: 'position' },
        { text: 'Publish', value: 'publish' },
        { text: 'Link', value: 'link' }
    ],
    itemsPosition: [
        'Footer',
        'Kiri',
        'Kanan'
    ],
    campaigns: [],
    token: null,
    pathImages: "https://storage.googleapis.com/edutore-cdn/tryout/",
    isLoading: true
  }),
  mounted() {
    this.token = sessionStorage.getItem('session_token')
    this._actionGetAll()
  },
  methods: {
    _actionGetAll() {
      this.$axios.get('campaign', { headers: {'x-access-token': this.token}})
      .then(response => {
        if (response.data.success === 'true') {
            this.isLoading = false
            this.campaigns = response.data.data
        }
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
    },
    _actionAddCampaign() {
        let data = this.form
        this.$axios.post('add-campaign', data, { headers: {'x-access-token': this.token}})
        .then(response => {
            // eslint-disable-next-line no-console
            console.log(response)
            if (response.data.success == 'true') {
                this.showAlert = true
                setTimeout(() => {
                    this.showAlert = false
                }, 1500)
                this.dialog = false
                this.$refs.formField.reset()
                this._actionGetAll()
            }
        })
    }
  }
}
</script>