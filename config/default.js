const getServiceConfig = require("./getConfig");

module.exports = {
  dependencies: {
    origination: {
      url: {
        protocol: "https",
        hostname: "testing"
      }
    }
  },
  services: {
    customers: getServiceConfig("pec", {
      url: {
        pathname: "/api/consultar"
      },
      timeout: 10000
    })
  }
};
