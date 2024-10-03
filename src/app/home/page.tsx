import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bom Dia",
  description: "bom dia",
};

export default function Home() {

  const style =
  {
    label: "text-branco ",
    input: "rounded-md border-solid border-2 border-slate-400 p-1 "
  }

  return (
    <>
      <div className="flex flex-wrap justify-center items-center w-full">
        <form className="bg-slate-600 p-10 m-10 rounded-lg border-2 border-solid border-black">
          <label htmlFor="Nome" className={style.label}>Nome:</label>
          <br></br>
          <input type="text" name="Nome" placeholder="Nome" className={style.input}/>
          <br></br>
          <br></br>
          <label htmlFor="Senha" className={style.label}>Senha:</label>
          <br></br>
          <input type="password" name="Senha" placeholder="Senha" className={style.input}/>
          <br></br>
          <br></br>
          <input type="submit" value={"Entrar"} className={style.input + "bg-white"}/>
        </form>
      </div>
    </>
  );
}
