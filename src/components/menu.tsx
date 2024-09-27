import Link from "next/link";
import { ROUTES } from "@/constants/routes"

export const Menu = (
    {op1,op2,op3,op4}:
    {
        op1: string;
        op2: string;
        op3: string;
        op4: string;
    }
) =>
{
    const Style =
    {
        p: "bg-cyan-500 px-2 py-1 w-24 text-center text-branco rounded-lg",
        nav: "text-red-500 flex flex-row flex-wrap justify-center align-center gap-10 p-5 bg-blue-700",
    }

    return (
        <>
            <nav className={Style.nav}>
                <Link className={Style.p} href={ROUTES.home}>{op1}</Link>
                <Link className={Style.p} href={ROUTES.math}>{op2}</Link>
                <Link className={Style.p} href={ROUTES.home}>{op3}</Link>
                <Link className={Style.p} href={ROUTES.home}>{op4}</Link>
            </nav>
        </>
    )
}