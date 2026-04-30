import type { NextConfig } from 'next';

const isVercel = process.env.VERCEL === '1';

const nextConfig: NextConfig = {
  output: isVercel ? undefined : 'export',
  basePath: isVercel ? undefined : '/Satyam-Devfolio-Website',
  reactStrictMode: true,
};

export default nextConfig;
