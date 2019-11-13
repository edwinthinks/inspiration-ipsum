import express from "express";

if (process.env.NODE_ENV !== "production") {
  // Read from the .env file if not on production.
  require("dotenv").config();
}
const app: express.Application = express();
const port: number = Number(process.env.PORT) || 3001;

app.get("/users", function(req, res) {
  res.json([
    {
      id: 1,
      username: "samsepi0l"
    },
    {
      id: 2,
      username: "D0loresH4ze"
    }
  ]);
});

app.listen(port, function() {
  console.log(`Starting app on port ${port}`);
});

export { app };
