import { VscLinkExternal } from "react-icons/vsc";
import { withLayout } from "../../components";
import {fetchData} from "../../utils";

const name = 'cfop-algorithms'

export const getStaticProps = async () => {

    const data = await fetchData(name)
    
    return {
        props:{
            data
        }
    }
}

const CFOP = ({data}) => {
    return ( data && 
        <article id="section-article">
            <h2>{data.title}</h2>
            <p>
                <a
                  href = {data.content.a1}
                  rel="noopener noreferrer"
                  target="_blank" 
                  className="link"
                >
                    <span>{data.content.a1}</span>
                    <VscLinkExternal />
                </a>
            </p>
            <p>{data.content.p1}</p>
            <h3>{data.content.h1}</h3>
            <ul className="article-list">
                {data.content.ul1.map(i =><li key={i}>{i}</li>    
            )}</ul>
            <h3>{data.content.h2}</h3>
            <p>{data.content.p2}</p>
           
        </article>
    )
}
 
export default withLayout(CFOP)(name);