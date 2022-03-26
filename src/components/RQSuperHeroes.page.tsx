import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

interface DataProps {
    name:string,
    id:number,
    alterEgo:string,
};

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheros');
}
export const RQSuperHerosPage = () => {


    const [refetch, setRefetch] = useState<boolean>(false);    
    const { isLoading, data, isError, error, isFetching } = useQuery('super-heroes', fetchSuperHeroes,{
        enabled:refetch
    });
    console.log(isLoading, isFetching);
    
    if(isLoading || isFetching){
        return <h2>Loading ..... </h2>
    }

    if(isError){
        console.log("에러 :"+error);
    }

    return(
        <>
            <h2>RQSuperHeros Page</h2>
            <button onClick={()=>setRefetch(!refetch)}>영웅 가져오기</button>
            {
                data?.data.map((hero:DataProps) => {
                    return <div key={hero.name}>{hero.name}</div>
                })
            }
        </>
    );
};