import { useQueries, useQuery } from 'react-query';
import axios from 'axios';



const fetchSuperHero = (heroId:any) =>{
    return axios.get(`http://localhost:4000/superheros/${heroId}`);    
};


export const DynamicParall = ({heroIds}:any) => {

    const queryResults = useQueries(
        heroIds.map( (id:any ) =>{
            return {
                queryKey:['super-hero',id],
                queryFn:() => fetchSuperHero(id)
            }
        })
    );

    console.log({queryResults});

    return (
        <> 
        </>
    );
};