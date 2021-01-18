import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    employees: [],
  },
  getters: {
    employees: state => state.employees;
  },
  mutations: {},
  actions: {},
  modules: {}
});
