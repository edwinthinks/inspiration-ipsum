import Server from "./server";

// Load env variables if not in production.
if (process.env.NODE_ENV !== "production") {
  // Read from the .env file if not on production.
  require("dotenv").config();
}

const server: Server = new Server();

server.start();
