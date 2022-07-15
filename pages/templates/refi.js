import { useContext } from "react";
import { SiFirebase, SiReact } from "react-icons/si";
import { StylesContext, withLayout } from "../../components";
import {fetchData} from "../../utils";

const name = 'refi'

export const getStaticProps = async () => {

    const data = await fetchData(name)
    
    return {
        props:{
            data
        }
    }
}

const Refi = ({data}) => {
    const {navListStyles} = useContext(StylesContext)
    return ( data && 
        <article id="section-article">
            <h2>{data.title}</h2>
            <div id="venn-diagram" style={{border:navListStyles.border}}>
                <div className="cirlce" style={{border:navListStyles.border}}></div>
                <div className="cirlce" style={{border:navListStyles.border}}></div>
                <span id="refi">refi</span>
                <span id="backend">backend</span>
                <span id="frontend">frontend</span>
                <span id="react" ><SiReact /></span>
                <span id="firebase"><SiFirebase /></span>
            </div>
            <h3>{data.content.h1}</h3>
            <ul className="article-list">
                {data.content.ul1.map(i =><li key={i}>{i}</li>)}
            </ul>
            <h3>{data.content.h2}</h3>
            <h4>{data.content.h3}</h4>
            <p className="pl-10">{data.content.p1} :</p>
            <ol className="article-ol-list">
                {data.content.ol1.map(i =>
                <li key={i}>
                   <code>{i}</code> 
                </li>    
            )}</ol>
            <h4>{data.content.h4}</h4>
            <ol className="article-ol-list">{data.content.ol2.map(i =>
                <li key={i}>
                   {i}
                </li>    
            )}</ol>
            <p className="pl-10">{data.content.p2}</p>
        </article>
    )
}
 
export default withLayout(Refi)(name);