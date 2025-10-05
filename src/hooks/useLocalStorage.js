import { useState, useEffect } from 'react';

const useLocalStorage = (key,initialValue) =>{
    const [value,setValue] = useState(()=>{
        try{
            const item = localStorage.getItem(key);
            return item?JSON.parse(item):initialValue;
        }
        catch(error){
            console.error(`Error Loading Storage Key "${key}":`,error);
            return initialValue;
        }
    });

    useEffect(()=>{
        try{
            localStorage.setItem(key,JSON.stringify(value));
        }
        catch(error)
        {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    },[key,value])

    return[value,setValue];
};

export default useLocalStorage;