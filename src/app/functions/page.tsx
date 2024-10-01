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
        <span>1</span>
        <div>
          <input type="text" placeholder="N1" onChange={(event) => SetN1(event.target.value)} value={N1}></input>
        </div>
        <div>
          <input type="text" placeholder="N2" onChange={(event) => SetN2(event.target.value)} value={N2}></input>
        </div>
        <div>
          <button onClick={() => {Calculate({N1: N1, N2: N2})}}>Calcular Tudo</button>
        </div>
        <div className="flex flex-col">
          {!Answer && Error}
          <span>Soma: {Answer ? Answer.Soma : "Não há"}</span>
          <span>Subtração: {Answer ? Answer.Sub : "Não há"}</span>
          <span>Multiplicação: {Answer ? Answer.Mult : "Não há"}</span>
          <span>Divisão: {Answer ? Answer.Div : "Não há"}</span>
        </div>
      </div>
    </>
  );
}

export default Fn;