import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "*.localhost",
    "cursor.com",
    "*.cursor.com",
    "cursor.sh",
    "*.cursor.sh",
    "*.trycloudflare.com",
  ],
};

export default nextConfig;
