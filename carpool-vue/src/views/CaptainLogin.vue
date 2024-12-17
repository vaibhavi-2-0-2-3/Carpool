<template>
  <div class="login-page">
    <div class="login-container">
      <h1>StreetSmart - Captain</h1>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="email">What's your email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="email@example.com"
            required
          />
        </div>
        <div class="input-group">
          <label for="password">Enter Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="password"
            required
          />
        </div>
        <button class="login-button" type="submit">Login</button>
      </form>
      <div class="fleet-link">
        <p>
          Join a Fleet?
          <router-link to="/captain-signup" class="text-blue-600">
            Register as Captain</router-link
          >
        </p>
      </div>
      <div class="user-link">
        <router-link to="/login" class="user-button"
          >Sign in as User</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "CaptainLogin",
  setup() {
    // Reactive references for two-way binding
    const email = ref("");
    const password = ref("");

    // Handle form submission
    const handleLogin = () => {
      if (email.value && password.value) {
        console.log("Captain Email:", email.value);
        console.log("Password:", password.value);
        // Perform login logic here (e.g., API call)
        // Clear the input fields
        email.value = "";
        password.value = "";
      } else {
        alert("Please fill out all fields.");
      }
    };

    return {
      email,
      password,
      handleLogin,
    };
  },
};
</script>

<style scoped>
/* Reuse styles with minimal changes */
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
}

.login-container {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  width: 400px;
}

h1 {
  text-align: center;
  margin-top: 0;
  margin-bottom: 60px;
  font-size: 25px;
  color: #111;
}

.input-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #333;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #eeeeee;
}

.login-button {
  width: 100%;
  padding: 12px;
  background-color: #111;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-align: center;
}

.login-button:hover {
  background-color: #333;
}

.fleet-link {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
}

.user-link {
  text-align: center;
  margin-top: 80px;
  margin-bottom: 20px;
}

.user-button {
  width: 100%;
  padding: 12px;
  background-color: #d5622d;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  display: block;
}

.user-button:hover{
  background-color: #f05811;
}

@media (max-width: 767px) {

  .login-page {
    padding: 20px;
  }

  .login-container {
    width: 100%;
    border-radius: 0;
    box-shadow: none;
  }

  .input-group,
  .login-button,
  .fleet-button {
    max-width: 100%;
  }
}
</style>
