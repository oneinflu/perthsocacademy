/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    experimental: {
        optimizePackageImports: ["@untitledui/icons"],
    },
    async redirects() {
        return [
            {
                source: "/courses/eybersecurity-fundamentals/",
                destination: "/courses/cybersecurity-fundamentals/",
                permanent: false,
            },
        ];
    },
    allowedDevOrigins: ["http://192.168.0.8:3001"],
};

export default nextConfig;
