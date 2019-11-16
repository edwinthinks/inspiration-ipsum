import express from "express";
import path from "path";
import QuotesController from "./controllers/quotes_controller";

const router = express.Router();
const clientAppPath = path.normalize(
  path.join(__dirname, "/../../client/build")
);

/**
 * Setup express to deliver static content.
 */
router.use(express.static(clientAppPath));

/**
 * Defines controller routes.
 */

router.get("/api/quotes", QuotesController.index);
router.get("/api/quotes/random", QuotesController.random);

/**
 * Handles requests made that don't match any route. Fallsback
 * to the react application.
 */
router.get("*", (req, res) => {
  res.sendFile(path.join(clientAppPath + "/index.html"));
});

export default router;
