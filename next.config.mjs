/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.pexels.com',
              // hostname:'**' for all hosst allow
            },
          
          ],
    }
};

export default nextConfig;
