<template>
  <tr>
    <th scope="row"><i class="fas fa-user-circle"></i></th>
    <td>{{employee.employee_name.split(' ')[0]}}</td>
    <td>{{employee.employee_name.split(' ')[1]}}</td>
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