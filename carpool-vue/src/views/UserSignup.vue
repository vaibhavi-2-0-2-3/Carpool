<template>
  <div class="signup-page">
    <div class="form-container">
      <h1>StreetSmart</h1>

      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="firstName" class="form-label">What's your name</label>
          <div class="name-fields">
            <input
              type="text"
              id="firstName"
              v-model="firstName"
              placeholder="First name"
              required
              class="first-name-form-input"
            />
            <input
              type="text"
              id="lastName"
              v-model="lastName"
              placeholder="Last name"
              required
              class="last-name-form-input"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="email" class="form-label">What's your email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="email@example.com"
            required
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label for="password" class="form-label">Enter Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="password"
            required
            class="form-input"
          />
        </div>

        <button type="submit" class="signup-button">Sign Up</button>
      </form>

      <p class="login-link">
        Already have an account?
        <router-link to="/login">Login here</router-link>
      </p>

      <p class="consent">
        By proceeding, you consent to get calls, WhatsApp, or SMS messages,
        including by automated means, from StreetSmart and its affiliates to the
        number provided.
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'UserSignup',
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const password = ref('');

    const handleSubmit = () => {
      if (firstName.value && lastName.value && email.value && password.value) {
        console.log(`Name: ${firstName.value} ${lastName.value}`);
        console.log(`Email: ${email.value}`);
        
        // Reset form after submission
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        password.value = '';
      } else {
        alert('Please fill out all fields');
      }
    };

    return {
      firstName,
      lastName,
      email,
      password,
      handleSubmit
    };
  }
};
</script>

<style scoped>
/* Your existing styles remain the same */
.signup-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
}

.form-container {
  width: 100%;
  max-width: 500px; /* Improved width */
  background: white;
  padding: 30px; /* Padding for form */
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
  color: #333;
}

.form-group {
  margin-bottom: 20px; /* Increased margin for better spacing */
}

.name-fields {
  display: flex;
  justify-content: space-between;
}

.form-label {
  display: block; /* Ensures labels are on their own line */
  margin-bottom: 8px; /* Space between label and input */
  font-size: 14px; /* Font size for the label */
  color: #555; /* Slightly darker color for better readability */
  font-weight: 600;
}

.first-name-form-input {
  width: calc(100% - 15px); /* Fill available space */
  padding: 14px; /* Padding inside the input */
  border: 1px solid #ccc;
  border-radius: 4px; /* Rounded corners for inputs */
  font-size: 16px; /* Larger font for inputs */
  background-color: #f8f8f8; /* Light background for inputs */
  transition: border-color 0.3s;
  margin-right: 10px;
}

.last-name-form-input {
  width: calc(100% - 15px); /* Fill available space */
  padding: 14px; /* Padding inside the input */
  border: 1px solid #ccc;
  border-radius: 4px; /* Rounded corners for inputs */
  font-size: 16px; /* Larger font for inputs */
  background-color: #f8f8f8; /* Light background for inputs */
  transition: border-color 0.3s;
  margin-left: 15px;
}

.form-input {
  width: calc(100% - 25px); /* Fill available space */
  padding: 14px; /* Padding inside the input */
  border: 1px solid #ccc;
  border-radius: 4px; /* Rounded corners for inputs */
  font-size: 16px; /* Larger font for inputs */
  background-color: #f8f8f8; /* Light background for inputs */
  transition: border-color 0.3s;
  margin-right: 10px;
}

.first-name-form-input:focus {
  border-color: #007bff; /* Color change on focus */
  outline: none; /* Remove default outline */
}

.last-name-form-input:focus {
  border-color: #007bff; /* Color change on focus */
  outline: none; /* Remove default outline */
}

.form-input:focus {
  border-color: #007bff; /* Color change on focus */
  outline: none; /* Remove default outline */
}

.signup-button {
  width: 100%;
  padding: 14px; /* Padding for button */
  background-color: #000;
  color: white;
  font-size: 18px; /* Increased font size for button */
  border: none;
  border-radius: 8px; /* Rounded button corners */
  cursor: pointer;
  transition: background-color 0.3s;
}

.signup-button:hover {
  background-color: #333; /* Darker color on hover */
}

.login-link {
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  color: #555;
}

.login-link a {
  color: #007bff;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}

.consent {
  font-size: 12px;
  color: gray;
  margin-top: 50px;
  text-align: center;
}
</style>