import VueRouter from 'vue-router';
import Empresas from './components/Empresas.vue'
import Materiais from './components/Materiais.vue'
import NichoPatente from './components/NichoPatente.vue'
import Home from './components/Home.vue'


export default new VueRouter({
    mode: 'history',
    routes: [
        {
           path:'/',
           name:'home',
           component: Home
        } ,
         {
            path:'/empresas',
            name:'empresas',
            component: Empresas
         },
         {
            path:'/materiais',
            name:'materiais',
            component: Materiais
         },
         {
            path:'/nichoPatente',
            name:'nichoPatente',
            component: NichoPatente
         }         
      
    ]
});