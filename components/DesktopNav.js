import { useContext } from 'react';
import Link from 'next/Link';
import { VscChevronRight, VscChevronDown} from "react-icons/vsc";
import {useAPI, useModal, useScreenWidth } from "../hooks";
import { StylesContext } from './StylesContext';

const DesktopNav = ({user}) => {

    const {navListStyles} = useContext(StylesContext)
    
    const url = "https://letele.github.io/content.json"

    const content = useAPI(url)

    const widthSize = useScreenWidth()

    const  {mouseOver, ref, setToggled, toggled } = useModal()

    const Chevron = ({val}) => toggled === val?
    <VscChevronDown onClick={()=> setToggled(false)} className='flex'/> :
    <VscChevronRight 
        className='flex'
        onClick={()=> setToggled(val)} 
        onMouseOver={()=> mouseOver(val)}
    /> 

    return (  widthSize >500 && 
        <nav id='desktop-nav'>
            {content &&<ul className='flex' ref={ref}>
                {content[user].parents.map(parent =>{
                return (
                    <li className='desktop-nav-li' key={parent}>
                        <span className='flex'>
                            {parent!=='root' && 
                                <Link href={content[parent].url}>
                                    <a >{parent}</a>
                                </Link>  
                            }
                            <div >
                                <Chevron val={parent} />
                                {toggled===parent && 
                                <ul style={navListStyles}>
                                    {Object.values(content[parent].children).map(i =>
                                    <li key={i.id}>
                                        <Link href={i.url}>
                                            <a>{i.title}</a>
                                        </Link>  
                                    </li>
                                )}</ul>}
                            </div>
                        </span>
                    </li>
                )})}
                <span>{user.replace('_',' ')}</span>
            </ul>}        
        </nav>
    );
}
 
export default DesktopNav;