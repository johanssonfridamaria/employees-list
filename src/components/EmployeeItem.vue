<template>
  <tr>
    <td scope="row" class="icon text-secondary">
      <i class="fas fa-user-circle"></i>
    </td>
    <td class="name">
      <div class="d-flex name-container">
        <p class="mb-0 me-1">{{ employee.employee_name.split(' ')[0] }}</p>
        <p class="mb-0">{{ employee.employee_name.split(' ')[1] }}</p>
      </div>
    </td>
    <td class="age text-center">{{ employee.employee_age }}</td>
    <td class="salary text-end">{{ employee.employee_salary }} SEK</td>
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
    background: transparent;
}
.age,
.salary,
.icon {
  padding: 1rem;
  background: #fff;
}
.salary {
  border-radius: 0 0.5rem 0.5rem 0;
}
.icon {
  border-radius: 0.5rem 0 0 0.5rem;
}
.name {
  padding: 1rem 1rem 1rem 0;
  background: #fff;
}
@media (max-width: 576px) {
  .name-container {
    flex-direction: column !important;
  }
  td {
    font-size: 0.9rem;
  }
}
</style>