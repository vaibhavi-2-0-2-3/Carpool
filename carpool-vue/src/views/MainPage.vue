<template>
  <div class="main-page">
    <SearchBar @search="handleSearch" />
    <div class="content">
      <FiltersSidebar @update-filters="handleFilters" />
      <RidesList :rides="filteredRides" />
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/common/SearchBar.vue";
import FiltersSidebar from "@/components/common/FiltersSidebar.vue";
import RidesList from "@/components/common/RidesList.vue";

export default {
  components: { SearchBar, FiltersSidebar, RidesList },
  data() {
    return {
      rides: [
        { id: 1, userPhoto: "path/to/photo1.jpg", userName: "Anne Sofie", start: "Aarhus", end: "Hjørring", date: "15-12-2024", time: "13:00", price: 100, rating: 5 },
        { id: 2, userPhoto: "path/to/photo2.jpg", userName: "Claus", start: "Thisted", end: "Svendborg", date: "15-12-2024", time: "13:00", price: 125, rating: 4 },
        // Add more rides here
      ],
      filters: {},
    };
  },
  computed: {
    filteredRides() {
      // Apply filtering logic here
      return this.rides;
    },
  },
  methods: {
    handleSearch(searchData) {
      console.log("Search data:", searchData);
    },
    handleFilters(filters) {
      this.filters = filters;
    },
  },
};
</script>

<style>
.main-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.content {
  display: flex;
  gap: 20px;
}
</style>
