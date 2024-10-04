/** @type {import('next').NextConfig} */
const nextConfig =
{
    images:
    {
        remotePatterns:
        [
            {protocol: "https", hostname: "rickandmortyapi.com"}
        ]
    },
    rewrites: () =>
    {
        return [
            {
                source: "/",
                destination:"/home"
            },
            {
                source: "/math",
                destination:"/math"
            },
            {
                source: "/fn",
                destination:"/functions"
            },
            {
                source: "/tailwindcss",
                destination:"/tailwindcss"
            },
            {
                source: "/fetch",
                destination:"/pg-fetch"
            },
            {
                source: "/axios",
                destination:"/pg-axios"
            },
            {
                source: "/serverside",
                destination:"/server-side"
            },
        ]
    }
};

export default nextConfig;
