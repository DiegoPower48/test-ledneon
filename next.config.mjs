    /** @type {import('next').NextConfig} */
 const nextConfig = {
  output: "export",
  trailingSlash: true,
  experimental: {
    optimizeCss: true, // asegúrate que esté habilitado
  },
  images: { unoptimized: true },
};


    export default nextConfig;