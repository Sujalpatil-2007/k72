import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { useLocation } from 'react-router-dom'

    export const NavbarContext = createContext()
    export const NavbarColorContext = createContext()

const NavContext = (props) => {

    const [navOpen, setnavOpen] = useState(false)
    const [navColor, setnavColor] = useState('white')

    const locate = useLocation().pathname
    useEffect(() => {
      if(locate == '/projects' || locate == '/agence'){
        setnavColor('black')}
        else{
          setnavColor('white')
        }
    })
    
    
  return (
    <div>
      <NavbarContext.Provider value={[navOpen, setnavOpen]} >
        <NavbarColorContext.Provider value={[navColor,setnavColor]}>
        {props.children}
        </NavbarColorContext.Provider>
      </NavbarContext.Provider>
    </div>
  )
}

export default NavContext
