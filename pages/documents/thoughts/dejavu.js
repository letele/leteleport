import { withLayout } from "../../../components";
import {fetchData} from "../../../utils";

const name = "dejavu"

export const getStaticProps = async () => {

    const data = await fetchData(name)
    
    return {
        props:{
            data
        }
    }
}

const Dejavu = ({data}) => {
    const p1 = data.content.p1.split('-')
    return ( 
        <article id="section-article">
            <h2>{data.title}</h2>
            <blockquote>
                <div><i>{p1[0]}.</i></div>
                <div><i>~{p1[1]}.</i></div>
             </blockquote>
            <p>{data.content.p2}</p>
            <p>{data.content.p3}</p>
            <p>{data.content.p4}</p>
            <p>{data.content.p5}</p>
        </article>
    );
}
 
export default withLayout(Dejavu)(name);