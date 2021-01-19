<template>
  <div class="container">
    <div class="card my-3 border-0">
      <div class="rounded heading">
        <h1 class="text-center my-3 text-uppercase text-white-50">Employees</h1>
      </div>
      <emloyees-list v-if="employees.length" />
      <div v-else>
        <p class="text-center mt-1">Loading...</p>
      </div>
    </div>
  </div>
</template>

<script>
import EmloyeesList from './components/EmloyeesList.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    EmloyeesList,
  },
  methods: {
    ...mapActions(['getEmployees']),
  },
  computed: {
    ...mapGetters(['employees']),
  },
  created() {
    this.getEmployees();
  },
};
</script>

<style>
body{
  background: #eee;
}
.heading{
  background-color:  #4d8e91;
}
.card {
  max-width: 30rem;
  margin: auto;
  background: #eee;
}
.icon {
  width: 5%;
}
.name {
  width: 40%;
}
.age {
  width: 25%;
}
.salary {
  width: 30%;
}
</style>