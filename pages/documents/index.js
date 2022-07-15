import {VscFile,VscFolder,VscFolderOpened } from "react-icons/vsc";
import {  HyperLink, List, withLayout } from "../../components";
import { useModal } from "../../hooks";
import {fetchContent} from "../../utils";

const documents = "documents" 

export const getStaticProps = async () => {
    
    const  data = await fetchContent()
    return {
        props:{
            children:data[documents].children
        }
    }
}

const Documents = ({children}) => {
    const {modal, setModal} = useModal()

    const Folder = ({child}) =>  
    <>
        <li
            onClick={() => modal===child.id ? setModal(false) : setModal(child.id)}
        >
            <span className="flex">
                {modal===child.id ? <VscFolderOpened /> : <VscFolder />}
                <span>{child.title}</span>
            </span>
        </li>
        {modal===child.id && <List name={child.id} />}
    </>


    return ( 
        <ul id="section-nav">{children && children.map(child =>
            child.id==='readme'? 
            <HyperLink 
                key={child.id} 
                icon={() => <VscFile />} 
                child={child} 
            /> : 
            <Folder key={child.id} child={child} />
        )}</ul>
    );
}
 
export default withLayout(Documents)(documents);
