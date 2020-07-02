<template>
    <v-container>
        <v-row>
            <v-flex md12 sm12 xs12 style="font-size: 32px">
                <v-icon style="font-size: 32px">mdi-account</v-icon>
                Admin
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
                        :items="data"
                        :search="search"
                    >
                        <template v-slot:item.no>
                            {{number++}}
                        </template>
                    </v-data-table>
                </v-card>
            </v-flex>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Settings',
    data: () => ({
        search: '',
        number: 1,
        headers: [
            { text: 'No', value: 'no', class: 'red white--text'},
            { text: 'Username', value: 'username', class: 'red white--text'},
            { text: 'Nama Lengkap', value: 'nama_lengkap', class: 'red white--text'},
            { text: 'Email', value: 'email', class: 'red white--text'},
            { text: 'Actions', value: 'action', class: 'red white--text'}
        ],
        data: [
            {
                username: 'Sandy',
                nama_lengkap: 'Sandy Rahmansyah',
                email: 'sandy.adzim@gmail.com'
            }
        ]
    })
}
</script>