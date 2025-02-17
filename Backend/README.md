# Carpooling API - Backend Documentation 🚗💨

Welcome to the Carpooling API! This backend service handles user and captain authentication, ride management, and map-related functionalities. Below is the API documentation to help you integrate and use the endpoints effectively. 

## User Authentication & Management 👥

### Register a New User

- **Endpoint:** `POST /users/register`
- **Description:** Creates a new user account.
- **Request Body:**
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "securePass123"
  }
  ```
- **Response:**
  ```json
  {
    "user": {
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    },
    "token": "JWT_TOKEN_HERE"
  }
  ```

### User Login

- **Endpoint:** `POST /users/login`
- **Description:** Authenticates the user and returns a JWT token.
- **Request Body:**
  ```json
  {
    "email": "john.doe@example.com",
    "password": "securePass123"
  }
  ```
- **Response:** Similar to the register endpoint, returning the user object and token.

### Fetch User Profile

- **Endpoint:** `GET /users/profile`
- **Authentication:** Requires JWT token in the header (`Authorization: Bearer <token>`).
- **Response:**
  ```json
  {
    "user": {
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

### User Logout

- **Endpoint:** `GET /users/logout`
- **Description:** Logs out the user and blacklists the token.

---

## Captain Authentication & Management 🏎️

### Register as a Captain

- **Endpoint:** `POST /captains/register`
- **Description:** Creates a captain account.
- **Request Body:**
  ```json
  {
    "fullname": {
      "firstname": "Alice",
      "lastname": "Smith"
    },
    "email": "alice.smith@example.com",
    "password": "captainPass123",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ-1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
  ```
- **Response:** Similar to user registration but includes vehicle details.

### Captain Login & Profile

- **Endpoints:**
  - `POST /captains/login` (Login and receive JWT token)
  - `GET /captains/profile` (Fetch profile details)
- **Authentication:** Requires JWT token.
- **Response:** Similar to user profile but includes vehicle information.

### Captain Logout

- **Endpoint:** `GET /captains/logout`
- **Description:** Logs out the captain and blacklists the token.

---

## Maps & Location Services 🗺️

### Get Coordinates for an Address

- **Endpoint:** `GET /maps/get-coordinates`
- **Query Parameter:** `address=1600+Amphitheatre+Parkway`
- **Response:**
  ```json
  {
    "lat": 37.4224764,
    "lng": -122.0842499
  }
  ```

### Get Distance & Estimated Travel Time

- **Endpoint:** `GET /maps/get-distance-time`
- **Query Parameters:** `origin=New+York&destination=Los+Angeles`
- **Description:** Uses the Haversine formula to estimate the distance and assumes an average travel speed of 60 km/h.
- **Response:**
  ```json
  {
    "distance": "4486.54 km",
    "estimatedTime": "75 hours"
  }
  ```

### Get Address Suggestions (Autocomplete)

- **Endpoint:** `GET /maps/get-suggestions`
- **Query Parameter:** `input=1600+Amphitheatre`
- **Response:** List of suggested addresses.
  ```json
  [
    {
      "formatted": "1600 Amphitheatre Parkway, Mountain View, CA",
      "geometry": { "lat": 37.4224764, "lng": -122.0842499 }
    },
    {
      "formatted": "1600 Amphitheatre Rd, Somewhere Else",
      "geometry": { "lat": 37.5000000, "lng": -122.0000000 }
    }
  ]
  ```

### Get Captains in a Given Radius

- **Endpoint:** `GET /maps/get-captains`
- **Query Parameters:** `lat=37.4224764&lng=-122.0842499&radius=10`
- **Description:** Retrieves captains within the specified radius (in km) from the given location.
- **Response:**
  ```json
  [
    {
      "id": "123456",
      "name": "Captain Alice",
      "location": { "lat": 37.428, "lng": -122.090 }
    },
    {
      "id": "789012",
      "name": "Captain Bob",
      "location": { "lat": 37.420, "lng": -122.080 }
    }
  ]
  ```

---

## Ride Management 🚖

### Create a Ride

- **Endpoint:** `POST /rides/create`
- **Authentication:** Requires JWT token.
- **Request Body:**
  ```json
  {
    "pickup": "Downtown, LA",
    "destination": "Hollywood, LA",
    "vehicleType": "car"
  }
  ```
- **Response:**
  ```json
  {
    "ride": {
      "user": "USER_ID_HERE",
      "pickup": "Downtown, LA",
      "destination": "Hollywood, LA",
      "fare": 75.0,
      "status": "pending",
      "duration": 1200,
      "distance": 5000,
      "otp": "1234"
    }
  }
  ```

### Get Fare Estimate

- **Endpoint:** `GET /rides/get-fare`
- **Query Parameters:** `pickup=LocationA&destination=LocationB`
- **Response:**
  ```json
  {
    "auto": 50.0,
    "car": 75.0,
    "moto": 40.0
  }
  ```

---

## Error Handling ⚠️

- `400 Bad Request`: Invalid or missing parameters.
- `404 Not Found`: Requested resource not available.
- `500 Internal Server Error`: General server error.

---

## Conclusion 🎯

This API provides essential endpoints for user and captain management, ride booking, and map-based services. Ensure you authenticate requests where required, handle errors properly, and happy carpooling! 🚀
