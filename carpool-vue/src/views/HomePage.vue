<template>
  <div class="home-page">
    <!-- Background Image -->
    <div class="image-container">
      <img
        src="https://plus.unsplash.com/premium_photo-1677156768003-0415b8769a75?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Traffic"
      />
    </div>

    <!-- Content Section -->
    <div class="content-container">
      <h1>Start Your Carpooling Journey Now</h1>
      <button @click="navigateToLogin">Continue</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    navigateToLogin() {
      this.$router.push("/login"); // Redirect to Login page
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.image-container {
  flex-grow: 1; /* Allows it to fill the remaining space */
  overflow: hidden;
  position: relative;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the area entirely */
}

.content-container {
  background-color: rgba(
    255,
    255,
    255,
    0.9
  ); /* White background with slight transparency */
  padding: 40px;
  text-align: center;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.2); /* Shadow at the top for depth */
  /* border-radius: 20px 20px 0 0;  Rounded top corners   */
}

h1 {
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: bold;
  color: black;
}

button {
  background-color: black;
  color: white;
  border: none;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #333;
}
</style>
