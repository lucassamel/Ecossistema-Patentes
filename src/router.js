import VueRouter from 'vue-router';
import Sobre from './components/Sobre.vue'


export default new VueRouter({
    mode: 'history',
    routes: [
        {
           path:'/',
           name:'home',
           component: Sobre
        } 
      
    ]
});