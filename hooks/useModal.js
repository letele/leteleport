import { useEffect, useState, useRef } from 'react'

const useModal = () => {
    const [toggled, setToggled ] = useState(false)
    const [modal, setModal ] = useState(false)

    const mouseOver = val => toggled && setToggled(val)
    
    const ref = useRef(null)


    useEffect(() => {
        const clickOutside = e =>{
            if(ref.current && !ref.current.contains(e.target)){
                setToggled(false)
                setModal(false)
            }
        } 
        
        document.addEventListener("mousedown", clickOutside)
        
        const cleanup = () => 
        document.removeEventListener("mousedown", clickOutside)
        
        return cleanup
    }, [ref])

    return {mouseOver, ref, setToggled , toggled, modal, setModal}
}

export default useModal


