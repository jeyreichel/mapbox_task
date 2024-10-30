import dotenv from "dotenv";
dotenv.config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN,
  },
};

export default nextConfig;
