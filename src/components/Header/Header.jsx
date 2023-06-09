import './styles.css'
import CartWidget from './CartWidget/CartWidget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

const Header = () => {

  return (
    <>
      <header>
        <nav>
          <a to='/' className="header-brand-name"><FontAwesomeIcon className="header-brand-icon" icon={faPaw} /> Patitas</a>
          <ul className="menu-item-list">
            <a to='/' className="menu-item">HOME</a>
            <a to='/' className="menu-item">NOSOTROS</a>
            <a to='/' className="menu-item">PRODUCTOS</a>
            <a to='/' className="menu-item">CONTACTO</a>
          </ul>
          <CartWidget/>
        </nav>
      </header>
    </>
  )
}

export default Header
