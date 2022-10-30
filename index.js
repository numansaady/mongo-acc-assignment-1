const express = require("express");
const cors = require("cors");
const userRouts = require('./routes/v1/user.route');
const errorHandler = require("./middleware/errorHandler");

const app = express();
const port = process.env.PORT || 5000;

// Middleware 
app.use(cors());
app.use(express.json());



// dbConnect();

app.use('/api/v1/user', userRouts)




app.get("/", (req, res) => {
  res.send("Random User APP Server is Running!");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.all("*", (req, res) => {
    res.send("NO route found.");
  });
  
  app.use(errorHandler);
  
  process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
      process.exit(1);
    });
  });
