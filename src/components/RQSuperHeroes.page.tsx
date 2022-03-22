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

    // const { isLoading, data } = useQuery('super-heroes', () => {
    //     return axios.get('http://localhost:4000/superheros')
    // });
    
    const { isLoading, data } = useQuery('super-heroes', fetchSuperHeroes);
    
    if(isLoading){
        return <h2>Loading ..... </h2>
    }

    return(
        <>
            <h2>RQSuperHeros Page</h2>
            {
                data?.data.map((hero:DataProps) => {
                    return <div key={hero.name}>{hero.name}</div>
                })
            }
        </>
    );
};