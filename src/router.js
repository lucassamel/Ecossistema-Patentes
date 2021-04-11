import VueRouter from 'vue-router';
import Sobre from './components/Sobre.vue'
import Contato from './components/Contato.vue'
import Duvida from './components/Duvidas.vue'
import Empresas from './components/Empresas.vue'
import Eventos from './components/Eventos.vue'
import Feedback from './components/Feedback.vue'
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
            path:'/contato',
            name:'contato',
            component: Contato
         },
         {
            path:'/duvidas',
            name:'duvidas',
            component: Duvida
         },
         {
            path:'/empresas',
            name:'empresas',
            component: Empresas
         },
         {
            path:'/eventos',
            name:'eventos',
            component: Eventos
         },
         {
            path:'/feedback',
            name:'feedback',
            component: Feedback
         },
         {
            path:'/eventos',
            name:'eventos',
            component: Eventos
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
         },
         {
            path:'/sobre',
            name:'sobre',
            component: Sobre
         }           
      
    ]
});