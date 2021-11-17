import axios from 'axios';
import { useEffect, useState } from 'react';

const {REACT_APP_YOUTUBE_URL, REACT_APP_YOUTUBE_KEY} = process.env;

export const useYoutubeRequest = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    useEffect(()=>{
        setError(null);
        setData(null);
        setIsLoading(true);

        axios.get(REACT_APP_YOUTUBE_URL,{
            params:{
                key : REACT_APP_YOUTUBE_KEY
            }
        }).then(({data}) => {
            setData(data.items)
        }).catch((error)=>{
            setError(error.message)
        }).finally(() => {
            setIsLoading(false)
        })
    },[])
    return [isLoading, error, data];

};