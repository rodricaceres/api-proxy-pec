process.env.NODE_ENV = "testing";

const config = require("config");
const url = require("url");

const serviceUrl = config.get("services.nosis.API_Consultar.url");
const urlFormat = url.format(serviceUrl);

console.log(serviceUrl);
console.log(urlFormat);
