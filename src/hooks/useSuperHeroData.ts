import { useQuery } from 'react-query';
import axios from 'axios';

type heroIdProps = string | undefined;

// const fetchSuperHero = (heroId:heroIdProps) => {
//     return axios.get(`http://localhost:4000/superheros/${heroId}`);
// };

const fetchSuperHero = ({queryKey}:any) => {  // 이렇게 쓸 수도 있음. 근데 개인적으로 비추천
    const heroId = queryKey[1];
    return axios.get(`http://localhost:4000/superheros/${heroId}`);
};

export const useSuperHeroData = (heroId:heroIdProps) => {
    // return useQuery(['super-gero',heroId],() => fetchSuperHero(heroId));
    return useQuery(['super-gero',heroId],fetchSuperHero);
}