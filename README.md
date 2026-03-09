# Simple JWT Authentication App

This is a small full stack project that demonstrates how authentication works using **JWT (JSON Web Token)**. The project includes a **Node.js + Express backend** and a **React frontend**.

The app allows a user to login, access protected routes like **profile** and **dashboard**, and logout by clearing the token.

## Features

* Login with JWT authentication
* Protected routes using middleware
* React frontend with routing
* Loading state during login
* Logout by clearing token
* Hardcoded credentials (no database)

## Tech Stack

Backend

* Node.js
* Express
* JSON Web Token

Frontend

* React
* React Router
* Axios

## Credentials

Use the following credentials to login:

```
username: admin
password: admin123
```

Password must be at least **6 characters long**.

## API Routes

```
POST /api/login
GET /api/profile
GET /api/dashboard
```

The **profile** and **dashboard** routes are protected and require a valid JWT token.

## How Authentication Works

1. User logs in with username and password.
2. Server verifies the credentials.
3. If valid, server returns a JWT token.
4. Token is stored in the browser (localStorage).
5. For protected routes, the token is sent in the request header.
6. Middleware verifies the token before allowing access.

## Logout

Logout simply removes the token from localStorage.

## Run the Project

Backend

```
npm install
node server.js
```

Frontend

```
npm install
npm start
```

The backend runs on **port 5000** and the React app runs on **port 3000**.

## Note

This project uses **hardcoded credentials** and does not include a database. It is created only to demonstrate the basic JWT authentication flow.
