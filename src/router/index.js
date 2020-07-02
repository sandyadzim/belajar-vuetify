import Vue from 'vue'
import VueRouter from 'vue-router'
import Full from '../views/Full.vue'
import NotFound from '../views/Projects.vue'

const Login = () => import ('../components/Auth/Login.vue')
const Dashboard = () => import ('../views/Dashboard.vue')

// SKYLAN
const PPP = () => import ('../components/PPP/Pelanggan.vue')
const Active = () => import ('../components/PPP/PelangganAktif.vue')
const WhatsappPesan = () => import ('../components/Whatsapp/Pesan.vue')
const WhatsappTemplate = () => import ('../components/Whatsapp/Template.vue')
const Invoice = () => import ('../components/Invoice')
const Settings = () => import ('../components/Settings')
// END SKYLAN

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            redirect: '/admin/dashboard',
            component: Full,
            children: [{
                  path: '/admin/dashboard',
                  name: 'Dashboard',
                  component: Dashboard
                },
                {
                  path: '/admin/ppp/secret',
                  name: 'PPP Secret',
                  component: PPP
                },
                {
                  path: '/admin/ppp/active',
                  name: 'PPP Active',
                  component: Active
                },
                {
                  path: '/admin/whatsapp',
                  name: 'WhatsApp',
                  component: WhatsappPesan
                },
                {
                  path: '/admin/template',
                  name: 'Template',
                  component: WhatsappTemplate
                },
                {
                  path: '/admin/invoice',
                  name: 'Invoice',
                  component: Invoice
                },
                {
                  path: '/admin/administrator',
                  name: 'Invoice',
                  component: Settings
                }
            ],
            meta: { requiresAuth: true, requiresAdmin: true }
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

// router.beforeEach((to, from, next) => {
//     // eslint-disable-next-line no-console
//     console.log(`router => ${JSON.stringify(to.path)}`)
//     const token = sessionStorage.getItem('session_token')
//     const auth = sessionStorage.getItem('authorized')
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (!token || token === null) {
//           // eslint-disable-next-line no-console
//           console.log('Anda Belum Login')
//             next({
//                 path: '/login',
//                 query: {
//                     redirect: to.fullPath
//                 }
//             })
//         } else if (to.matched.some(record => record.meta.requiresAdmin)) {
//             if (auth === 'EDUTORE') {
//               // eslint-disable-next-line no-console
//               console.log('Anda Menggunakan Akun Edutore')
//               next()
//             } else {
//               // eslint-disable-next-line no-console
//               console.log('Anda Bukan Admin Edutore')
//               next({
//                 path: '/p'
//               })
//             }
//         } else if (to.matched.some(record => record.meta.requiresPublisher)) {
//           if (auth === 'PARTNER') {
//             // eslint-disable-next-line no-console
//             console.log('Anda Menggunakan Akun Partner')
//             next()
//           } else {
//             // eslint-disable-next-line no-console
//             console.log('Anda Bukan Publisher')
//             next({
//               path: '/'
//             })
//           }
//         } else {
//           next()
//         }
//       } else {
//         next()
//     }
// })

export default router