import { createRouter, createWebHashHistory } from 'vue-router'
import Login from './src/pages/Login.vue'
import Index from './src/pages/Index.vue'
import { store } from './store'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { 
            path: '/login', 
            name: 'Login',
            component: Login 
        },
        { 
            path: '/', 
            name: 'Index', 
            component: Index, 
            meta: { 
                requiresAuth: true 
            } 
        }
    ]
})

router.beforeEach((to, from, next) => {
    const isAuth = store.state.auth

    if (to.matched.some(record => record.meta.requiresAuth) && !isAuth) {
        next({ name: 'Login' })
    } else {
        next()
    }
})