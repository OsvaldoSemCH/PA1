import Link from "next/link";

export const Footer = (
    {Name, Year, Show}:
    {
        Name: string;
        Year: number;
        Show: boolean;
    }
) =>
{
    return (
        <>
        {
            Show ? 
            <footer className="text-white flex justify-center align-center p-2 bg-blue-700 absolute bottom-0 w-full">
                {Name}, {Year}
            </footer> : <></>
        }
        </>
    )
}