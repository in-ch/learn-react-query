import { useMutation, useQuery, useQueryClient } from 'react-query';
import { request } from './utils/axios-utils';


type FunctionProps = (data:any)=>void;

interface HeroProps {
    name:string,
    alterEgo:string,
};

const fetchSuperHeroes = () => {
    return request({url:'/superheros'});
};
const addSuperHero = (hero:HeroProps) => {
    return request({url:'/superheros',method:'post',data:hero});
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
        // onSuccess:(data)=>{
        //     queryClint.setQueryData('super-heroes',(oldQueryData:any)=>{
        //         return {
        //             ...oldQueryData,
        //             data:[...oldQueryData.data, data.data]    // 쿼리를 이용한 update 방법
        //         }
        //     });
        // }
        onMutate:async (newHero)=>{        // Optimatic update 
            await queryClint.cancelQueries('super-heroes');
            const previousHeroData = queryClint.getQueryData('super-heroes');
            queryClint.setQueryData('super-heroes',(oldQueryData:any)=>{
                return {
                    ...oldQueryData,
                    data:[...oldQueryData.data, {id:oldQueryData?.data?.length + 1, ...newHero}],    // 쿼리를 이용한 update 방법
                }
            });
            return {
                previousHeroData,
            }
        },
        onError:(_error, _hero, context)=>{
            queryClint.setQueryData('super-heroes',(oldQueryData:any)=>{
                return {
                    ...oldQueryData
                }
            })
        },
        onSettled:()=>{
            queryClint.invalidateQueries('super-heroes');
        },
    });
};