<template>
  <tr>
    <th scope="row" class="text-secondary">
      <i class="fas fa-user-circle"></i>
    </th>
    <td class="name fw-bold">
      <div class="d-flex flex-column">
        <p class="mb-0">{{ employee.employee_name.split(' ')[0] }}</p>
        <p class="mb-0">{{ employee.employee_name.split(' ')[1] }}</p>
      </div>
    </td>
    <td class="age fw-bold">{{ employee.employee_age }}</td>
    <td class="salary text-end fw-bold">{{ employee.employee_salary }} SEK</td>
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