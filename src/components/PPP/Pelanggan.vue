<template>
    <v-container>
        <v-row>
            <v-flex md12 sm12 xs12 style="font-size: 32px">
                <v-icon style="font-size: 32px">mdi-account-multiple</v-icon>
                Pelanggan
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
                <v-btn color="error" small>
                    <v-icon>mdi-plus</v-icon>
                    Tambah
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
                        <template v-slot:item.alamat="{item}">
                            <v-icon style="font-size: 18px">mdi-city</v-icon>
                            <span style="font-size: 12px">{{ item.alamat }}</span>
                            <br>
                            <v-icon style="font-size: 18px">mdi-phone-classic</v-icon>
                            <span style="font-size: 12px">{{ item.kontak }}</span>
                        </template>
                        <template v-slot:item.paket="{ item }">
                            <v-chip color="red" dark>{{ item.paket }}</v-chip>
                        </template>
                        <template v-slot:item.harga="{item}">
                            <v-chip color="secondary">{{ item.harga }}</v-chip>
                        </template>
                        <template v-slot:item.status="{item}">
                            <v-chip v-if="item.status == true" color="green" dark>Aktif</v-chip>
                            <v-chip v-else color="red" dark>Tidak Aktif</v-chip>
                        </template>
                        <template v-slot:item.actions="{item}">
                            <v-btn small color="warning" @click="_actionEditUser(item.pelanggan)">
                                <v-icon>mdi-account-edit</v-icon>
                            </v-btn>
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
    name: 'Pelanggan',
    data: () => ({
        search: '',
        itemsPerPage: 10,
        page: 1,
        pageCount: 0,
        headers: [
            { text: 'No', value: 'no', class: 'red white--text'},
            { text: 'Pelanggan', value: 'pelanggan', class: 'red white--text'},
            { text: 'Alamat & Kontak', value: 'alamat', class: 'red white--text'},
            { text: 'Paket', value: 'paket', class: 'red white--text'},
            { text: 'Harga', value: 'harga', class: 'red white--text'},
            { text: 'Tanggal Instalasi', value: 'tanggal_instalasi', class: 'red white--text'},
            { text: 'Keterangan', value: 'keterangan', class: 'red white--text'},
            { text: 'Status', value: 'status', class: 'red white--text'},
            { text: 'Actions', value: 'actions', class: 'red white--text'}
        ],
        data: [
            {
                pelanggan: '1000-abraham',
                nama_lengkap: 'Abraham',
                alamat: 'Gang Perjuangan Blok 10 No.1',
                kontak: '6282152285777',
                paket: 'eXtra-100',
                harga: "100.000",
                tanggal_instalasi: "01 Jan 2019",
                keterangan: 'Rumah di belakang sebelum Client Rijal.',
                status: true
            },
            {
                pelanggan: '1001-abraham',
                nama_lengkap: 'Abraham',
                alamat: 'Gang Perjuangan Blok 10 No.1',
                kontak: '6282152285777',
                paket: 'eXtra-100',
                harga: "100.000",
                tanggal_instalasi: "01 Jan 2019",
                keterangan: '',
                status: true
            },
            {
                pelanggan: '1002-abraham',
                nama_lengkap: 'Abraham',
                alamat: 'Gang Perjuangan Blok 10 No.1',
                kontak: '6282152285777',
                paket: 'eXtra-100',
                harga: "100.000",
                tanggal_instalasi: "01 Jan 2019",
                keterangan: 'Rumah di belakang sebelum Client Rijal.',
                status: false
            },
            {
                pelanggan: '1003-abraham',
                nama_lengkap: 'Abraham',
                alamat: 'Gang Perjuangan Blok 10 No.1',
                kontak: '6282152285777',
                paket: 'eXtra-100',
                harga: "100.000",
                tanggal_instalasi: "01 Jan 2019",
                keterangan: '',
                status: true
            },
            {
                pelanggan: '1004-abraham',
                nama_lengkap: 'Abraham',
                alamat: 'Gang Perjuangan Blok 10 No.1',
                kontak: '6282152285777',
                paket: 'eXtra-100',
                harga: "100.000",
                tanggal_instalasi: "01 Jan 2019",
                keterangan: 'Rumah di belakang sebelum Client Rijal.',
                status: false
            },
            {
                pelanggan: '1005-abraham',
                nama_lengkap: 'Abraham',
                alamat: 'Gang Perjuangan Blok 10 No.1',
                kontak: '6282152285777',
                paket: 'eXtra-100',
                harga: "100.000",
                tanggal_instalasi: "01 Jan 2019",
                keterangan: '',
                status: true
            },
            {
                pelanggan: '1006-abraham',
                nama_lengkap: 'Abraham',
                alamat: 'Gang Perjuangan Blok 10 No.1',
                kontak: '6282152285777',
                paket: 'eXtra-100',
                harga: "100.000",
                tanggal_instalasi: "01 Jan 2019",
                keterangan: 'Rumah di belakang sebelum Client Rijal.',
                status: true
            },
            {
                pelanggan: '1007-abraham',
                nama_lengkap: 'Abraham',
                alamat: 'Gang Perjuangan Blok 10 No.1',
                kontak: '6282152285777',
                paket: 'eXtra-100',
                harga: "100.000",
                tanggal_instalasi: "01 Jan 2019",
                keterangan: '.',
                status: true
            },
            {
                pelanggan: '1008-abraham',
                nama_lengkap: 'Abraham',
                alamat: 'Gang Perjuangan Blok 10 No.1',
                kontak: '6282152285777',
                paket: 'eXtra-100',
                harga: "100.000",
                tanggal_instalasi: "01 Jan 2019",
                keterangan: 'Rumah di belakang sebelum Client Rijal.',
                status: false
            },
            {
                pelanggan: '1009-abraham',
                nama_lengkap: 'Abraham',
                alamat: 'Gang Perjuangan Blok 10 No.1',
                kontak: '6282152285777',
                paket: 'eXtra-100',
                harga: "100.000",
                tanggal_instalasi: "01 Jan 2019",
                keterangan: '',
                status: true
            },
            {
                pelanggan: '1010-abraham',
                nama_lengkap: 'Abraham',
                alamat: 'Gang Perjuangan Blok 10 No.1',
                kontak: '6282152285777',
                paket: 'eXtra-100',
                harga: "100.000",
                tanggal_instalasi: "01 Jan 2019",
                keterangan: 'Rumah di belakang sebelum Client Rijal.',
                status: true
            },
            {
                pelanggan: '1011-abraham',
                nama_lengkap: 'Abraham',
                alamat: 'Gang Perjuangan Blok 10 No.1',
                kontak: '6282152285777',
                paket: 'eXtra-100',
                harga: "100.000",
                tanggal_instalasi: "01 Jan 2019",
                keterangan: '',
                status: true
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
        _actionEditUser(username) {
            // eslint-disable-next-line no-console
            console.log(username);
        }
    }
}
</script>