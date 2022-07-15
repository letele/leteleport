import { useContext } from 'react';
import Link from 'next/link';
import { VscChevronRight, VscChevronDown} from "react-icons/vsc";
import {useAPI, useModal, useScreenWidth } from "../hooks";
import { StylesContext } from './StylesContext';

const MobileNav = ({user}) => {

    const {navListStyles} = useContext(StylesContext)
    
    const url = "https://letele.github.io/content.json"

    const content = useAPI(url)
    
    const widthSize = useScreenWidth()

    const  {
        ref, 
        setModal , modal,
        setToggled , toggled,
    }  = useModal()

    const Chevron = ({cond}) => 
    cond ? <VscChevronDown /> : <VscChevronRight />

    const NavTitle = () => 
    <span 
        className='flex' 
        onClick={() => setToggled(toggled==='mobileNav'?false:'mobileNav')}
    >
        <Chevron cond={toggled==='mobileNav'} />
        <span>{user.replace('_',' ')}</span>
    </span>

    const NavList = () => content && toggled==='mobileNav'&&
    <ul id="mobile-navlist" style={navListStyles} ref={ref}>
        {Object.values(content.root.children).map(child => {
        
        const modalCond = modal &&modal.includes(child.id)

        return (
            <li key={child.id}>
                <span
                    className='flex' 
                    onClick={() => setModal(modalCond ? false :[child.id])}
                >
                    <Chevron cond={modalCond} />
                    <span>{child.title}</span>
                </span>
                
                {modalCond && <ul>{content[child.id].children.map(i => {
                    return (
                        <li key={i.id} >{(Object.hasOwn(content[i.id], 'children')) ?
                            <>
                                <span 
                                    className='flex' 
                                    onClick={() => 
                                        setModal(modal.includes(i.id)? [child.id] :[child.id,i.id])
                                    }
                                >
                                    <Chevron cond={modal.includes(i.id)} />
                                    <span>{i.title}</span>
                                </span>
                                
                                {modal.includes(i.id) && 
                                <ul>{content[i.id].children.map(j =>
                                    <li key={j.id}>
                                        <Link href={j.url}>
                                            <a>{j.title}</a>
                                        </Link>  
                                    </li>
                                )}</ul>}
                            </> :
                            <Link href={i.url}>
                                <a>{i.title}</a>
                            </Link>  
                        }</li>
                    )
                })}</ul>}
            </li>
        )
    })}</ul>

    return ( widthSize <500 && 
        <nav id='mobile-nav'>
            <NavTitle />

            <NavList />
            
        </nav>
    );
}
 
export default MobileNav;