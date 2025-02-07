<template>
  <div class="sidebar">
    <h2 class="text-lg font-bold mb-4">Filters</h2>
    <div class="mb-4">
      <label class="block text-sm font-medium">Radius</label>
      <input type="range" min="1" max="50" v-model="radius" class="w-full mt-2" />
      <p class="text-sm text-gray-500">{{ radius }} km</p>
    </div>
    <div class="mb-4">
      <h3 class="font-medium mb-2">Luggage</h3>
      <div class="space-y-2">
        <label><input type="radio" name="luggage" /> Small</label>
        <label><input type="radio" name="luggage" /> Medium</label>
        <label><input type="radio" name="luggage" /> Large</label>
      </div>
    </div>
    <!-- More filters -->
    <button class="bg-blue-500 text-white py-2 px-4 rounded">Update</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radius: 15,
    };
  },
};
</script>

<style scoped>
.sidebar {
  font-family: Arial, sans-serif;
}
</style>
