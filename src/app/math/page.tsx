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
            <div>
                <label>Number 1</label>
                <br></br>
                <input type="text" value={N1} onChange={(event) => SetN1(event.target.value)}></input>
                <br></br>
            </div>
            <div>
                <label>Number 2</label>
                <br></br>
                <input type="text" value={N2} onChange={(event) => SetN2(event.target.value)}></input>
                <br></br>
            </div>
            <div>
                <h2>Answer:</h2>
                {
                    isNaN(Answer ?? NaN) ? Error : Answer
                }
                <br></br>
                <button onClick={()=>{Calculate(1)}} className="w-20 h-8 border-2 border-solid border-slate-500">Somar</button>
                <br></br>
                <button onClick={()=>{Calculate(2)}} className="w-20 h-8 border-2 border-solid border-slate-500">Subtrair</button>
                <br></br>
                <button onClick={()=>{Calculate(3)}} className="w-20 h-8 border-2 border-solid border-slate-500">Multiplicar</button>
                <br></br>
                <button onClick={()=>{Calculate(4)}} className="w-20 h-8 border-2 border-solid border-slate-500">Dividir</button>
            </div>
        </>
    )
}
export default Maths