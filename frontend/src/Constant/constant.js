export const baseApiURL = process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_PRODUCTION_SERVER_API
      : process.env.REACT_APP_PRODUCTION_SERVER_API_NEW;
