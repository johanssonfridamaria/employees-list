<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Salary</th>
      </tr>
    </thead>
    <tbody>
      <employee-item v-for="employee in employees" :key=employee.id :employee=employee  />
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
    ...mapGetters(['employees'])
  },
};
</script>

<style>
</style>