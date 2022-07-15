import Image from 'next/image'
import {withLayout } from "../../components";
import {fetchData} from "../../utils";

const name = 'readme'

export const getStaticProps = async () => {

    const data = await fetchData(name)
    
    return {
        props:{
            data
        }
    }
}

const Readme = ({data}) => {
    return ( 
        <article id="section-article">
            <h2>{data.title}</h2>
            <p>{data.content.p1}</p>
            <p>{data.content.p2}</p>
            <ul className="article-list">{data.content.ul1.map(i =>
                <li key={i}>{i}</li>    
            )}</ul>
            <p>{data.content.p3}</p>
            <div className='image'>
                <Image 
                    alt="readme" 
                    src="/readme.jpg" 
                    height="300px"
                    width="220px"
                />
            </div>
        </article>
    );
}
 
export default withLayout(Readme)('readme');