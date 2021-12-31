const config = require("config");
const url = require("url");

module.exports = (req, res, next) => {
  req.target = config.get(`services.${req.url}.url`);
  req.targetUrl = url.format(req.target);

  next();
};
