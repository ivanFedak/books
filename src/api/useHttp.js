
import {useState,useCallback} from 'react';

import queryString from 'query-string';
import configApi from "./configApi";

const {baseUrl} = configApi;

const useHttp = () => {
    
    const [process,setProcess] = useState('idle');

    const request = useCallback(async (url,params) => {
        setProcess('loading')
        const setting = baseUrl + url + queryString.stringify(params);
        try{
            const respose = await fetch(setting);
            const data = await respose.json();
            setProcess('idle');
            return data;
        }catch(e){
            setProcess('error')
            console.log(`Error in useHttp, error - ${e}`);
            throw e;
        }
    },[])
    
    const clearError = useCallback(()=>{setProcess('idle');},[]);

    return{process,clearError,request};

};
export default useHttp;