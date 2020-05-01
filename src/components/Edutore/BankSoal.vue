<template>
    <v-container>
        <v-row>
            <v-flex md2 sm12 xs12 class="mr-md-5 ml-md-5">
                <v-card>
                    <h5 class="text-center pt-2">Publisher</h5>
                    <v-flex md-12 ml-3 pt-2 style="max-height: 200px; overflow: scroll">
                        <div v-for="publish in groupPublisher" :key="publish._id" style="margin-bottom: -15px">
                        <v-checkbox
                            v-model="publisherSelect"
                            :value="publish._id"
                            small
                            @change="_actionFilter"
                            color="amber lighten-1"
                        >
                        <template v-slot:label>
                            <div style="font-size: 14px">{{ publish._id }}</div>
                        </template>
                        </v-checkbox>
                        </div>
                    </v-flex>
                </v-card>
                <v-card class="mt-5">
                    <h5 class="text-center pt-2">Mata Pelajaran</h5>
                    <v-flex md-12 ml-3 pt-2 style="max-height: 200px; overflow: scroll">
                        <div v-for="matpel in mataPelajaran" :key="matpel._id" style="margin-bottom: -15px">
                        <v-checkbox
                            v-model="matpelSelect"
                            :value="matpel._id"
                            small
                            @change="_actionFilter"
                        >
                        <template v-slot:label>
                            <div style="font-size: 14px">{{ matpel._id }}</div>
                        </template>
                        </v-checkbox>
                        </div>
                    </v-flex>
                </v-card>
                <v-card class="mt-5">
                    <h5 class="text-center pt-2">Kategori</h5>
                    <v-flex md-12 ml-3 pt-2 style="max-height: 200px; overflow: scroll">
                        <div v-for="kategori in groupKategori" :key="kategori._id" style="margin-bottom: -15px">
                        <v-checkbox
                            v-model="kategoriSelect"
                            :value="kategori._id"
                            small
                            @change="_actionFilter"
                        >
                        <template v-slot:label>
                            <div style="font-size: 14px">{{ kategori._id }}</div>
                        </template>
                        </v-checkbox>
                        </div>
                    </v-flex>
                </v-card>
            </v-flex>
            <v-flex md9 sm12 xs12 class="ml-md-5">
                <v-card class="ma-3">
                    <v-card-title>
                        Bank Soal
                        <v-spacer></v-spacer>
                        <v-text-field
                        v-model='search'
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                        ></v-text-field>
                        <v-btn color="indigo lighten-3 white--text ml-md-4">
                            <v-icon>mdi-plus</v-icon>
                            Soal
                        </v-btn>
                    </v-card-title>
                    <v-data-table
                        :headers="headers"
                        :items="itemsWithIndex"
                        :search="search"
                        :page.sync="page"
                        :items-per-page="itemsPerPage"
                        hide-default-footer
                        @page-count="pageCount = $event"
                        :loading="isLoading"
                        :expanded.sync="expanded"
                        show-expand
                        item-key="_id"
                        index=1
                    >
                        <template v-slot:item.no="{item}">
                            {{ item.index }}
                        </template>
                        <template v-slot:item.soal_text="{item}">
                            <p v-html="item.soal_text" style="font-size:12px"/>
                        </template>
                        <template v-slot:item.soal_image="{item}">
                            <div v-if="item.soal_image">
                                <img :src="pathImagesQ + item.soal_image" alt="" style="heigth:60pxwidth:auto;max-width:200px">
                            </div>
                        </template>
                        <template v-slot:item.category_id="{item}">
                            <p style="font-size:12px">{{ item.category_id }}</p>
                        </template>
                        <template v-slot:item.matpel_id="{item}">
                            <p style="font-size:12px">{{ item.matpel_id }}</p>
                        </template>
                        <template v-slot:item.matpel_id="{item}">
                            <p style="font-size:12px">{{ item.matpel_id }}</p>
                        </template><template v-slot:item.publisher_id="{item}">
                            <p style="font-size:12px">{{ item.publisher_id }}</p>
                        </template>
                        <template v-slot:expanded-item="{ headers, item }">
                            <td :colspan="headers.length">
                                <div v-if="item.jawabans.length > 0">
                                    <ol type="A">
                                        <li v-for="(value, key) in item.jawabans" :key="key">
                                            <label for="" v-html="value.jawaban_text" style="font-size:12px"/>
                                            <span style="font-size:10px" class="indigo--text"> (Point {{value.point}} )</span>
                                        </li>
                                    </ol>
                                </div>
                                <div v-else>
                                    Tidak ada pilihan jawaban
                                </div>
                            </td>
                        </template>
                        <template v-slot:item.actions="{item}">
                            <v-row>
                                <v-btn color="warning" fab x-small dark  @click="_actionEditSoal(item)">
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn color="error" fab x-small dark @click="_actionDeleteSoal(item)">
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </v-row>
                        </template>
                    </v-data-table>
                    <div class="text-center pt-2 ma-3">
                        <v-pagination v-model="page" :length="pageCount" :total-visible="7"></v-pagination>
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
            </v-flex>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'BankSoal',
    data: () => ({
        expanded: [],
        nomor: 1,
        singleExpand: false,
        allSoal: [],
        page: 1,
        pageCount: 0,
        itemsPerPage: 5,
        isLoading: false,
        search: '',
        publisherSelect: [],
        kategoriSelect: [],
        matpelSelect: [],
        token: null,
        groupPublisher: [],
        mataPelajaran: [],
        groupKategori: [],
        headers: [
            { text: 'No', value: 'no' },
            { text: 'Soal Text', value: 'soal_text' },
            { text: 'Soal Image', value: 'soal_image' },
            { text: 'Kategori', value: 'category_id' },
            { text: 'Mata Pelajaran', value: 'matpel_id' },
            { text: 'Publisher', value: 'publisher_id' },
            { text: 'Jawaban', value: 'data-table-expand' },
            { text: 'Actions', value: 'actions' }
        ],
        pathImagesQ: "https://storage.googleapis.com/edutore-cdn/public/soal/question/"
    }),
    mounted() {
        this.token = sessionStorage.getItem('session_token')
        this._actionGetAllSoal()
        this._actionGetPublisher()
        this._actionGetMatpel()
        this._actionGetKategori()
    },
    computed: {
        itemsWithIndex() {
            return this.allSoal.map(
                (items, index) => ({
                ...items,
                index: index + 1
            }))
        }
    },
    methods: {
        _actionGetPublisher() {
            this.$axios.get('group/publisher', { headers: { 'x-access-token': this.token }})
            .then(response => {
                if (response.data.success == 'true') {
                    this.groupPublisher = response.data.data
                }
            })
            .catch(err => {
                // eslint-disable-next-line no-console
                console.log(err)
            })
        },
        _actionGetMatpel () {
            this.$axios.get('group/matapelajaran', { headers: { 'x-access-token': this.token }})
            .then(response => {
                if (response.data.success == 'true') {
                    this.mataPelajaran = response.data.data
                }
            })
            .catch(err => {
                // eslint-disable-next-line no-console
                console.log(err)
            })
        },
        _actionGetKategori() {
            this.$axios.get('group/level', { headers: { 'x-access-token': this.token }})
            .then(response => {
                if (response.data.success == 'true') {
                    this.groupKategori = response.data.data
                }
            })
            .catch(err => {
                // eslint-disable-next-line no-console
                console.log(err)
            })
        },
        _actionGetAllSoal() {
            this.$axios.get('banksoal', { headers: { 'x-access-token': this.token }})
            .then(response => {
                const responseData = response.data
                if (response.data.success == 'true') {
                    this.allSoal = responseData.data.rows
                }
            })
            .catch(err => {
                // eslint-disable-next-line no-console
                console.log(err)
            })
        },
        _actionFilter() {
            const { publisherSelect, matpelSelect, kategoriSelect } = this
            this.$router.push({
                path: '/bank-soal?',
                query: {_id: publisherSelect, matpelSelect, kategoriSelect}
            })
        }
    }
}
</script>