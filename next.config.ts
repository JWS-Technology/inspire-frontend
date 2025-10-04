// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration to allow external images
  images: {
    // remotePatterns is the modern way to configure external image sources
    remotePatterns: [
      {
        protocol: "http", // Allow HTTP protocol
        hostname: "**",   // Allow ALL hostnames (wildcard for any domain)
        pathname: "/**",  // Allow ALL paths
      },
      {
        protocol: "https", // Allow HTTPS protocol
        hostname: "**",   // Allow ALL hostnames
        pathname: "/**",  // Allow ALL paths
      },
    ],
  },

  // Keep the previous dev config if you still need it for the cross-origin warning
  // dev: {
  //   allowedDevOrigins: ['http://10.204.114.213'], 
  // },
};

export default nextConfig;