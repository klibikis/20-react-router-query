import { NavLink } from "react-router-dom"
import style from './NavBar.module.scss'

const NavBar = () => {

  return (
    <nav className= { style.wrapper }>
      <NavLink 
        className={ style.navItem }
        to = "/characters" 
        style={({ isActive }) => isActive ? {color: "black", backgroundColor: "rgba(236, 236, 236, 0.644)"} : {}}>
        Characters
      </NavLink>
      <NavLink 
        className={ style.navItem }
        to = "/" 
        style={({ isActive }) => isActive ? {color: "black", backgroundColor: "rgba(236, 236, 236, 0.644)"} : {}}>
        Home
      </NavLink>
      <NavLink 
        className={ style.navItem }
        to = "/about" 
        style={({ isActive }) => isActive ? {color: "black", backgroundColor: "rgba(236, 236, 236, 0.644)"} : {}}>
        About
      </NavLink>
    </nav>
  )
}

export default NavBar