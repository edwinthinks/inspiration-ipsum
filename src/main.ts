import express = require("express");

// Create a new express application instance
const app: express.Application = express();

app.get("/", function(req, res) {
  res.send({ hello: "world" });
});

app.listen(3000, function() {
  console.log("Starting app on port 3000!");
});

export { app };
