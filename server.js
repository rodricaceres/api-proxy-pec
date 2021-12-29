process.env.NODE_ENV = "localhost";

const config = require("config");
const url = require("url");

const serviceUrl = config.get("services.customers.url");
const urlFormat = url.format(serviceUrl);

console.log(serviceUrl);
console.log(urlFormat);
