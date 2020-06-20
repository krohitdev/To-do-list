const express = require("express");

const app = express();

// ROUTES
const taskRouter = require("./routes/taskRouter");

app.get("/", (req, res) => res.send("Welcome to To Do app"));

// Body Parser, reading data from body into req.body
app.use(express.json({ limit: "5Mb" }));

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();
});

// Routers
app.use("/api/v1/task", taskRouter);

// 404 - NOT FOUND ROUTE
app.all("*", (req, res, next, err) => {

  next(new Error("App error"));
  res.status(404).json({
    message: "Page Not Found",
    status: "Failure",
  });
});

module.exports = app;
