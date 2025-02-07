<template>
  <div class="ride-card bg-white shadow-md rounded-lg p-4">
    <div class="flex items-center">
      <img
        :src="ride.photo || 'https://via.placeholder.com/50'"
        alt="User photo"
        class="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h3 class="text-lg font-bold">{{ ride.name }}</h3>
        <p class="text-sm text-gray-600">{{ ride.from }} → {{ ride.to }}</p>
        <p class="text-sm text-gray-600">{{ ride.date }}</p>
      </div>
    </div>
    <div class="flex justify-between items-center mt-4">
      <p class="text-xl font-semibold">{{ ride.price }} DKK</p>
      <div class="flex items-center">
        <span
          v-for="i in Math.floor(ride.rating)"
          :key="i"
          class="text-yellow-500"
        >★</span>
        <span
          v-if="ride.rating % 1"
          class="text-yellow-500"
        >☆</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ride: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.ride-card {
  transition: transform 0.2s ease;
}
.ride-card:hover {
  transform: scale(1.03);
}
</style>
