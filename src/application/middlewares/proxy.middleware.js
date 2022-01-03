const axios = require("axios");
const https = require("https");

module.exports = async (req, res) => {
  delete req.headers.host;

  const options = {
    method: req.method,
    headers: req.headers,
    validateStatus: false,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
  };

  console.log(`${req.method} => ${req.targetUrl}`);
  const response = await axios
    .create(options)
    .request(req.targetUrl, { data: req.body });

  console.log(`${response.status} <=`);
  res.status(response.status).json(response.data);
};
