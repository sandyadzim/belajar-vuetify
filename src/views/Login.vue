<template>
    <v-app>
        <v-content>
            <v-container class="fill-height" fluid="">
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="6" md="6">
                        <v-card class="elevation-12">
                            <v-window v-model="step">
                                <v-window-item :value="1">
                                    <v-row>
                                        <v-col cols="12" md="12">
                                            <v-card-text class="mt-5">
                                                <!-- <h1 class="text-center display-2 teal--text text--accent-3 mb-5">Sign in to Dashboard</h1> -->
                                                <div cols="12" class="text-center">
                                                    <img src="/logo.png" alt="anti-stress" style="width: 125px" class="text-center">
                                                </div>
                                                <h4 class="text-center mt-4">Ensure your Account for registration</h4>
                                                <v-form>
                                                    <v-text-field 
                                                        v-model="form.username"
                                                        label="Username"
                                                        prepend-icon="email"
                                                        type="text"
                                                        color="teal accent-3"
                                                        required
                                                    />
                                                    <v-text-field
                                                        v-model="form.password"
                                                        id="password"
                                                        label="Password"
                                                        name="password"
                                                        prepend-icon="lock"
                                                        type="password"
                                                        color="teal accent-3"
                                                    />
                                                </v-form>
                                                <h3 class="text-center mt-3">Forgot your password</h3>
                                            </v-card-text>
                                            <div class="text-center mt-3">
                                                <v-btn rounded color="teal accent-3" dark to="/">Sign In</v-btn>
                                            </div>
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
            step: 1
        }
    }
}
</script>