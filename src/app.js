const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");

// Routers
const  usersRouter  = require("").router
const  authRouter  = require("").router
const  conversationRouter  = require("").router


// Init express app
const app = express();

// Enable CORS
app.use(cors());

// Enable incoming JSON data
app.use(express.json());

// Enable incoming Form-Data
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
else app.use(morgan("combined"));

// Endpoints
app.use("/api/v1/users");
app.use("/api/v1/auth" );
app.use("/api/v1/conversations");


module.exports = { app };
