import { withLayout } from "../../../components";
import {fetchData} from "../../../utils";

const name = "cover_letter"


export const getStaticProps = async () => {

    const data = await fetchData(name)
    
    return {
        props:{
            data
        }
    }
}

const CoverLetter = ({data}) => {
    return ( 
        <article id="section-article">
            <h2>{data.title}</h2>
            <p>{data.content.p1}</p>
            <p>{data.content.p2}</p>
            <p>{data.content.p3}</p>
            <p>{data.content.p4}</p>
            <p>{data.content.p5}</p>
        </article>
    );
}
 
export default withLayout(CoverLetter)(name);