import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeros = () => {
    return axios.get('http://localhost:4000/superheros');
};

const fetchFriends = () => {
    return axios.get('http://localhost:4000/friends');
};

export const ParallelQueries = () => {

    const { data:superHeroes } = useQuery('super-heros',fetchSuperHeros);
    const { data:friends } = useQuery('friends',fetchFriends);
     

    return (
        <>
            <h1>ParallelQueriesPage</h1>
        </>
    );
}