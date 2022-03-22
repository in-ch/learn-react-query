import axios from 'axios';
import React, { useEffect, useState } from 'react';


interface DataProps {
    name:string,
    id:number,
    alterEgo:string,
};


export const SuperHerosPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:4000/superheros').then((res)=> {
            setData(res.data);
            setIsLoading(false);
        }).catch(error=>{
            setError(error.message);
            setIsLoading(false);
        });
    },[]);

    if(isLoading){
        return <h2>Loading...</h2>
    }

    if(error){
        return <h2>에러 발생 : {error}</h2>
    }

    return(
        <>
            <h2>SuperHeros Page</h2>
            {
                data.map((hero:DataProps)=>{
                    return <div key={hero.name}>{hero.name}</div>
                })
            }
        </>
    );
};