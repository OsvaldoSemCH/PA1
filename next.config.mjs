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
            {
                source: "/fn",
                destination:"/functions"
            },
            {
                source: "/tailwindcss",
                destination:"/tailwindcss"
            },
        ]
    }
};

export default nextConfig;
