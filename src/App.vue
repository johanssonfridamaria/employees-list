<template>
  <div class="container">
    <div class="card my-5 rounded">
      <div class="bg-secondary rounded-top">
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
  max-width: 50rem;
  margin: auto;
}
</style>