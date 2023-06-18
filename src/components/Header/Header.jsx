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
          <Link to='/' className="header-brand-name"><FontAwesomeIcon className="header-brand-icon" icon={faPaw} /> Patitas</Link>
          <ul className="menu-item-list">
            <Link to='/' className="menu-item">HOME</Link>
            <a href='#nosotros' className="menu-item">NOSOTROS</a>
            <a href='#productos' className="menu-item">PRODUCTOS</a>
            <a href='#contacto' className="menu-item">CONTACTO</a>
          </ul>
          <CartWidget/>
        </nav>
      </header>
    </>
  )
}

export default Header
