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
    <employee-item />
    </tbody>
  </table>
</template>

<script>
import EmployeeItem from './EmployeeItem.vue'
import { mapActions, mapGetters } from 'vuex' 

export default {
  name: 'EmployeesList',
  components: {
    EmployeeItem
  }
  
}
</script>

<style>

</style>