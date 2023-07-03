const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const currentEnv = process.env.NEXT_PUBLIC_CURRENT_ENV;

const API = {
  USER_DETAILS: `${baseUrl}/${currentEnv}/api/userDetail`,
};

export { API, currentEnv };
