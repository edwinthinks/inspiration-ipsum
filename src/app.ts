import express from "express";

if (process.env.NODE_ENV !== "production") {
  // Read from the .env file if not on production.
  require("dotenv").config();
}

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 3000;

app.get("/", function(req, res) {
  res.send({ hello: "world" });
});

app.listen(port, function() {
  console.log(`Starting app on port ${port}`);
});

export { app };
