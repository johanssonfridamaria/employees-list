<template>
  <div>
    <h1>Employees</h1>
    <employee-item />
  </div>
</template>

<script>
import EmployeeItem from './EmployeeItem.vue'
export default {
  name: 'EmployeesList',
  components: {
    EmployeeItem
  }

}
</script>

<style>

</style>