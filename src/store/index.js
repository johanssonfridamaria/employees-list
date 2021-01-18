import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    employees: [],
  },
  getters: {
    employees: state => state.employees,
  },
  mutations: {
    SET_EMPLOYEES: (state, _employees) => {
      state.employees = _employees
    }
  },
  actions: {
    getEmployees: async ({commit}) => {
        const response = await fetch('http://dummy.restapiexample.com/api/v1/employees')
        const _employees = await response.json()
        console.log(_employees)
        const employees = _employees.data
        commit('SET_EMPLOYEES', employees)
    }
  },
  modules: {}
});
