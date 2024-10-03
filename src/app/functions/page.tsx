"use client"
import React, { useState } from "react";

const Fn : React.FC = () =>
{
  const [N1, SetN1] = useState<string>("0");
  const [N2, SetN2] = useState<string>("0");
  const [Answer, SetAnswer] = useState<{Soma: number,Sub: number,Mult: number,Div: number} | null>(null);
  const Error = "Está tudo errado esta porcaria";

  function Calculate({N1, N2} : {N1: string, N2: string})
  {
    const Num1 = parseFloat(N1);
    const Num2 = parseFloat(N2);
    if(isNaN(Num1) || isNaN(Num2))
    {
      SetAnswer(null);
      return;
    }
    SetAnswer(
      {
        Soma: Num1 + Num2,
        Sub: Num1 - Num2,
        Mult: Num1 * Num2,
        Div: Num1 / Num2
      }
    );
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col w-64 md:w-80 items-center bg-slate-600 border-2 border-solid border-black p-10 m-10 rounded-lg text-white gap-2">
          <span>Digite os Números</span>
          <div>
            <input type="text" className="rounded-md border-solid border-2 border-slate-400 p-1 text-black"
            placeholder="N1" onChange={(event) => SetN1(event.target.value)} value={N1}></input>
          </div>
          <div>
            <input type="text" className="rounded-md border-solid border-2 border-slate-400 p-1 text-black"
            placeholder="N2" onChange={(event) => SetN2(event.target.value)} value={N2}></input>
          </div>
          <div>
            <button className="w-36 h-12 border-2 border-solid border-slate-500 bg-slate-100 text-black"
            onClick={() => {Calculate({N1: N1, N2: N2})}}>Calcular Tudo</button>
          </div>
          <div className="flex flex-col">
            {!Answer && Error}
            <span>Soma: {Answer ? Answer.Soma : "Não há"}</span>
            <span>Subtração: {Answer ? Answer.Sub : "Não há"}</span>
            <span>Multiplicação: {Answer ? Answer.Mult : "Não há"}</span>
            <span>Divisão: {Answer ? Answer.Div : "Não há"}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fn;