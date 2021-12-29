const getServiceConfig = require("./getConfig");

module.exports = {
  dependencies: {
    origination: {
      url: {
        protocol: "https",
        hostname: "e2-origination.apinaranja.com"
      }
    },
    "soa-infra": {
      url: {
        protocol: "https",
        hostname: "192.168.222.52"
      }
    },
    services: {
      url: {
        hostname: "homoservices.apinaranja.com",
        protocol: "https"
      }
    },
    sacraley_nosis: {
      url: {
        hostname: "sacrelay.nosis.com",
        protocol: "http"
      }
    },
    sac_nosis: {
      url: {
        hostname: "sac.nosis.com",
        protocol: "http"
      }
    }
  },
  services: {
    nosis: {
      API_Consultar: getServiceConfig("sacraley_nosis", {
        url: {
          pathname: "/api/consultar"
        },
        timeout: 10000
      }),
      ServicioVI_Consulta: getServiceConfig("sac_nosis", {
        url: {
          pathname: "/SAC_ServicioVI/Consulta.asp"
        },
        timeout: 10000
      }),
      ServicioVI_Respuesta: getServiceConfig("sac_nosis", {
        url: {
          pathname: "/SAC_ServicioVI/Respuesta.asp"
        },
        timeout: 10000
      }),
      ServicioSF_Consulta: getServiceConfig("sac_nosis", {
        url: {
          pathname: "/SAC_ServicioSF/Consulta_test.asp"
        },
        timeout: 10000
      }),
      ServicioSF_Respuesta: getServiceConfig("sac_nosis", {
        url: {
          pathname: "/SAC_ServicioSF/Respuesta.asp"
        },
        timeout: 10000
      })
    },
    capacidadDeCredito: getServiceConfig("soa-infra", {
      url: {
        pathname:
          "/soa-infra/services/SoporteNegocio/CapacidadDeCredito/capacidadDeCredito"
      },
      timeout: 23000
    }),
    forms: getServiceConfig("origination", {
      url: {
        pathname: "/mso/origination/forms"
      },
      timeout: 10000
    }),
    customers: getServiceConfig("services", {
      url: {
        pathname: "/customers-ms/api/customers"
      },
      timeout: 4000
    })
  }
};
