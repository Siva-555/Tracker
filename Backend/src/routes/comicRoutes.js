const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send({ data: "List of all comics" });
});

module.exports = router;
