import { VscDiffAdded,VscDiffRemoved } from "react-icons/vsc";
import { withLayout } from "../../../components";
import { useModal } from "../../../hooks";
import {fetchData} from "../../../utils";

const name = "employment"

export const getStaticProps = async () => {

    const data = await fetchData(name)
    
    return {
        props:{
            data
        }
    }
}

const Employment = ({data}) => {
    const {modal,setModal} = useModal()

    const handleClick = val => modal==val ?
    setModal(false) :setModal(val)

    const Icon = ({val}) => modal===val ?
    <VscDiffRemoved /> : <VscDiffAdded />

    const EmploymentList = ({i}) => modal===i[0] && 
    <ul>
        <li><strong>Title :</strong> {i[1].Title}</li>
        <li><strong>Description :</strong> <p>{i[1].Description}</p></li>
        <li><strong>Period :</strong> {i[1].Period.map(j =>
            <span key={i[0]+j}>{j}</span>
        )}</li>
    </ul>
    
    return (data && 
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
                    <EmploymentList i={i} />
                </div>    
            )}
        </ul>
    );
}
 
export default withLayout(Employment)(name);