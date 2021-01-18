<template>
  <div class="container">
    <emloyees-list/>
  </div>
</template>

<script>
import EmloyeesList from './components/EmloyeesList.vue';

export default {
  name: "App",
  components: {
    EmloyeesList
  }
};
</script>

<style>

</style>
