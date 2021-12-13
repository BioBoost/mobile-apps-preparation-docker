import dotenv from 'dotenv';
dotenv.config();

const config = {
  general: {
    port: process.env.PORT || 3000,
    environment: process.env.NODE_ENV || "development",
    env_message: process.env.ENV_MESSAGE || "There is no env message"
  }
}

export default config;