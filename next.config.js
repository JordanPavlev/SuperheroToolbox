/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    X_RAPIDAPI_BASE : process.env.X_RAPIDAPI_BASE,
    X_RAPIDAPI_KEY : process.env.X_RAPIDAPI_KEY,
    X_RAPIDAPI_HOST : process.env.X_RAPIDAPI_HOST
  }
}

module.exports = nextConfig
