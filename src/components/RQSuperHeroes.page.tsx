import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAddSuperHeroData, useSuperHerosData } from 'src/hooks/useSuperHerosData';
interface DataProps {
    name:string,
    id:number,
    alterEgo:string,
};

export const RQSuperHerosPage = () => {

    const [name, setName] = useState<string>('');
    const [alterEgo, setAlterEgo] = useState<string>('');

    const onSuccess = (data:DataProps) => {
        console.log(data);
    };
    const onError = (error:any) => {
        console.log(error);
    };
    const handleAddHeroClick = async () =>{
        console.log({name,alterEgo});
        await addHero({name,alterEgo});
        setTimeout(()=>{
            refetch();
        },1000);
    };



    const { isLoading, data, isError, error, isFetching,refetch} = useSuperHerosData(onSuccess,onError);
    const { mutate:addHero } = useAddSuperHeroData();

    if(isLoading || isFetching){
        return <h2>Loading ..... </h2>
    }

    if(isError){
        console.log("에러 :"+error);
    }

    return(
        <>
            <h2>RQSuperHeros Page</h2>
            <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="text" value={alterEgo} onChange={(e)=>setAlterEgo(e.target.value)} />
            <button onClick={handleAddHeroClick}>Add Hero</button>
            </div>
            {
                data?.data.map((hero:DataProps) => {
                    return <Link to={`/rq-super-heros/${hero.id}`} ><div key={hero.name}>{hero.name}</div></Link>
                })
                // data?.map((heroName:any) => {
                //     return <div key={heroName}>{heroName}</div>
                // })
            }
            <div>
                <button onClick={()=>refetch}>re fetch</button>
            </div>
        </>
    );
};