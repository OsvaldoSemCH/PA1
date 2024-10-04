"use client"
import React, {useState, useEffect} from "react";

interface IData
{
    name: string;
    id: string;
}

const FetchPg : React.FC = () =>
{
    const [Characters, SetCharacters] = useState<IData[]>([]);

    useEffect(() =>
    {
        const Load = async () =>
        {
            const Res = await fetch("https://rickandmortyapi.com/api/character");
            const Data = await Res.json();
            SetCharacters(Data.results);
        };
        Load();
    }, []);

    return(
        <>
            <span className="text-center">Fetch </span>
            <div className="flex flex-wrap justify-center items-center gap-2">
                {
                    Characters.map((item, index) =>
                    {
                        return(
                        <div key={item.id} className="w-64 text-center text-white bg-slate-600 rounded-lg border-2 border-solid border-black">
                            <span>{item.name}</span>
                        </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default FetchPg;