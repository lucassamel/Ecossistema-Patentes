import Vuex from "vuex";
import Vue from "vue";
import iten from './modules/iten'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      iten
    }
  });