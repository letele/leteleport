import { VscLinkExternal } from "react-icons/vsc";
import { withLayout } from "../../components";
import {fetchData} from "../../utils";

const name = 'hearts'

export const getStaticProps = async () => {

    const data = await fetchData(name)
    
    return {
        props:{
            data
        }
    }
}

const Hearts = ({data}) => {

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
            <p>{data.content.p2}</p>
        </article>
    )
}
 
export default withLayout(Hearts)(name);