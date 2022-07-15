import Head from 'next/head'
import { useEffect } from 'react';
import {useRouter} from 'next/router'
import { MdSentimentVeryDissatisfied } from "react-icons/md";

const NotFound = () => {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        },3000)
    //eslint-disable-next-line
    },[])
    
    return ( 
        <>
            <Head>
                <title>letele | 404</title>
            </Head>
            <div id="home">
                <div className='flex'>
                    <MdSentimentVeryDissatisfied />
                    <h1>page not found!!!</h1>
                </div>
            </div>
        </>
    );
}
 
export default NotFound;