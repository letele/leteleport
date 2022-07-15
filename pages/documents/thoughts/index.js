import {  List,withLayout} from "../../../components";

const name = "thoughts"

const Thoughts = () => {
    return ( 
        <List id={"section-nav"} name={name}/>
    );
}

export default withLayout(Thoughts)(name);