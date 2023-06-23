import { useState } from 'react'
import CartWidget from './CartWidget/CartWidget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import './styles.css'

const Header = () => {
const [active, setActive] = useState(false)
  return (
    <header>
      <nav>
        <Link to='/' className="header-brand-name subtitle"><FontAwesomeIcon className="header-brand-icon" icon={faPaw} /> Patitas</Link>
        <ul className={`menu-item-list ${active ? 'active' : 'inactive'}`}>
          <Link to='/' className="menu-item text">HOME</Link>
          <a href='#nosotros' className="menu-item text">NOSOTROS</a>
          <a href='#productos' className="menu-item text">PRODUCTOS</a>
          <a href='#contacto' className="menu-item text">CONTACTO</a>
        </ul>
        <div className='widgets-box'>
          <CartWidget/>
          <FontAwesomeIcon icon={faBars} className='menu-icon' onClick={()=> setActive(!active)}/>
        </div>  
      </nav>
    </header>
  )
}

export default Header
