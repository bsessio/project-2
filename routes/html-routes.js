// Require some stuff.
var path = require("path");
const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/app/index.html"));
  });

// If no other routes, go to index.
  app.get("*", function(req, res) {
    res.redirect("/");
  });
};
