import { useQuery } from 'react-query';
import axios from 'axios';


type FunctionProps = (data:any)=>void;

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheros');
}


export const useSuperHerosData = (onSuccess:FunctionProps,onError:FunctionProps) => {
    return  useQuery('super-heroes', fetchSuperHeroes,{
        onSuccess,
        onError,
        // select: (data:any)=>{
        //     const superHero = data.data.map((hero:any)=>hero.name);
        //     console.log(superHero);
        //     return superHero;
        // }
    });
}