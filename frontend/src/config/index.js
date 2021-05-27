export const envVariables = {
    development: {
      baseURLAPI: process.env.REACT_APP_API_URL || "http://localhost:4000",
    },
    production: {
      baseURLAPI: process.env.REACT_APP_API_URL || "http://localhost:4000", 
    },
  };
  