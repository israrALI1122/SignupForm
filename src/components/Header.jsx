import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <a href="/">logo</a>
    <nav>
        <ul>
            <li> <NavLink to="/home">home</NavLink> </li>
            <li> <NavLink to="/about">about</NavLink> </li>
            <li> <NavLink to="/contacts">contacts</NavLink> </li>
           
        </ul>
    </nav>
   </header>
  )
}

export default Header