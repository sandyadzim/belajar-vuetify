<template>
    <v-app>
        <v-alert type="error" v-model="showAlert" :value="showAlert">
            {{ error_text }}
        </v-alert>
        <v-dialog
        v-model="dialog"
        hide-overlay
        persistent
        width="300"
        >
            <v-card
            color="blue darken-5"
            >
            <v-card-text>
                <h4 class="white--text mb-3 mt-3">Please Wait</h4>
                <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
                ></v-progress-linear>
            </v-card-text>
            </v-card>
        </v-dialog>
        <v-content class="imgy h-100">
            <v-container class="fill-height" fluid="">
                <v-row align="center" justify="center">
                    <v-col cols="9" sm="5" md="5">
                        <v-card class="elevation-12">
                            <v-window v-model="step">
                                <v-window-item :value="1">
                                    <v-row>
                                        <v-col cols="12" md="12">
                                            <v-card-text class="mt-5">
                                                <!-- <h1 class="text-center display-2 teal--text text--accent-3 mb-5">Sign in to Dashboard</h1> -->
                                                <div cols="12" class="text-center">
                                                    <img src="https://storage.googleapis.com/edutore-cdn/edutpre.png" alt="anti-stress" style="width: 125px" class="text-center">
                                                </div>
                                                <h4 class="text-center mt-4 indigo--text">Login with Your Account</h4>
                                                <v-col cols="10" offset="1" class="text-center">
                                                    <v-form v-on:submit.prevent="_actionLogin">
                                                        <v-text-field
                                                            v-model="form.username"
                                                            label="Username"
                                                            prepend-icon="email"
                                                            type="text"
                                                            color="blue accent-3"
                                                            required
                                                        />
                                                        <v-text-field
                                                            v-model="form.password"
                                                            id="password"
                                                            label="Password"
                                                            name="password"
                                                            prepend-icon="lock"
                                                            type="password"
                                                            color="blue accent-3"
                                                        />
                                                        <div class="text-center mt-3">
                                                            <v-btn rounded color="blue darken-5" dark type="submit">Sign In</v-btn>
                                                        </div>
                                                    </v-form>
                                                </v-col>
                                            </v-card-text>
                                        </v-col>
                                    </v-row>
                                </v-window-item>
                            </v-window>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            form: {},
            step: 1,
            showAlert: false,
            dialog: false,
            error_text: ''
        }
    },
    methods: {
        _actionLogin() {
            let data = this.form
            this.$axios.post('login', data)
            .then(response => {
                if (response.data.success == 'true') {
                    // eslint-disable-next-line no-console
                    console.log(response.data.data)
                    sessionStorage.setItem('username', response.data.data.username)
                    sessionStorage.setItem('session_token', response.data.data.token)
                    sessionStorage.setItem('authorized', response.data.data.authorized)
                    sessionStorage.setItem('_id', response.data.data.id)
                    const authName = sessionStorage.getItem('authorized')
                    if (authName === 'EDUTORE') {
                        this.dialog = true
                        setTimeout(() => {
                            this.$router.push({ path: '/' })
                        }, 3000)
                    } else if (authName === 'PARTNER') {
                        this.dialog = true
                        setTimeout(() => {
                            this.$router.push({ path: '/p' })
                        }, 3000)
                    } else {
                        this.router.push({ path: '/login'})
                    }
                } else if (response.data.message == 'Password invalid') {
                    this.error_text = response.data.message
                    this.showAlert = true
                    setTimeout(() => {
                        this.showAlert = false
                    }, 3000)
                }
            })
            .catch(err => {
                if (err.response.data.message == 'User Not Found') {
                    this.error_text = err.response.data.message
                    this.showAlert = true
                    setTimeout(() => {
                        this.showAlert = false
                    }, 5000)
                }
            })
        }
    }
}
</script>

<style scoped>
.imgy {
    background-image: url('/edu-owl.png');
    /* background-size: cover; */
    background-size: 500px;
    background-position-y: 180px;
    background-repeat: repeat-x;
}
</style>