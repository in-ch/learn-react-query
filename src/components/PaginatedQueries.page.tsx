import { useQuery } from "react-query";
import axios from 'axios';
import { useState } from "react";

const fetchColors = (pageNumber:number) => {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};

interface ColorProps {
    id:number,
    label:string,
}

export const PaginatedQueries = () => {
    const [pageNumber, setPageNumber] = useState<number>(1);
    const { isLoading, data, isError, error,isFetching } = useQuery(['colors',pageNumber],()=>fetchColors(pageNumber),{
        keepPreviousData:true
    })

    if(isLoading) {
        return <h2>Loading.....</h2>
    }
    if(isError){
        console.log(error);
    }
    return (
        <>
            {data?.data.map((color:ColorProps)=>{
                return (
                    <div key={color.id}>
                        <h2>
                            {color.id} - {color.label}
                        </h2>
                    </div>
                );
            })}
            <div>
                <button onClick={() => setPageNumber(page=>page-1)} disabled={pageNumber === 1}>Prev page</button>
                <button onClick={() => setPageNumber(page=>page+1)} disabled={pageNumber === 4}>Next page</button>
            </div>
            {isFetching && 'Loading....'}
        </>
    );
}
