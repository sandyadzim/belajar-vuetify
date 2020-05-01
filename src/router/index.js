import Vue from 'vue'
import VueRouter from 'vue-router'
import Full from '../views/Full.vue'
import NotFound from '../views/Projects.vue'

const Login = () => import ('../components/Auth/Login.vue')
const Dashboard = () => import ('../views/Dashboard.vue')

// EDUTORE
const BankSoal = () => import ('../components/Edutore/BankSoal.vue')

const KategoriUjian = () => import ('../components/Edutore/Ujian/KategoriUjian.vue')
const BuatUjian = () => import ('../components/Edutore/Ujian/BuatUjian.vue')
const ListUjian = () => import ('../components/Edutore/Ujian/ListUjian.vue')

const KategoriQuiz = () => import ('../components/Edutore/Quiz/KategoriQuiz.vue')
const BuatQuiz = () => import ('../components/Edutore/Quiz/BuatQuiz.vue')
const ListQuiz = () => import ('../components/Edutore/Quiz/ListQuiz.vue')

const Campaign = () => import ('../components/Edutore/Campaign/Campaign.vue')

const ReportUjian = () => import ('../components/Edutore/Report/ReportUjian.vue')
const ReportQuiz = () => import ('../components/Edutore/Report/ReportQuiz.vue')

const Publisher = () => import ('../components/Edutore/Publisher/Publisher.vue')

const LiveUjian = () => import ('../components/Edutore/Monitoring/LiveUjian.vue')
const LiveQuiz = () => import ('../components/Edutore/Monitoring/LiveQuiz.vue')

const Skor = () => import ('../components/Edutore/Analytics/Skor.vue')
const SoalAnalytic = () => import ('../components/Edutore/Analytics/SoalAnalytic.vue')
// END EDUTORE

// PUBLISHER
const BankSoalPublisher = () => import ('../components/Publisher/BankSoalPublisher.vue')

const BuatUjianPublisher = () => import ('../components/Publisher/Ujian/BuatUjianPublisher.vue')
const DaftarUjianPublisher = () => import ('../components/Publisher/Ujian/DaftarUjianPublisher.vue')

const BuatQuizPublisher = () => import ('../components/Publisher/Quiz/BuatQuizPublisher.vue')
const DaftarQuizPublisher = () => import ('../components/Publisher/Quiz/DaftarQuizPublisher.vue')

const ModulePublisher = () => import ('../components/Publisher/Module/ModulePublisher.vue')

const LiveUjianPublisher = () => import ('../components/Publisher/Monitoring/LiveUjianPublisher.vue')
const LiveQuizPublisher = () => import ('../components/Publisher/Monitoring/LiveQuizPublisher.vue')

const SkorPublisher = () => import ('../components/Publisher/Analytics/SkorPublisher.vue')
const SoalAnalyticPublisher = () => import ('../components/Publisher/Analytics/SoalPublisher.vue')
const ReportPublisher = () => import ('../components/Publisher/Analytics/ReportPublisher.vue')

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            redirect: '/dashboard',
            component: Full,
            children: [{
                  path: '/dashboard',
                  name: 'Dashboard',
                  component: Dashboard
                },
                {
                  path: '/bank-soal',
                  name: 'Bank Soal',
                  component: BankSoal
                },
                {
                  path: '/kategori-ujian',
                  name: 'Kategori Ujian',
                  component: KategoriUjian
                },
                {
                  path: '/buat-ujian',
                  name: 'Buat Ujian',
                  component: BuatUjian
                },
                {
                  path: '/list-ujian',
                  name: 'List Ujian',
                  component: ListUjian
                },
                {
                  path: '/kategori-quiz',
                  name: 'Kategori Quiz',
                  component: KategoriQuiz
                },
                {
                  path: '/buat-quiz',
                  name: 'Buat Quiz',
                  component: BuatQuiz
                },
                {
                  path: '/list-quiz',
                  name: 'List Quiz',
                  component: ListQuiz
                },
                {
                  path: '/campaign',
                  name: 'Campaign',
                  component: Campaign
                },
                {
                  path: 'report-ujian',
                  name: 'Report Ujian',
                  component: ReportUjian
                },
                {
                  path: '/report-quiz',
                  name: 'Report Quiz',
                  component: ReportQuiz
                },
                {
                  path: '/publisher',
                  name: 'Publishers',
                  component: Publisher
                },
                {
                  path: '/live-ujian',
                  name: 'Live Ujian',
                  component: LiveUjian
                },
                {
                  path: '/live-quiz',
                  name: 'Live Quiz',
                  component: LiveQuiz
                },
                {
                  path: '/score-peserta',
                  name: 'Skor',
                  component: Skor
                },
                {
                  path: '/soal-analytic',
                  name: 'Analytic Soal',
                  component: SoalAnalytic
                }
            ],
            meta: { requiresAuth: true, requiresAdmin: true }
        },
        {
          path: '/p',
          name: 'Publisher Home',
          redirect: '/p/dashboard',
          component: Full,
          children: [{
            path: 'dashboard',
            name: 'Publisher Dashboard',
            component: Dashboard
          },{
            path: '/p/bank-soals',
            name: 'Bank Soal Publisher',
            component: BankSoalPublisher
          },{
            path: '/p/ujian/buat-ujian',
            name: 'Buat Ujian Publisher',
            component: BuatUjianPublisher
          },{
            path: '/p/ujian',
            name: 'Daftar Ujian Publisher',
            component: DaftarUjianPublisher
          },{
            path: '/p/quiz/buat-quiz',
            name: 'Buat Quiz Publisher',
            component: BuatQuizPublisher
          },{
            path: '/p/quiz',
            name: 'Daftar Quiz Publisher',
            component: DaftarQuizPublisher
          },{
            path: '/p/module',
            name: 'Module Publisher',
            component: ModulePublisher
          },{
            path: '/p/live-ujian',
            name: 'Monitoring Live Ujian',
            component: LiveUjianPublisher
          },{
            path: '/p/live-quiz',
            name: 'Monitoring Live Quiz',
            component: LiveQuizPublisher
          },{
            path: '/p/skor',
            name: 'Skor Publisher',
            component: SkorPublisher
          },{
            path: '/p/soal-analytic',
            name: 'Soal Analytic Publisher',
            component: SoalAnalyticPublisher
          },{
            path: '/p/report',
            name: 'Report Publisher',
            component: ReportPublisher
          }],
          meta: { requiresAuth: true, requiresPublisher: true}
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
          path: '*',
          name: 'Not Found',
          component: NotFound
        }
    ]
})

router.beforeEach((to, from, next) => {
    // eslint-disable-next-line no-console
    console.log(`router => ${JSON.stringify(to.path)}`)
    const token = sessionStorage.getItem('session_token')
    const auth = sessionStorage.getItem('authorized')
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!token || token === null) {
          // eslint-disable-next-line no-console
          console.log('Anda Belum Login')
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        } else if (to.matched.some(record => record.meta.requiresAdmin)) {
            if (auth === 'EDUTORE') {
              // eslint-disable-next-line no-console
              console.log('Anda Menggunakan Akun Edutore')
              next()
            } else {
              // eslint-disable-next-line no-console
              console.log('Anda Bukan Admin Edutore')
              next({
                path: '/p'
              })
            }
        } else if (to.matched.some(record => record.meta.requiresPublisher)) {
          if (auth === 'PARTNER') {
            // eslint-disable-next-line no-console
            console.log('Anda Menggunakan Akun Partner')
            next()
          } else {
            // eslint-disable-next-line no-console
            console.log('Anda Bukan Publisher')
            next({
              path: '/'
            })
          }
        } else {
          next()
        }
      } else {
        next()
    }
})

export default router