// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  //api route for saving a new post.
  app.post("/api/posts", function(req, res) {
    db.Shuffle.create({
      entry: req.body
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
