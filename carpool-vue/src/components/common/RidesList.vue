<template>
  <div class="rides-list">
    <RideCard v-for="ride in rides" :key="ride.id" :ride="ride" />
  </div>
</template>

<script>
import RideCard from "./RideCard.vue";

export default {
  components: { RideCard },
  props: ["rides"],
};
</script>

<style>
.rides-list {
  display: flex;
  flex-direction: column;
}
</style>
