import Link from "next/link";
import React, {Suspense} from "react";

type TData =
{
    results:
    {
        name: string;
        id: string;
        image: string;
        status: string;
        species: string;
        gender: string;
    }[]
}

const ServerSide = async () =>
{
    const Res = await fetch("https://rickandmortyapi.com/api/character");
    const Data : TData = await Res.json();

    return(
        <>
            <span>Server Side Rendering</span>
            <Suspense fallback={<div>Loading...</div>}>
                {
                    Data.results.map((item, index) =>
                    {
                        return(
                            <div key={item.id} className="w-64 flex flex-col text-center text-white bg-slate-600 rounded-lg border-2 border-solid border-black">
                            <span>{item.name}</span>
                                <div className="flex flex-row justify-between items-center">
                                    <img src={item.image} className="w-1/2"></img>
                                    <div className="flex flex-col w-1/2">
                                        <span>{item.species}</span>
                                        <span>{item.status}</span>
                                        <span>{item.gender}</span>
                                    </div>
                                </div>
                                <Link className="w-20 h-8 border-2 border-solid border-slate-500 bg-slate-100 text-black"
                                href={"/character/" + item.id}>ABRIR</Link>
                            </div>
                        )
                    })
                }
            </Suspense>
        </>
    );
};

export default ServerSide;