/** @type {import('next').NextConfig} */
const nextConfig =
{
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
        ]
    }
};

export default nextConfig;
