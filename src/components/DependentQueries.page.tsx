import {useQuery} from 'react-query';
import axios from 'axios';


const fetchUserByEmail = (email:string) => {
    return axios.get(`http://localhost:4000/users/${email}`);
};
const fetchCoursesByChannelId = (channelId:number) => {
    return axios.get(`http://localhost:4000/users/${channelId}`)
};

export const DependentQueriesPage = ({email}:any) => {

    const {data:user} = useQuery(['user',email],()=>fetchUserByEmail(email));
    const channelId = user?.data?.channelId;

    const {data:courses} = useQuery(['courses',channelId],()=>fetchCoursesByChannelId(channelId),{
        enabled: !!channelId,
    });
    console.log(courses);
    return <div>DependentQueries</div>
}