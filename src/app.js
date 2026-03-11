const express = require('express');

const app= express();

app.use(express.json());

/* requires all routes here */
const authRouter = require("./routes/auth.route")


/* use all routes here */
app.use("/api/auth", authRouter)

module.exports = app;