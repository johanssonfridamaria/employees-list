<template>
  <div class="container">
    <div class="card mt-5">
      <emloyees-list />
    </div>
  </div>
</template>

<script>
import EmloyeesList from './components/EmloyeesList.vue';

export default {
  name: 'App',
  components: {
    EmloyeesList,
  },
};
</script>

<style>
.card{
  max-width: 50rem;
  margin: auto;
}

</style>