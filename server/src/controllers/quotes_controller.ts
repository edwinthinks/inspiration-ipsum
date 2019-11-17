import { Request, Response } from "express";

import Quotes from "../lib/quotes";

class QuotesController {
  /**
   * Returns the handler function for index requests
   *
   * @returns {function}
   */
  static index = (req: Request, res: Response): void => {
    res.status(200);
    res.json(Quotes.getAll());
  };

  static random = (req: Request, res: Response): void => {
    res.status(200);
    res.json(Quotes.getRandom());
  };

  static group = (req: Request, res: Response): void => {
    res.status(200);
    res.json(Quotes.getGroup());
  };
}

export default QuotesController;
