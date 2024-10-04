import Image from "next/image";

interface ICharacter
{
    params: 
    {
        id: string;
    }
}

interface ICharacterData
{
    name: string;
    id: string;
    status: string;
    species: string;
    gender: string;
    image: string;
}

interface ICharacterDataSI
{
    results: ICharacterData[];
}

const Character = async ({params: {id}} : ICharacter) =>
{
    const Res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const Data : ICharacterData = (await Res.json());

    return(
        <>
        <div key={Data.id} className="w-64 flex flex-col text-center text-white bg-slate-600 rounded-lg border-2 border-solid border-black">
        <span>{Data.name}</span>
            <div className="flex flex-row justify-between items-center">
                <img src={Data.image} className="w-1/2"></img>
                <div className="flex flex-col w-1/2">
                    <span>{Data.species}</span>
                    <span>{Data.status}</span>
                    <span>{Data.gender}</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Character;

export async function generateStaticParams()
{
    const Res = await fetch(`https://rickandmortyapi.com/api/character/`);
    const Data : ICharacterDataSI = await Res.json();
    return Data.results.map((item) => (item.id.toString()));
}