<template>
  <tr>
    <th scope="row"></th>
    <td>{{employee.employee_name.split}}</td>
    <td>{{employee.employee_name.split}}</td>
    <td>{{employee.employee_age}}</td>
    <td>{{employee.employee_salary}}</td>
  </tr>
</template>

<script>
export default {
  name: 'EmployeeItem',
  props: ['employee'],

}
</script>

<style>

</style>