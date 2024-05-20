/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'you-drive-homologation-bucket.s3.amazonaws.com',
            },
        ],
    },
};

export default nextConfig;
