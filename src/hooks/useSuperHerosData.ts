import { QueryClient, useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';


type FunctionProps = (data:any)=>void;

interface HeroProps {
    name:string,
    alterEgo:string,
};

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheros');
};
const addSuperHero = (hero:HeroProps) => {
    return axios.post(`http://localhost:4000/superheros`,hero);
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
};

export const useAddSuperHeroData = () => {
    const queryClint = useQueryClient();
    return useMutation(addSuperHero,{
        // onSuccess: () => {
        //     queryClint.invalidateQueries('super-heroes');  //  Query Invalidation
        // }
        onSuccess:(data)=>{
            queryClint.setQueryData('super-heroes',(oldQueryData:any)=>{
                return {
                    ...oldQueryData,
                    data:[...oldQueryData.data, data.data]
                }
            });
        }
    });
};