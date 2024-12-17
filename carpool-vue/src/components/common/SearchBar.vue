<template>
  <div class="search-bar">
    <input type="text" placeholder="Where from?" v-model="from" />
    <input type="text" placeholder="Where to?" v-model="to" />
    <input type="date" v-model="date" />
    <input type="time" v-model="time" />
    <button @click="searchRides">Search rides</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      from: "",
      to: "",
      date: "",
      time: "",
    };
  },
  methods: {
    searchRides() {
      // Emit search data to parent
      this.$emit("search", { from: this.from, to: this.to, date: this.date, time: this.time });
    },
  },
};
</script>

<style>
.search-bar {
  display: flex;
  gap: 10px;
}
</style>
