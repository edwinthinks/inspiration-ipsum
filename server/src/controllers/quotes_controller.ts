import express from "express";

import Quotes from "../../src/lib/quotes";

class QuotesController {
  /**
   * Returns the handler function for index requests
   *
   * @returns {function}
   */
  static index = (req: any, res: any) => {
    res.status(200);
    res.json(Quotes.getAll());
  };
}

export default QuotesController;
