import { useContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/Link'
import {Footer, Icons, StylesContext, ThemeModal} from '../components'
import { fetchContent } from '../utils'

export const getStaticProps = async () => {

    const  data = await fetchContent()

    return {
        props:{
            children:data['root'].children
        }
    }
}

export default function Home({children}) {
    
    const { theme } =useContext(StylesContext)
    
    return ( children &&
        <>
            <Head>
                <title>letele</title>
                <meta name="keywords" content="letele portfolio"/>
                <meta name="description" content="This is Letele Motebang's portfolio that contains his work experience, educational backround, blogs, and web development projects available on Github."/>
            </Head>
            <div id="home" style={theme}>            

                <ThemeModal />

                <header>
                    <Image 
                        alt="avater picture" 
                        src="/avater.jpg" 
                        height="120px"
                        width="120px" 
                    />
                   <Icons />
                </header>
        
                <nav>
                    {children.map(i => <li key={i.id}>
                        <Link href={i.url}>
                            <a >{i.title}</a>
                        </Link>  
                    </li>)}
                </nav>
                    
                <Footer />
            </div>
        </>
    )
}
