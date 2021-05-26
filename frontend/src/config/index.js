export const envVariables = {
    development: {
      baseURLAPI: process.env.REACT_APP_API_DEV_DOMAIN || "http://localhost:4000",
    },
    production: {
      baseURLAPI: process.env.REACT_APP_API_PROD_DOMAIN || "http://localhost:4000", 
    },
  };
  