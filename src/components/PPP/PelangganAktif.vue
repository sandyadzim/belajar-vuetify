<template>
    <v-container>
        <v-row>
            <v-flex md12 sm12 xs12 style="font-size: 32px">
                <v-icon style="font-size: 32px">mdi-account-multiple</v-icon>
                Pelanggan Aktif
            </v-flex>
            <v-flex md11 sm12 xs12 pa-2>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
            </v-flex>
            <v-flex md1 sm12 xs12 class="mt-5 pl-1">
                <v-btn color="error" small @click="reloadPage">
                    <v-icon>mdi-refresh</v-icon>
                    Refresh
                </v-btn>
            </v-flex>
            <v-flex md12 sm12 xs12>
                <v-card>
                    <v-data-table
                        :headers="headers"
                        :items="itemsWithIndex"
                        :search="search"
                        :page.sync="page"
                        :items-per-page="itemsPerPage"
                        @page-count="pageCount = $event"
                        hide-default-footer
                    >
                        <template v-slot:item.no="{item}">
                            {{ item.index }}
                        </template>
                        <template v-slot:item.uptime="{item}">
                            <span class="connected">{{ item.uptime }}</span>
                        </template>
                    </v-data-table>
                </v-card>
            </v-flex>
            <v-flex md12 sm12 xs12 class="text-center">
                <v-pagination v-model="page" :length="pageCount" :total-visible="5" color="red"></v-pagination>
            </v-flex>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'PelangganAktif',
    data: () => ({
        search: '',
        itemsPerPage: 10,
        page: 1,
        pageCount: 0,
        headers: [
            { text: 'No', value: 'no', class: 'red white--text'},
            { text: 'Pelanggan', value: 'pelanggan', class: 'red white--text'},
            { text: 'Address', value: 'address', class: 'red white--text'},
            { text: 'Uptime', value: 'uptime', class: 'red white--text'}
        ],
        data: [
            {
                pelanggan: '1000-abraham',
                address: '10.10.30.94',
                uptime: '4m34s',
            },
            {
                pelanggan: '1001-abraham',
                address: '10.10.30.94',
                uptime: '4m34s',
            },
            {
                pelanggan: '1002-abraham',
                address: '10.10.30.94',
                uptime: '4m34s',
            },
            {
                pelanggan: '1003-abraham',
                address: '10.10.30.94',
                uptime: '4m34s',
            },
            {
                pelanggan: '1004-abraham',
                address: '10.10.30.94',
                uptime: '4m34s',
            },
            {
                pelanggan: '1005-abraham',
                address: '10.10.30.94',
                uptime: '4m34s',
            },
            {
                pelanggan: '1006-abraham',
                address: '10.10.30.94',
                uptime: '4m34s',
            },
            {
                pelanggan: '1007-abraham',
                address: '10.10.30.94',
                uptime: '4m34s',
            },
            {
                pelanggan: '1008-abraham',
                address: '10.10.30.94',
                uptime: '4m34s',
            },
            {
                pelanggan: '1009-abraham',
                address: '10.10.30.94',
                uptime: '4m34s',
            },
            {
                pelanggan: '1010-abraham',
                address: '10.10.30.94',
                uptime: '4m34s',
            },
            {
                pelanggan: '1011-abraham',
                address: '10.10.30.94',
                uptime: '4m34s',
            }
        ]
    }),
    computed: {
        itemsWithIndex() {
            return this.data.map(
                (items, index) => ({
                ...items,
                index: index + 1
            }))
        }
    },
    methods: {
        reloadPage(){
            window.location.reload()
        }
    }
}
</script>

<style scoped>
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