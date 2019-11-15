import { Request, Response } from "express";

import Quotes from "../../src/lib/quotes";

class QuotesController {
  /**
   * Returns the handler function for index requests
   *
   * @returns {function}
   */
  static handleGetIndex = (req: Request, res: Response): void => {
    res.status(200);
    res.json(Quotes.getAll());
  };

  static handleGetRandom = (req: Request, res: Response): void => {
    res.status(200);
    res.json(Quotes.getRandom());
  };
}

export default QuotesController;
