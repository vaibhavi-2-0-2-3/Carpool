<template>
  <div class="login-page">
    <div class="login-container">
      <h1>StreetSmart</h1>
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
      <div class="signup-link">
        <p>
          New here?
          <router-link to="/signup" class="text-blue-600"
            >Create new Account</router-link
          >
        </p>
      </div>
      <div class="captain-link">
        <router-link to="/captain-login" class="captain-button"
          >Sign in as Captain</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "UserLogin",
  setup() {
    // Reactive references for two-way binding
    const email = ref("");
    const password = ref("");

    // Handle form submission
    const handleLogin = () => {
      if (email.value && password.value) {
        console.log("Email:", email.value);
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
/* Styles remain unchanged */
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
  font-size: 32px;
  color: #111;
}

.input-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 550;
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
  display:block;
}

.login-button:hover {
  background-color: #333;
}

.signup-link {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
}

.captain-link {
  text-align: center;
  margin-top: 80px;
  margin-bottom: 20px;
}

.captain-button {
  width: 100%;
  padding: 12px;
  background-color: #449256; 
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  display: block;
}

.captain-button:hover{
  background-color: #28a745;
}

@media (max-width: 767px) {
  .login-page {
    padding: 20px;
  }

  .login-container {
    width: 100%;
    margin-top: 0%;
    border-radius: 0;
    box-shadow: none;
  }

  .input-group,
  .login-button,
  .captain-button {
    max-width: 100%;
  }
}
</style>
