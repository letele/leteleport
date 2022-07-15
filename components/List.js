import { VscFile,VscListUnordered} from "react-icons/vsc";
import { useAPI } from "../hooks";
import HyperLink from './HyperLink';

const List = ({id, name}) => {
    const url = "https://letele.github.io/content.json"

    const content = useAPI(url)

    const Icon= ({id}) => (id==="education"||id==="employment") ?
    <VscListUnordered /> : <VscFile />

    return ( 
        <ul id={id}>{content && content[name].children.map( child =>
            <HyperLink 
                key={child.id}
                icon={() => <Icon id={child.id}/>}
                child={child}
            />
        )}</ul>
    );
}
 
export default List;