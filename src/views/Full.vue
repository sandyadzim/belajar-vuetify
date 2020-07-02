<template>
  <v-app class="test">
    <Navbar/>
      <router-view></router-view>
     <Footer/>
  </v-app>
  <!-- <v-app v-else>
    <NavbarPublisher/>
      <router-view></router-view>
    <Footer/>
  </v-app> -->
</template>

<script>

import Navbar from '@/components/Navbar'
// import NavbarPublisher from '@/components/NavbarPublisher'
import Footer from '@/components/Footer'
export default {
  name: 'Full',

  components: {
   Navbar,
   Footer
  //  NavbarPublisher
  },

  data: () => ({
    user: ''
  }),
  mounted () {
    // const auth = sessionStorage.getItem('authorized')
    // if (auth === 'EDUTORE') {
    //   this.user = 'EDUTORE'
    // } else if (auth === 'PARTNER') {
    //   this.user = 'PARTNER'
    // } else {
    //   this.user = ''
    // }
  }
};
</script>

<style scoped>
  .test {
    min-height: 70vh !important;
  }
</style>