<template>
  <div class="container">
    <div class="card my-5 border-0">
      <div class="bg-secondary rounded">
        <h1 class="text-center my-3">Employees</h1>
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
.card {
  max-width: 30rem;
  margin: auto;
}
th {
  width: 5%;
  padding: 1rem 1rem !important;
  vertical-align: middle;
}
.name {
  width: 50%;
  padding: 1rem 1rem 1rem 0 !important;
}
.age {
  width: 20%;
  padding: 1rem !important;
}
.salary {
  width: 25%;
  padding: 1rem !important;
}
</style>