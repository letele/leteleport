import {VscFile } from "react-icons/vsc";
import {  HyperLink, withLayout } from "../../components";
import {fetchContent} from "../../utils";

const name = 'applications'

export const getStaticProps = async () => {

    const  data = await fetchContent()

    return {
        props:{
            children:data[name].children
        }
    }
}

const Applications = ({children}) => {
    return ( 
        <ul id="section-nav">{children && children.map(child =>
            <HyperLink 
                key={child.id}
                icon={() => <VscFile />}
                child={child}
            />
        )}</ul>
    );
}
 
export default withLayout(Applications)(name);