import Vue from "vue";
import VueRouter from "vue-router";
import userlist from './userlist'
import store from '../store'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' //这个样式必须引入

Vue.use(VueRouter);

NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })





const routes = [
 ...userlist,
];

store.commit("user/setRouterArr",userlist)

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to,from,next)=>{
  NProgress.start() 
  if(to.path!="/login"&&store.getters.cookie==null){
    next("/login")
    return
  }
  next()
})



router.afterEach(() => {
  NProgress.done()
})





export default router;
