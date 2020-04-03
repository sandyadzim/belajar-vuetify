<template>
   <nav>
       <v-app-bar  color="teal" dark app >
           <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
           <v-toolbar-title class="text-uppercase ">
               <span class="font-weight-light">ADMIN</span>
               <span> Dashboard</span>
           </v-toolbar-title>
           <v-spacer></v-spacer>
           <v-menu offset-y>
      <v-list flat>
        <v-list-item v-for="link in links"  :key="link.text" router :to="link.route" active-class="border">
          <v-list-item-title >{{link.text}}</v-list-item-title>
        </v-list-item>
      </v-list>
            </v-menu>
            <v-btn text to="/login">
                <span>Exit</span>
                <v-icon right>exit_to_app</v-icon>
             </v-btn>
       </v-app-bar>
      <v-navigation-drawer  v-model="drawer" dark app class="teal darken-2">
          <v-layout column align-center>
               <v-flex class="mt-5">
                    <img src="/logo.png" alt="" class="contain" style="width: 100px">
               </v-flex>
          </v-layout>
          <v-list flat>
              <v-list-item v-for="link in links"  :key="link.text" router :to="link.route" active-class="border" style="text-decoration: none">
                  <v-list-item-action>
                     <v-icon >{{link.icon}}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content >
                      <v-list-item-title >{{link.text}}</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
              <!-- <v-list-group
                prepend-icon="local_activity"
                no-action
                active-class="border"
                color="white"
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Attractions</v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item router to="/">
                  <v-list-item-content>
                    <v-list-item-title>Campaign</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group> -->
          </v-list>
      </v-navigation-drawer>
   </nav>
</template>
<script>
export default {
   data: () => ({
      drawer: true,
      links :[
          {icon: 'dashboard', text:'Dashboard', route: '/dashboard'},
          {icon: 'book', text:'Add Soal', route: '/add-soal'},
          {icon: 'person', text:'User', route: '/user'},
          {icon: 'subscriptions', text: 'Subscription', route: '/subscription'},
          {icon: 'view_module', text: 'Self Modul', route: '/self-modul'},
          {icon: 'assignment', text: 'Report', route: '/report'},
          {icon: 'settings', text: 'Setting', route: '/setting'}
      ]
     
    }),
    components: {
  },

   
}
</script>
<style scoped>
.border {
  border-left: 4px solid #000 !important;
  text-decoration: none;
  /* background-color: #0ba518; */
}
.aktiv {
  color: #000 !important;
}
</style>
