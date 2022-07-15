import { List, withLayout} from "../../../components";

const name = 'letele'

const Letele = () => {
    return ( 
        <List id={"section-nav"} name={name}/>
    );
}

export default withLayout(Letele)(name);