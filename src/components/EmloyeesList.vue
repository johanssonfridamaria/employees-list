<template>
  <table class="table table-borderless">
    <thead class="">
      <tr>
        <th scope="col" class="icon"></th>
        <th scope="col" class="name text-uppercase">Employee</th>
        <th scope="col" class="age text-uppercase">Age</th>
        <th scope="col" class="salary  text-uppercase">Salary</th>
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

table{
  border-spacing: 0 1rem;
  border-collapse: separate;
}
@media (max-width: 576px) {
  th {
    font-size: 0.9rem !important;
  }
}
</style>