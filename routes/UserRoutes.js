const {
    addToLikedMovies,
    getLikedMovies,
    removeFromLikedMovies,
  } = require("../controllers/UserController");
  
  const router = require("express").Router();
  
  router.get("/liked/:email", getLikedMovies);
  router.post("/add", addToLikedMovies);
  router.put("/remove", removeFromLikedMovies);

  router.all("/*", function (req, res) { res.status(404).send({ status: false, msg: "Invalid HTTP request" }) })
  
  module.exports = router;