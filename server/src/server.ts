import express from "express";
import path from "path";
import router from "./router";

if (process.env.NODE_ENV !== "production") {
  // Read from the .env file if not on production.
  require("dotenv").config();
}

class Server {
  public environment: string;
  public port: number;
  public app: express.Application;

  constructor() {
    this.environment = process.env.NODE_ENV
      ? process.env.NODE_ENV
      : "development";
    this.port = Number(process.env.PORT) || 3000;
    this.app = express();
  }

  /**
   * Returns a instance of a running express application.
   *
   * @returns {express.Application}
   */
  public start(): express.Application {
    this.app.use(router);

    this.app.listen(this.port, () => {
      console.log(`Starting app on port ${this.port}`);
    });

    return this.app;
  }
}

let server = new Server();
let app = server.start();

export default app;
