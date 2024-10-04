"use client"
import React, {useState, useEffect, Suspense} from "react";

import {Api} from "@/constants/api";
import { error } from "console";

interface IData
{
    name: string;
    id: string;
    status: string;
    species: string;
    gender: string;
    image: string;
}

const AxiosPg : React.FC = () =>
{
    const [Characters, SetCharacters] = useState<IData[]>([]);
    const [Error, SetError] = useState<number>(-1);
    const [Page, SetPage] = useState<string>("");

    useEffect(() =>
    {
        const Load = async () =>
        {
            Api.get(`/character/?page=${Page}`).then((Res) =>
            {
                const Data = Res.data;
                console.log(Data);
                SetCharacters(Data.results);
            }).catch((err) =>
            {
                if(err.response.status === 404)
                {
                    SetError(404);
                }
            })
        };
        Load();
    }, [Page]);

    return(
        <div className="flex flex-col items-center">
            <span className="text-center">Axios </span>
            <input type="text" className="rounded-md border-solid border-2 border-slate-400 p-1 text-black w-24"
            value={Page} onChange={(e) => {SetPage(e.target.value)}}></input>
            { Error == 404 ? <h2>Página não encontrada</h2> : <></>}
            <div className="flex flex-wrap justify-center items-center gap-2">
                {
                    Characters.map((item, index) =>
                    {
                        return(
                            <>
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
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AxiosPg;