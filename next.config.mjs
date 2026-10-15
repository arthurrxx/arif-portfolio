const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/arif-portfolio" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
