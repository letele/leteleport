import { useContext } from 'react';
import {  VscTwitter, VscGithubInverted, VscSymbolColor } from 'react-icons/vsc';
import { StylesContext } from './StylesContext';

const Icons = () => {
    const { setThemeModal } =useContext(StylesContext)
    return ( 
        <ul className='flex' id="icons">
            <li id="twitter-icon" >
                <a  className='flex'
                    href = "https://twitter.com/mtletele"
                    rel="noopener noreferrer"
                    target="_blank" 
                ><VscTwitter /></a>
            </li>
            <li id="github-icon">
                <a  
                    className='flex' 
                    href = "https://github.com/letele"
                    rel="noopener noreferrer"
                    target="_blank" 
                ><VscGithubInverted /></a>
            </li>
            <li id="colors-icon" className='flex'>
                <VscSymbolColor onClick={() => setThemeModal(true)}/>
            </li>
        </ul>
    );
}
 
export default Icons;