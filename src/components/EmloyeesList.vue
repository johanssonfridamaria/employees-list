<template>
  <table class="table table-hover">
    <thead class="table-light">
      <tr>
        <th scope="col"></th>
        <th scope="col">First name</th>
        <th scope="col">Last name</th>
        <th scope="col">Age</th>
        <th scope="col">Salary</th>
      </tr>
    </thead>
    <tbody>
      <employee-item
        v-for="employee in employees"
        :key="employee.id"
        :employee="employee"
      />
    </tbody>
  </table>
</template>

<script>
import EmployeeItem from './EmployeeItem.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'EmployeesList',
  components: {
    EmployeeItem,
  },
  computed: {
    ...mapGetters(['employees']),
  },
};
</script>

<style scoped>
@media (max-width: 576px) {
  th {
    font-size: 0.9rem !important;
  }
}
</style>