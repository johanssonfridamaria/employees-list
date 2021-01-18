<template>
  <div class="container">
    <div class="card mt-5">
      <emloyees-list v-if="employees"/>
    </div>
  </div>
</template>

<script>
import EmloyeesList from './components/EmloyeesList.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    EmloyeesList,
  },
   methods: {
    ...mapActions(['getEmployees']),
  },
  computed: {
    ...mapGetters(['employees'])
  },
  created() {
    this.getEmployees();
  },
};
</script>

<style>
.card{
  max-width: 50rem;
  margin: auto;
}

</style>