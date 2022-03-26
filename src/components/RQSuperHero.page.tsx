import { useParams } from 'react-router-dom';
import { useSuperHeroData } from 'src/hooks/useSuperHeroData';

export const RQSuperHeroPage = () => {

    const { heroId } = useParams();
    const {isLoading,data,isError,error} =useSuperHeroData(heroId);
    
    if(isLoading){
        return <h2>Loading....</h2>
    }
    if(isError){
        return <h2>error 발생!</h2>
    }
    
    return (
        <div>
            <h1>Super Hero details</h1>
            <h2>{data?.data.name}</h2> 
            <h5>{data?.data.alterEgo}</h5>
        </div>
    )
}