import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSuperHerosData } from 'src/hooks/useSuperHerosData';
interface DataProps {
    name:string,
    id:number,
    alterEgo:string,
};

export const RQSuperHerosPage = () => {

    const onSuccess = (data:DataProps) => {
        console.log(data);
    };
    const onError = (error:any) => {
        console.log(error);
    };

    const { isLoading, data, isError, error, isFetching} = useSuperHerosData(onSuccess,onError);

    if(isLoading || isFetching){
        return <h2>Loading ..... </h2>
    }

    if(isError){
        console.log("에러 :"+error);
    }

    return(
        <>
            <h2>RQSuperHeros Page</h2>
            {
                data?.data.map((hero:DataProps) => {
                    return <Link to={`/rq-super-heros/${hero.id}`} ><div key={hero.name}>{hero.name}</div></Link>
                })
                // data?.map((heroName:any) => {
                //     return <div key={heroName}>{heroName}</div>
                // })
            }
        </>
    );
};