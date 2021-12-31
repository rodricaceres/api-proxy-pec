const getServiceConfig = require("./getConfig");

module.exports = {
  services: {
    "/cloudProfile": getServiceConfig("pec", {
      url: {
        pathname: "/clientsqualification/cloudProfile"
      }
    }),
    "/imei-check/search/data/imei/350809920173028": getServiceConfig(
      "imei-check",
      {
        url: {
          pathname: "/api-ocp/imei-check/search/data/imei/350809920173028"
        }
      }
    )
  }
};
