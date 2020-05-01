<template>
   <nav>
       <v-app-bar  color="indigo" dark app >
           <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
           <v-toolbar-title class="text-uppercase ">
               <span class="font-weight-light">TRY OUT || PUBLISHER</span>
               <span> Dashboard</span>
           </v-toolbar-title>
           <v-spacer></v-spacer>
           <v-menu offset-y>
            </v-menu>
            <v-btn text to="/login">
                <span>Exit</span>
                <v-icon right @click="_actionLogout">exit_to_app</v-icon>
             </v-btn>
       </v-app-bar>
      <v-navigation-drawer  v-model="drawer" dark app class="indigo darken-2">
          <v-layout column align-center>
               <v-flex class="mt-5">
                    <img src="https://storage.googleapis.com/edutore-cdn/edutpre.png" alt="" class="contain" style="width: 170px">
               </v-flex>
          </v-layout>
          <v-list flat>
            <v-list-item router to="/p/dashboard" active-class="border" class="border-aktif">
              <v-list-item-action>
                <v-icon>dashboard</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <h5 class="mt-2 ml-3">Main Menu</h5>
            <v-list-item router to="/p/bank-soals" active-class="border" class="border-aktif">
              <v-list-item-action>
                <v-icon>account_balance</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Bank Soal</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
              <v-list-group
                prepend-icon="menu_book"
                no-action
                active-class="border"
                color="white"
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Ujian</v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item  v-for="ujians in ujian" :key="ujians.title" router :to="ujians.route" active-class="sub-border" class="sub-list">
                  <v-list-item-content>
                    <v-list-item-title>{{ ujians.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
              <v-list-group
                prepend-icon="live_help"
                no-action
                active-class="border"
                color="white"
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Quiz</v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-list-item  v-for="quizs in quiz" :key="quizs.title" router :to="quizs.route" active-class="sub-border" class="sub-list">
                  <v-list-item-content>
                    <v-list-item-title>{{ quizs.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
              <v-list-item router to="/p/module" active-class="border" class="border-aktif">
                <v-list-item-action>
                    <v-icon>speaker_notes</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Module</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            <h5 class="mt-2 ml-3">Monitoring</h5>
            <v-list-item v-for="monitorings in monitoring" :key="monitorings.text" router :to="monitorings.route" active-class="border" class="border-aktif">
              <v-list-item-action>
                <v-icon>{{ monitorings.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ monitorings.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <h5 class="mt-2 ml-3">Analytics</h5>
            <v-list-item v-for="analytics in analytic" :key="analytics.text" router :to="analytics.route" active-class="border" class="border-aktif">
              <v-list-item-action>
                <v-icon>{{ analytics.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ analytics.text }}</v-list-item-title>
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
      monitoring :[
          {icon: 'queue_play_next', text:'Live Ujian', route: '/p/live-ujian'},
          {icon: 'remove_from_queue', text:'Live Quiz', route: '/p/live-quiz'}
      ],
      analytic :[
          {icon: 'star', text: 'Skor', route: '/p/skor'},
          {icon: 'bar_chart', text: 'Soal', route: '/p/soal-analytic'},
          {icon: 'star', text: 'Report', route: '/p/report'}
      ],
      ujian: [
        {title: 'Buat Ujian', route: '/p/ujian/buat-ujian'},
        {title: 'Daftar Ujian', route: '/p/ujian'}
      ],
      quiz: [
        {title: 'Buat Quiz', route: '/p/quiz/buat-quiz'},
        {title: 'Daftar Quiz', route: '/p/quiz'}
      ],
      report: [
        {title: 'Ujian', route: '/p/report'},
        {title: 'Quiz', route: '/p/report-quiz'}
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
  border-left: 4px solid #FFCA28 !important;
  text-decoration: none;
  /* background-color: #0ba518; */
}
.sub-border {
  border-left: 4px solid #FFCA28 !important;
}
.sub-list {
  background-color: #9FA8DA;
  border-bottom: 1px solid #303F9F;
}
.sub-list:hover {
  border-left: 4px solid #FFCA28 !important;
}
.border-aktif:hover {
  border-left: 4px solid #FFCA28 !important;
}
</style>
