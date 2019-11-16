import express, { Application } from "express";
import router from "./router";

class Server {
  public environment: string;
  public port: number;
  public app: express.Application;

  constructor() {
    this.environment = process.env.NODE_ENV
      ? process.env.NODE_ENV
      : "development";

    if (this.environment !== "test") {
      this.port = Number(process.env.PORT) || 3000;
    } else {
      this.port = 9999;
    }

    this.app = express();
  }

  /**
   * Returns a instance of a running express application.
   *
   * @returns {object}
   */
  public start(): object {
    this.app.use(router);

    return this.app.listen(this.port, () => {
      if (this.environment !== "test") {
        console.log(`Starting app on port ${this.port}`);
      }
    });
  }
}

export default Server;
