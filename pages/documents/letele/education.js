import { VscDiffAdded,VscDiffRemoved } from "react-icons/vsc";
import { withLayout } from "../../../components";
import { useModal } from "../../../hooks";
import {fetchData} from "../../../utils";

const name = "education"

export const getStaticProps = async () => {

    const data = await fetchData(name)
    
    return {
        props:{
            data
        }
    }
}


const Education = ({data}) => {
    const {modal,setModal} = useModal()

    const handleClick = val => modal==val ?
    setModal(false) :setModal(val)

    const Icon = ({val}) => modal===val ?
    <VscDiffRemoved /> : <VscDiffAdded />
    
    const EducationList = ({i}) =>  modal===i[0] && 
    <ul>
        <li><strong>{i[1].Institude}</strong> </li>
        <li><strong>Qualification :</strong> {i[1].Qualification}</li>
        <li><strong>Place :</strong> {i[1].Place} </li>
        <li><strong>Status :</strong> {i[1].Status} </li>
    </ul>
    
    return ( data &&
        <ul id="section-list">
            <h2>{data.title}</h2>
            {Object.entries(data.content).map(i =>
                <div key={i[0]}>
                    <li onClick={() => handleClick(i[0])}>
                        <span className="flex">
                            <Icon val={i[0]}/>
                            <span>{i[0]}</span>
                        </span>
                    </li>    
                    <EducationList i={i} />
                </div>
            )}
        </ul>
    );
}
 
export default withLayout(Education)(name);