/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // fully static site; deploy the generated /out folder
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
