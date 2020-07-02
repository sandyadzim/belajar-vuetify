<template>
    <v-container>
        <v-row>
            <v-flex md12 sm12 xs12 style="font-size: 32px">
                <v-icon style="font-size: 52px">mdi-cash</v-icon>
                Data Invoice
            </v-flex>
            <v-flex md6 sm12 xs12 pa-2>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
            </v-flex>
            <v-flex md6 sm12 xs12 class="mt-5 pl-1">
                <v-row>
                    <v-flex md3 pa-1>
                        <v-btn block color="purple lighten-3" dark small @click="reloadPage">
                            Generate
                            <v-icon>settings</v-icon>
                        </v-btn>
                    </v-flex>
                    <v-flex md3 pa-1>
                        <v-btn block color="pink lighten-3" dark small @click="reloadPage">
                            Print All
                            <v-icon>mdi-printer</v-icon>
                        </v-btn>
                    </v-flex>
                    <v-flex md3 pa-1>
                        <v-btn block color="cyan lighten-3" dark small @click="reloadPage">
                            Reminder All
                            <v-icon>mdi-whatsapp</v-icon>
                        </v-btn>
                    </v-flex>
                    <v-flex md3 pa-1>
                        <v-btn block color="green lighten-3" dark small @click="reloadPage">
                            Reminder >= 2 
                            <v-icon>mdi-whatsapp</v-icon>
                        </v-btn>
                    </v-flex>
                </v-row>
            </v-flex>
            <v-flex md12 sm12 xs12>
                <h3>Filter Data</h3>
            </v-flex>
            <v-flex md2 sm6 xs6 pa-1>
                <v-select
                    v-model="select"
                    :items="months"
                ></v-select>
            </v-flex>
            <v-flex md1 sm6 xs6 pa-1>
                <v-select
                    v-model="selectYear"
                    :items="years"
                ></v-select>
            </v-flex>
            <v-flex md5 s12 xs12 pt-md-5 pl-2 pb-3 pb-md-0>
                <v-btn color="error" small>
                    <v-icon>mdi-filter</v-icon>
                </v-btn>
            </v-flex>
            <v-flex md6 sm12 xs12 pb-2>
                <h3>Summary</h3>
                <v-card>
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                                <tr class="red">
                                    <th class="white--text">Keterangan</th>
                                    <th class="white--text">Jumlah</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in dataInvoice" :key="item.name">
                                    <td v-if="item.name != 'Invoice Total'">{{ item.name }}</td>
                                    <td v-else class="red lighten-1 white--text">{{ item.name }}</td>
                                    <td v-if="item.name != 'Invoice Total'">{{ item.total }}</td>
                                    <td v-else class="red lighten-1 white--text">{{ item.total }}</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card>
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
                        <template v-slot:item.pelanggan="{item}">
                            {{ item.pelanggan }} <br>
                            <span style="font-size: 12px" class="red--text">{{ item.no_hp }}</span>
                        </template>
                        <template v-slot:item.paket="{ item }">
                            <v-chip color="secondary">{{ item.paket }}</v-chip>
                        </template>
                        <template v-slot:item.status="{item}">
                            <v-chip v-if="item.status == true" color="green" dark>Lunas</v-chip>
                            <v-chip v-else color="red" dark>Belum</v-chip>
                        </template>
                        <template v-slot:item.actions>
                            <v-btn small color="warning" @click="modalPayment = true">
                                <v-icon>mdi-printer-settings</v-icon>
                            </v-btn>
                        </template>
                    </v-data-table>
                </v-card>
            </v-flex>
            <v-flex md12 sm12 xs12 class="text-center">
                <v-pagination v-model="page" :length="pageCount" :total-visible="5" color="red"></v-pagination>
            </v-flex>
            <!-- Modal -->
                <v-dialog
                    v-model="modalPayment"
                    width="500"
                >
                    <v-card>
                        <v-card-title class="headline text-center white--text red lighten-3">
                            Pilih Opsi
                            <v-spacer></v-spacer>
                            <v-icon @click="modalPayment = false" class="white--text">mdi-close</v-icon>
                        </v-card-title>                        
                        <v-card-text>
                            <v-flex md12 pa-1>
                                <v-tooltip right>
                                    <template v-slot:activator="{ on }">
                                        <v-btn block color="purple lighten-3" dark small v-on="on" @click="reloadPage">
                                            <v-icon>mdi-pencil</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Edit Invoice</span>
                                </v-tooltip>
                            </v-flex>
                            <v-flex md12 pa-1>
                                <v-tooltip right>
                                    <template v-slot:activator="{ on }">
                                        <v-btn block color="pink lighten-3" dark small v-on="on" @click="reloadPage">
                                            <v-icon>mdi-cash</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Bayar</span>
                                </v-tooltip>
                            </v-flex>
                            <v-flex md12 pa-1>
                                <v-tooltip right>
                                    <template v-slot:activator="{ on }">
                                        <v-btn block color="cyan lighten-3" dark small v-on="on" @click="reloadPage">
                                            <v-icon>mdi-printer</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Print</span>
                                </v-tooltip>
                            </v-flex>
                            <v-flex md12 pa-1>
                                <v-tooltip right>
                                    <template v-slot:activator="{ on }">
                                        <v-btn block color="green lighten-3" dark small v-on="on" @click="reloadPage">
                                            <v-icon>mdi-whatsapp</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Send Reminder</span>
                                </v-tooltip>
                            </v-flex>
                            <v-flex md12 pa-1>
                                <v-tooltip right>
                                    <template v-slot:activator="{ on }">
                                        <v-btn block color="orange lighten-3" dark small v-on="on" @click="reloadPage">
                                            <v-icon>mdi-credit-card-multiple</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Print Bukti Bayar</span>
                                </v-tooltip>
                            </v-flex>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            <!-- End Modal -->
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'PelangganAktif',
    data: () => ({
        search: '',
        select: 'April',
        selectYear: '2020',
        itemsPerPage: 10,
        page: 1,
        pageCount: 0,
        modalPayment: false,
        dataInvoice: [
            {
                name: 'Invoice Lunas',
                total: 2800000,
            },
            {
                name: 'Invoice Belum',
                total: 300000,
            },
            {
                name: 'Invoice Batal',
                total: 0,
            },
            {
                name: 'Invoice Total',
                total: 3100000,
            }
        ],
        headers: [
            { text: 'No', value: 'no', class: 'red white--text'},
            { text: 'No Invoice', value: 'no_invoice', class: 'red white--text'},
            { text: 'Username', value: 'username', class: 'red white--text'},
            { text: 'Pelanggan', value: 'pelanggan', class: 'red white--text'},
            { text: 'Paket', value: 'paket', class: 'red white--text'},
            { text: 'Periode', value: 'periode', class: 'red white--text'},
            { text: 'Jumlah', value: 'jumlah', class: 'red white--text'},
            { text: 'Status', value: 'status', class: 'red white--text'},
            { text: 'Tanggal Bayar', value: 'tgl_bayar', class: 'red white--text'},
            { text: 'Actions', value: 'actions', class: 'red white--text'}
        ],
        data: [
            {
                no_invoice: 387,
                username: '1000-abraham',
                pelanggan: 'Abraham',
                no_hp: '6283153440780',
                paket: 'eXtra-100',
                periode: '1 March - 31 March 2020',
                jumlah: '100.000',
                status: true,
                tgl_bayar: '4 April 2020'
            },
            {
                no_invoice: 388,
                username: '1000-abraham',
                pelanggan: 'Abraham',
                no_hp: '6283153440780',
                paket: 'eXtra-100',
                periode: '1 March - 31 March 2020',
                jumlah: '100.000',
                status: false,
                tgl_bayar: ''
            },
            {
                no_invoice: 389,
                username: '1000-abraham',
                pelanggan: 'Abraham',
                no_hp: '6283153440780',
                paket: 'eXtra-100',
                periode: '1 March - 31 March 2020',
                jumlah: '100.000',
                status: true,
                tgl_bayar: '4 April 2020'
            },
            {
                no_invoice: 390,
                username: '1000-abraham',
                pelanggan: 'Abraham',
                no_hp: '6283153440780',
                paket: 'eXtra-100',
                periode: '1 March - 31 March 2020',
                jumlah: '100.000',
                status: false,
                tgl_bayar: ''
            },
            {
                no_invoice: 391,
                username: '1000-abraham',
                pelanggan: 'Abraham',
                no_hp: '6283153440780',
                paket: 'eXtra-100',
                periode: '1 March - 31 March 2020',
                jumlah: '100.000',
                status: true,
                tgl_bayar: '4 April 2020'
            },
            {
                no_invoice: 392,
                username: '1000-abraham',
                pelanggan: 'Abraham',
                no_hp: '6283153440780',
                paket: 'eXtra-100',
                periode: '1 March - 31 March 2020',
                jumlah: '100.000',
                status: false,
                tgl_bayar: ''
            },
            {
                no_invoice: 393,
                username: '1000-abraham',
                pelanggan: 'Abraham',
                no_hp: '6283153440780',
                paket: 'eXtra-100',
                periode: '1 March - 31 March 2020',
                jumlah: '100.000',
                status: true,
                tgl_bayar: '4 April 2020'
            },
            {
                no_invoice: 394,
                username: '1000-abraham',
                pelanggan: 'Abraham',
                no_hp: '6283153440780',
                paket: 'eXtra-100',
                periode: '1 March - 31 March 2020',
                jumlah: '100.000',
                status: false,
                tgl_bayar: ''
            },
            {
                no_invoice: 395,
                username: '1000-abraham',
                pelanggan: 'Abraham',
                no_hp: '6283153440780',
                paket: 'eXtra-100',
                periode: '1 March - 31 March 2020',
                jumlah: '100.000',
                status: true,
                tgl_bayar: '4 April 2020'
            },
            {
                no_invoice: 396,
                username: '1000-abraham',
                pelanggan: 'Abraham',
                no_hp: '6283153440780',
                paket: 'eXtra-100',
                periode: '1 March - 31 March 2020',
                jumlah: '100.000',
                status: false,
                tgl_bayar: ''
            },
            {
                no_invoice: 397,
                username: '1000-abraham',
                pelanggan: 'Abraham',
                no_hp: '6283153440780',
                paket: 'eXtra-100',
                periode: '1 March - 31 March 2020',
                jumlah: '100.000',
                status: true,
                tgl_bayar: '4 April 2020'
            },
            {
                no_invoice: 398,
                username: '1000-abraham',
                pelanggan: 'Abraham',
                no_hp: '6283153440780',
                paket: 'eXtra-100',
                periode: '1 March - 31 March 2020',
                jumlah: '100.000',
                status: false,
                tgl_bayar: ''
            }
        ],
        months: [
            'Januari',
            'Februari',
            'Maret',
            'April',
            'Mei',
            'Juni',
            'Juli',
            'Agustus',
            'September',
            'Oktober',
            'November',
            'Desember'
        ],
        years: [
            '2016',
            '2017',
            '2018',
            '2019',
            '2020'
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
        },
        _actionPaymentOption() {
            // eslint-disable-next-line no-console
            console.log('test');
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