import Vue from 'vue'
import VueRouter from 'vue-router'
import Full from '../views/Full.vue'

const Login = () =>
    import ('../views/Login.vue')
const Dashboard = () =>
    import ('../views/Dashboard.vue')
    // const Projects = () => import('../views/Projects.vue')
    // const Team = () => import('../views/Team.vue')
const AddSoal = () =>
    import ('../views/AddSoal.vue')
const User = () =>
    import ('../views/User.vue')
const Subscription = () =>
    import ('../views/Subscription.vue')
const SelfModul = () =>
    import ('../views/SelfModul.vue')
const Report = () =>
    import ('../views/Report.vue')
const Setting = () =>
    import ('../views/Settings.vue')

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
                    path: '/add-soal',
                    name: 'Add Soal',
                    component: AddSoal
                },
                {
                    path: '/user',
                    name: 'User',
                    component: User
                },
                {
                    path: '/subscription',
                    name: 'Subscription',
                    component: Subscription
                },
                {
                    path: '/self-modul',
                    name: 'Self Modul',
                    component: SelfModul
                },
                {
                    path: '/report',
                    name: 'Report',
                    component: Report
                },
                {
                    path: '/setting',
                    name: 'Setting',
                    component: Setting
                }
            ],
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     // eslint-disable-next-line no-console
//     console.log(`router => ${JSON.stringify(to.path)}`)
//     const token = sessionStorage.getItem('session_token')
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (!token || token === null) {
//             next({
//                 path: '/login',
//                 query: {
//                     redirect: to.fullPath
//                 }
//             })
//         } else {
//             next()
//         }
//     } else {
//         next()
//     }
// })

export default router