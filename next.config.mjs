/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
        remotePatterns: [{
            protocol: "https",
            hostname: "pictures.axiomatrix.org",
            port: '',
            pathname: "/**"
        }]
    }
};

export default nextConfig;
