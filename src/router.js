import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "./views/login.vue"
import SecureComponent from "./views/secure.vue"

Vue.use(VueRouter)


const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/secure",
            name: "secure",
            component: SecureComponent
        }
    ]
})

router.beforeEach((to, from, next) => {
    console.log(to)
    if (localStorage.getItem('jwrsecure') != 'dm') {
        if(to.name != 'login')
        {   
            next('/login');
        }
        else{
            next();
        }
    } else {
      next();
    }
})
export default router