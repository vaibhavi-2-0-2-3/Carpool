<template>
  <div class="signup-container">
    <form @submit.prevent="submitHandler" class="form">
      <h3 class="form-title">Captain Signup</h3>

      <div class="name-inputs">
        <label class="form-label">What's our captain's name</label>
        <div class="name-fields">
          <input
            id="firstName"
            required
            type="text"
            placeholder="First Name"
            v-model="firstName"
            class="input first-name"
          />
          <input
            id="lastName"
            required
            type="text"
            placeholder="Last Name"
            v-model="lastName"
            class="input"
          />
        </div>
      </div>

      <div class="email-inputs">
        <label class="form-label">What's our captain's Email</label>
        <input
          required
          type="email"
          placeholder="Email"
          v-model="email"
          class="input full-width"
        />
      </div>

      <div class="password-input">
        <label class="form-label">Enter Password</label>
        <input
          required
          type="password"
          placeholder="Password"
          v-model="password"
          class="input full-width"
        />
      </div>

      <h4 class="vehicle-title">Vehicle Information</h4>
      <div class="vehicle-inputs">
        <input
          required
          type="text"
          placeholder="Vehicle Color"
          v-model="vehicleColor"
          class="input vehicle-color"
        />
        <input
          required
          type="text"
          placeholder="Vehicle Plate"
          v-model="vehiclePlate"
          class="input"
        />
      </div>
      <div class="vehicle-inputs">
        <input
          required
          type="number"
          placeholder="Vehicle Capacity"
          v-model="vehicleCapacity"
          class="input vehicle-capacity"
        />
        <select required v-model="vehicleType" class="input select-input">
          <option value="" disabled>Select Vehicle Type</option>
          <option value="car">Car</option>
          <option value="auto">Auto</option>
          <option value="moto">Moto</option>
        </select>
      </div>

      <button type="submit" class="submit-button">
        Create Captain Account
      </button>

      <p class="login-link">
        Already have an account?
        <router-link to="/captain-login" class="text-blue-600"
          >Login here</router-link
        >
      </p>

      <p class="privacy-policy">
        This site is protected by reCAPTCHA and the
        <span class="underline">Google Privacy Policy</span> and
        <span class="underline">Terms of Service apply</span>.
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'CaptainSignup',
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const password = ref('');
    const vehicleColor = ref('');
    const vehiclePlate = ref('');
    const vehicleCapacity = ref('');
    const vehicleType = ref('');

    const submitHandler = () => {
      if (firstName.value && lastName.value && email.value && password.value 
          && vehicleColor.value && vehiclePlate.value 
          && vehicleCapacity.value && vehicleType.value) {
        const captainData = {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          vehicleColor: vehicleColor.value,
          vehiclePlate: vehiclePlate.value,
          vehicleCapacity: vehicleCapacity.value,
          vehicleType: vehicleType.value
        };

        console.log('Captain Signup Data:', captainData);
        
        // TODO: Implement API call here
        
        // Reset form
        resetForm();
      } else {
        alert('Please fill out all fields');
      }
    };

    const resetForm = () => {
      firstName.value = '';
      lastName.value = '';
      email.value = '';
      password.value = '';
      vehicleColor.value = '';
      vehiclePlate.value = '';
      vehicleCapacity.value = '';
      vehicleType.value = '';
    };

    return {
      firstName,
      lastName,
      email,
      password,
      vehicleColor,
      vehiclePlate,
      vehicleCapacity,
      vehicleType,
      submitHandler
    };
  }
};
</script>

<style scoped>
.signup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background-color: #f8f9fa;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
}

.form {
  background: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}

.form-title {
  font-size: 34px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
}

.form-label {
  font-weight: 450;
}

.name-inputs,
.email-inputs,
.password-input {
  margin-bottom: 20px;
}

.name-fields {
  display: flex;
  justify-content: space-between;
}

.input {
  width: 100%;
  max-width: 48%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #f8f8f8;
}

.input.first-name {
  margin-right: 10px; /* Adjust the value for desired spacing */
}

.full-width {
  max-width: 95%; /* Full width for email and password inputs */
}

.input.vehicle-color {
  margin-right: 10px; /* Adjust the value for desired spacing */
}

.input.vehicle-capacity {
  margin-right: 10px; /* Adjust the value for desired spacing */
}

.vehicle-inputs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.select-input {
  appearance: none;
  background-color: #f8f8f8;
}

.submit-button {
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: 12px;
  background-color: #333;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #444;
}

.login-link {
  text-align: center;
  margin-top: 20px;
}

.privacy-policy {
  text-align: center;
  font-size: 12px;
  margin-top: 30px;
  color: #666;
}

.underline {
  text-decoration: underline;
}
</style>
