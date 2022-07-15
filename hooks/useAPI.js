import { useEffect, useState } from "react";

const useAPI = url => {
    const [data,setData ] = useState(null)

    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(res => setData(res))
        .catch(err => console.log(err));
    //eslint-disable-next-line
    },[])

    return data
}

export default useAPI
