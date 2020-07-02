<template>
   <nav>
       <v-app-bar  color="red lighten-3" dark app >
           <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
           <v-toolbar-title class="text-uppercase ">
               <span>SKY-LAN</span>
               <span class="font-weight-light"> Dashboard</span>
           </v-toolbar-title>
           <v-spacer></v-spacer>
           <v-menu offset-y>
            </v-menu>
            <v-btn text to="/login">
                <span>Exit</span>
                <v-icon right @click="_actionLogout">exit_to_app</v-icon>
             </v-btn>
       </v-app-bar>
      <v-navigation-drawer  v-model="drawer" dark app class="red lighten-1">
          <v-layout column align-center>
               <v-flex class="mt-5">
                    <div class="logo">
                      <img src="../../public/sky-logo.png" class="img-fluid pt-3 pl-2" alt="" style="width: 200px">
                    </div>
               </v-flex>
          </v-layout>
          <v-list flat>
            <v-list-item router to="/admin/dashboard" active-class="border" class="border-aktif">
              <v-list-item-action>
                <v-icon>dashboard</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <h5 class="mt-2 ml-3">Main Menu</h5>
              <v-list-group
                prepend-icon="mdi-account-multiple"
                no-action
                active-class="border"
                color="white"
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Pelanggan</v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item  v-for="p in pelanggan" :key="p.title" router :to="p.route" active-class="sub-border" class="sub-list">
                  <v-list-item-content>
                    <v-list-item-title>{{ p.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
              <v-list-item router to="/admin/invoice" active-class="border" class="border-aktif">
              <v-list-item-action>
                <v-icon>mdi-cash-multiple</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Invoice</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-group
                prepend-icon="mdi-whatsapp"
                no-action
                active-class="border"
                color="white"
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>WhatsApp</v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item  v-for="w in whatsapp" :key="w.title" router :to="w.route" active-class="sub-border" class="sub-list">
                  <v-list-item-content>
                    <v-list-item-title>{{ w.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
              <h5 class="mt-2 ml-3">Settings</h5>
              <v-list-item router to="/admin/administrator" active-class="border" class="border-aktif">
              <v-list-item-action>
                <v-icon>settings</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Administrator</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
      </v-navigation-drawer>
   </nav>
</template>
<script>
export default {
   data: () => ({
      drawer: true,
      pelanggan: [
        {title: 'Pelanggan', route: '/admin/ppp/secret'},
        {title: 'Pelanggan Aktif', route: '/admin/ppp/active'}
      ],
      whatsapp: [
        {title: 'Pesan', route: '/admin/whatsapp'},
        {title: 'Template', route: '/admin/template'}
      ]
    }),
    components: {
    },
  methods:{
    _actionLogout() {
      sessionStorage.clear()
    }
  }

}
</script>
<style scoped>
.border {
  border-left: 4px solid #fff !important;
  text-decoration: none;
}
.sub-border {
  border-left: 4px solid #fff !important;
}
.sub-list {
  background-color: #EF9A9A;
  border-bottom: 1px solid #fff;
}
.sub-list:hover {
  border-left: 4px solid #fff !important;
}
.border-aktif:hover {
  border-left: 4px solid #fff !important;
}
.logo {
  height: 140px;
  width: 28vh;
  background-color: red;
  background-image: linear-gradient(to bottom right, #fff, #EF9A9A);
  border-radius: 70% 50% 70% 50%;
}
</style>
