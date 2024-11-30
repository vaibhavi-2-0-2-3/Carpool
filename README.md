# Backend API Documentation

## `/users/register` Endpoint

### **Description**  
Registers a new user by creating a user account with the provided information.

### **HTTP Method**  
`POST`

### **Request Body**  
The request body should be in JSON format and include the following fields:

- **`fullname` (object)**:  
  - `firstname` (string, required): User's first name (minimum 3 characters).  
  - `lastname` (string, optional): User's last name (minimum 3 characters).  
- **`email` (string, required)**: User's email address (must be valid).  
- **`password` (string, required)**: User's password (minimum 6 characters).  

### **Validation Rules**  
- `email` must be valid.  
- `fullname.firstname` must have a minimum length of 3 characters.  
- `password` must be at least 6 characters.

### **Example Request**  
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### **Example Response**  

**201 Created**  
```json
{
  "token": "JWT_Token_String",
  "user": {
    "_id": "userId123",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

**400 Bad Request**  
```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname"
    }
  ]
}
```

---

## `/users/login` Endpoint

### **Description**  
Authenticates a user using their email and password, returning a JWT token upon successful login.

### **HTTP Method**  
`POST`

### **Request Body**  
The request body should be in JSON format and include the following fields:

- **`email` (string, required)**: User's email address (must be valid).  
- **`password` (string, required)**: User's password (minimum 6 characters).  

### **Validation Rules**  
- `email` must be valid.  
- `password` must be at least 6 characters.

### **Example Request**  
```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### **Example Response**  

**200 OK**  
```json
{
  "token": "JWT_Token_String",
  "user": {
    "_id": "userId123",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

**401 Unauthorized**  
```json
{
  "message": "Invalid email or password"
}
```

**400 Bad Request**  
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email"
    }
  ]
}
```