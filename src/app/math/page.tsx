"use client"
import React, { useState } from "react"

const Maths : React.FC = () =>
{
    const [N1, SetN1] = useState<string>("0");
    const [N2, SetN2] = useState<string>("0");
    const [Answer, SetAnswer] = useState<number | undefined>(0);
    const Error = "Digite um número válido";

    function Calculate(Operation : number)
    {
        let Num1 = parseFloat(N1);
        let Num2 = parseFloat(N2);
        if(isNaN(Num1) || isNaN(Num2))
        {
            SetAnswer(undefined);
            return;
        }
        switch (Operation)
        {
            case 1:
            {
                SetAnswer(Num1 + Num2);
            }
            break;
            case 2:
            {
                SetAnswer(Num1 - Num2);
            }
            break;
            case 3:
            {
                SetAnswer(Num1 * Num2);
            }
            break;
            case 4:
            {
                SetAnswer(Num1 / Num2);
            }
            break;
            default:
            {
                SetAnswer(undefined);
            }
            break;
        }
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center w-full">
                <div className="flex flex-col w-64 md:w-80 items-center border-2 border-solid border-black bg-slate-600 p-10 m-10 rounded-lg text-white gap-2">
                    <div>
                        <label>Number 1</label>
                        <br></br>
                        <input className="rounded-md border-solid border-2 border-slate-400 p-1 text-black"
                        type="text" value={N1} onChange={(event) => SetN1(event.target.value)}></input>
                        <br></br>
                    </div>
                    <div>
                        <label>Number 2</label>
                        <br></br>
                        <input className="rounded-md border-solid border-2 border-slate-400 p-1 text-black"
                        type="text" value={N2} onChange={(event) => SetN2(event.target.value)}></input>
                        <br></br>
                    </div>
                    <h2>Answer:</h2>
                    {
                        isNaN(Answer ?? NaN) ? Error : Answer
                    }
                    <div className="flex flex-wrap w-64 justify-center items-center gap-4">
                        <button onClick={()=>{Calculate(1)}} className="w-20 h-8 border-2 border-solid border-slate-500 bg-slate-100 text-black">Somar</button>
                        <button onClick={()=>{Calculate(2)}} className="w-20 h-8 border-2 border-solid border-slate-500 bg-slate-100 text-black">Subtrair</button>
                        <button onClick={()=>{Calculate(3)}} className="w-20 h-8 border-2 border-solid border-slate-500 bg-slate-100 text-black">Multiplicar</button>
                        <button onClick={()=>{Calculate(4)}} className="w-20 h-8 border-2 border-solid border-slate-500 bg-slate-100 text-black">Dividir</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Maths