# Carpool Backend API Documentation

## Endpoint: `/users/register`

### Description

The `/users/register` endpoint allows new users to register by providing their personal information. Upon successful registration, a JSON Web Token (JWT) is generated and returned for authentication purposes.

### HTTP Method

`POST`

### Request Body

The request body must be in JSON format and include the following fields:

| Field                | Type   | Required | Description                                                                      |
| -------------------- | ------ | -------- | -------------------------------------------------------------------------------- |
| `fullname.firstname` | String | Yes      | The first name of the user (minimum 3 characters).                               |
| `fullname.lastname`  | String | No       | The last name of the user (minimum 3 characters).                                |
| `email`              | String | Yes      | The email address of the user (must be a valid email and at least 5 characters). |
| `password`           | String | Yes      | The password for the user account (minimum 6 characters).                        |

### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword123"
}

## Endpoint: /users/login
Description
The /users/login endpoint allows existing users to authenticate by providing their email and password. Upon successful login, a JSON Web Token (JWT) is generated and returned for further authenticated requests.

### HTTP Method
### POST

# Request Body
The request body must be in JSON format and include the following fields:

| Field | Type | Required | Description | |---------|--------|----------|--------------------------------------------------| | email | String | Yes | The email address of the user (must be a valid email and at least 5 characters). | | password | String | Yes | The password for the user account (minimum 6 characters). |

## Example Request
json
Insert Code
Edit
Copy code
{
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
## Response
On successful login, the response will contain a JWT and user information.

Successful Response (HTTP Status 200)
json
Insert Code
Edit
Copy code
{
  "token": "your_jwt_token_here",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
## Error Responses
Invalid Email or Password (HTTP Status 401)

Response:
json
Insert Code
Edit
Copy code
{
  "message": "Invalid email or password"
}
## Validation Errors (HTTP Status 400)

If the provided email is not valid or the password is too short:
json
Insert Code
Edit
Copy code
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password Invalid",
      "param": "password",
      "location": "body"
    }
  ]
}
### Notes
Ensure that the email and password meet the specified criteria for successful authentication.
The generated JWT should be used for subsequent requests that require authentication.
```
