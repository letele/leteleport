import {VscFile } from "react-icons/vsc";
import {  HyperLink, withLayout } from "../../components";
import {fetchContent} from "../../utils";

const templates = "templates" 

export const getStaticProps = async () => {
    
    const  data = await fetchContent()

    return {
        props:{
            children:data[templates].children
        }
    }
}

const Templates = ({children}) => {
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
 
export default withLayout(Templates)(templates);