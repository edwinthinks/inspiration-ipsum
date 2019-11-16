import express from "express";
import path from "path";
import router from "./router";

if (process.env.NODE_ENV !== "production") {
  // Read from the .env file if not on production.
  require("dotenv").config();
}

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 3000;
const clientAppPath = path.normalize(
  path.join(__dirname, "/../../client/build")
);

app.use(express.static(clientAppPath));
app.use(router);

app.get("*", (req, res) => {
  res.sendFile(path.join(clientAppPath + "index.html"));
});

app.listen(port, function() {
  console.log(`Starting app on port ${port}`);
});

export default app;
