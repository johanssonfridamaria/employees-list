<template>
  <tr>
    <th scope="row" class="text-secondary">
      <i class="fas fa-user-circle"></i>
    </th>
    <td>{{ employee.employee_name.split(' ')[0] }}</td>
    <td>{{ employee.employee_name.split(' ')[1] }}</td>
    <td>{{ employee.employee_age }}</td>
    <td>{{ employee.employee_salary }}</td>
  </tr>
</template>

<script>
export default {
  name: 'EmployeeItem',
  props: ['employee'],
};
</script>

<style scoped>
.fas {
  font-size: 1.5rem;
}
tr {
  border-radius: 0.5rem;
  box-shadow: 0 0 0 1px #ccc;
}
@media (max-width: 576px) {
  td {
    font-size: 0.8rem !important;
  }
}
</style>