<template>
  <tr>
    <th scope="row icon" class="text-secondary">
      <i class="fas fa-user-circle"></i>
    </th>
    <td class="name fw-bold">
      <div class="d-flex name-container">
        <p class="mb-0 me-1">{{ employee.employee_name.split(' ')[0] }}</p>
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
  font-size: 2rem;
  color: #4d8e91;
}
tr {
    background: #fff;
}
.age, .salary, th{
  padding: 1rem;
}
.name{
  padding: 1rem 1rem 1rem 0;
}
@media (max-width: 576px) {
  .name-container {
    flex-direction: column !important;
  }
  td{
    font-size: 0.9rem;
  }
}
</style>